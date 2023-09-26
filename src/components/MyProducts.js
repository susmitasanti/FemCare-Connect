import React from 'react'
import { useState, useEffect } from 'react'
function MyProducts() {
    const [myProducts, setMyProducts]=useState([])

    const getMyProducts = async () => {
        const url = "http://localhost:3001/api/fetchMyProducts"
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });
        const json = await response.json();
        setMyProducts(json);
        console.log(json)
    }
    useEffect(()=>{
        getMyProducts()
    },[])
    
  return (
    <div>
     { myProducts.map((product)=>{
        return<div>
       <div className="col">
            <div className="card border-primary mb-3" style={{ width: "18rem" }}>
                <img src={`uploads/${product.image}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.prodName}</h5>
                    <p className="card-text">{product.description}<br />{product.cost}</p>
                    
                </div>
            </div>
        </div>
        </div>
      })}
    </div>
  )
}

export default MyProducts
