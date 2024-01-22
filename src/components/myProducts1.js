import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css'
import UserContext from '../context/User/UserContext';
import ProductContext from '../context/Product/ProductContext';

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}
const __DEV__ = document.domain === 'localhost'

function MyProducts() {
    const context = useContext(UserContext)
    const context1 = useContext(ProductContext)
    const [myProducts, setMyProducts] = useState([]);
    const { setSrc, setProdName, setProdDesc, setProdCost, } = context1
    const [addCost] = useState([])
    const { userInfo } = context

    const getMyProducts = async () => {

        if (userInfo.role === 'Customer') {
            console.log(userInfo)
            const url = "http://localhost:3001/api/fetchMyCart";
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
            });
            const json = await response.json();
            setMyProducts(json);
            console.log(json);
        } else {
            const url = "http://localhost:3001/api/fetchMyProducts";
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
            });
            const json = await response.json();
            setMyProducts(json);
            console.log(json);
        }
    };

    async function displayRazorpay() {
        const totalCost = addCost.reduce((accumulator, currentCost) => parseInt(accumulator) + parseInt(currentCost), 0);
        console.log(totalCost)

        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/payment/createOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prod_cost: totalCost,
                    // Add any other required data here
                }),
            });

            if (response.ok) {
                const data = await response.json();

                if (data && data.currency && data.amount && data.id) {
                    const options = {
                        key: __DEV__ ? 'rzp_test_gefVaPB7rAAheq' : 'PRODUCTION_KEY',
                        currency: data.currency,
                        amount: data.amount.toString(),
                        order_id: data.id,
                        name: 'FemCare',
                        description: 'Thank you!',
                        // image: 'http://localhost:1337/logo.svg',
                        handler: function (response) {
                            // Handle successful payment
                            // alert(response.razorpay_payment_id)
                            // alert(response.razorpay_order_id)
                            // alert(response.razorpay_signature)
                        },
                    };
                    const paymentObject = new window.Razorpay(options);
                    paymentObject.open();
                    deleteProduct(data.id)
                } else {
                    alert('Invalid response data from the server');
                }
            } else {
                alert('Failed to create the order. Please try again later.');
            }
        } catch (error) {
            console.error('Error while creating the order:', error);
            alert('An error occurred while creating the order. Please try again later.');
        }
    }

    const deleteProduct = async (productId) => {
        const response = await fetch('http://localhost:3001/api/deleteProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({
                productId: productId,
                // Add any other required data here
            }),
        });
    }

    const deleteAll = async () => {
        const response = await fetch(`http://localhost:3001/api/deleteAll?userId=${userInfo._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            // You can remove the body or modify it as needed
        });
    
        // Handle the response here if required
    };
    

    useEffect(() => {
        getMyProducts()
        // const productCosts = myProducts.map(product => product.price);
        // setAddCost(productCosts);
    }, [myProducts]);

    return (
        <div>
            <section className="d-flex d-col featured-products">
                <div className='row'>
                    <Link to={(userInfo.role === 'Customer') ? '/Home' : '/AddProduct'}><button className='button-feature mb-3'>Add Product</button></Link>
                    {(userInfo.role === 'Customer') ? (
    <button className='button-feature mb-3' onClick={() => { displayRazorpay(); deleteAll(); }}>Buy All</button>
) : null}

                </div>
                <div className="row">
                    {myProducts.map((product) => (
                        <div className="col-md-3" key={product._id}>
                            <div className="card border-primary mb-4" style={{ width: "100%", height: "100%" }}>
                                <img src={`uploads/${product.image}`} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "cover" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.prodName}</h5>
                                    <p className="card-text">
                                        {product.description ? product.description.slice(0, 100) : ""}
                                        <br />
                                        {product.price}
                                    </p>
                                    {userInfo.role === 'Customer' ? (
                                        <> <Link
                                            to='/Shipping'
                                            className="btn btn-success custom-buy-button"
                                            onClick={() => {
                                                setSrc(product.image);
                                                setProdName(product.prodName);
                                                setProdDesc(product.description);
                                                setProdCost(product.price);
                                                deleteProduct(product._id);
                                            }}
                                        >
                                            Buy
                                        </Link>
                                            <div

                                                className="btn btn-success custom-buy-button"
                                                onClick={() => deleteProduct(product._id)}
                                            >
                                                Delete
                                            </div>
                                        </>


                                    ) : null}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
export default MyProducts;
