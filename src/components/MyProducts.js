import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css'

function MyProducts() {
    const [myProducts, setMyProducts] = useState([]);

    const getMyProducts = async () => {
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
    };

    useEffect(() => {
        getMyProducts();
    }, []);

    return (
        <div>

            <section className="d-flex d-col featured-products">
                <Link to='/AddProduct' ><button className='button-feature'>Add Product</button></Link>

                <div className="row">
                    {myProducts.map((product) => (
                        <div className="col-md-3" key={product._id}>
                            <div className="card border-primary mb-4" style={{ width: "100%", height: "100%" }}>
                                <img src={`uploads/${product.image}`} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "cover" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.prodName}</h5>
                                    <p className="card-text">{product.description ? product.description.slice(0, 100) : ""}<br />{product.price}</p>

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
