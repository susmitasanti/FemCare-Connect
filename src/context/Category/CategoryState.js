import React, { useState } from 'react'
import CategoryContext from './CategoryContext'

function CategoryState(props) {
 const [selectedCategory, setSelectedCategory]=useState(null)
 const [products, setProducts] = useState([])


const getSelectedCategory = async(selectedCategory) =>{
    const url = `http://localhost:3001/api/fetchSelectedCategory?category=${selectedCategory}`  
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        },
    });
    const json = await response.json();
    console.log(json)
    setProducts(json)
}


 return(
    <CategoryContext.Provider value={{ getSelectedCategory, selectedCategory, setSelectedCategory, products, setProducts}}>
        {props.children}
    </CategoryContext.Provider>
 )
}

export default CategoryState
