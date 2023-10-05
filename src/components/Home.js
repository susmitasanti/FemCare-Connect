import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import '../css/style.css'
import '../css/utilities.css'
import WhyUs from './WhyUs'
import ProductContext from '../context/Product/ProductContext'
import UserContext from '../context/User/UserContext'
import CategoryContext from '../context/Category/CategoryContext'

function Pharmacy() {
    const context = useContext(ProductContext)
    const context1 = useContext(UserContext)
    const context2 = useContext(CategoryContext)
    const { setSrc, setProdName, setProdDesc, setProdCost, } = context
    const { login } = context1
    const { getSelectedCategory, selectedCategory, setSelectedCategory, products, setProducts } = context2
    // const [products, setProducts] = useState([])

    const OfferedProducts = [
        {
            src: "https://img.icons8.com/ios-filled/50/pills.png",
            name: "Gyno & Menstrual Medicines",
        },
        {
            src: "https://img.icons8.com/external-glyph-andi-nur-abdillah/64/external-Menstrual-Cup-menstruation-(glyph)-glyph-andi-nur-abdillah.png",
            name: "Menstrual Cups"
        },
        {
            src: "https://img.icons8.com/external-ddara-lineal-ddara/64/external-Sanitary-napkin-disposable-products-ddara-lineal-ddara-2.png",
            name: "Sanitary Napkins"
        },
        {
            src: "https://img.icons8.com/ios-glyphs/60/tampon.png",
            name: "Tampons"
        },
    ]


    const getAllProducts = async () => {
        const url = "http://localhost:3001/api/fetchAllProducts"
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'auth-token': localStorage.getItem('token')
            },
        });
        const json = await response.json();
        setProducts(json);
        console.log(json)
    }

    useEffect(() => {
        if (selectedCategory === null)
            getAllProducts()
        else {
            getSelectedCategory(selectedCategory)
        }
    }, [selectedCategory])


    return (
        <>
            <section className="hero">
                <div className="content d-flex d-col">
                    <h1>One Stop Solution For All  Care Products</h1>
                    <p>Get Experience of certified products!</p>
                    <div className="d-flex"><Link to="#Shop Now" className="btn btn-success">Shop Now</Link>
                        <Link to="#Find More" className="btn border-success">Find More</Link>
                    </div>
                </div>
            </section >

            <section className="quality d-col d-flex">
                <div>
                    <h2>Products We Offer</h2>
                </div>
                <div className="d-flex quality ">
                    {OfferedProducts.map((product) => {
                        return <div className="d-flex d-col" style={{ justifyContent: 'center', alignItems: 'center' }}>

                            <Link to="/Home" style={{ textDecoration: 'none' }} target="_blank">
                                <img width="64" height="64" src={product.src} alt="pills" />

                                <h4>{product.name}</h4></Link>
                        </div>
                    })}
                </div>
            </section>
<section className="d-flex d-col featured-products">
  <h2>Featured Products</h2>
  </section>

  <div className="row">
    {products.map((product) => (
      <div className="col-md-3 mb-4" key={product._id}>
        <div className="card border-primary" style={{ width: "100%", height: "100%" }}>
          <img src={`uploads/${product.image}`} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "cover" }} />
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <div className="card-title-container">
                <h5 className="card-title">{product.prodName}</h5>
              </div>
              <div className="card-text-container">
                <p className="card-text">{product.description ? product.description.slice(0, 90) : ""}<br />{product.price}</p>
              </div>
            </div>
            <div className="button-container text-center mt-auto">
              <Link
                to={(login === true) ? "/Shipping" : "/login"}
                className="btn btn-success custom-buy-button"
                onClick={() => {
                  setSrc(product.image);
                  setProdName(product.prodName);
                  setProdDesc(product.description);
                  setProdCost(product.price);
                }}
              >
                Buy
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>

            <WhyUs />

        </>
    )
}

export default Pharmacy
