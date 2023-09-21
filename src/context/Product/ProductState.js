import React from "react";
import ProductContext from "./ProductContext";

import { useState } from "react";

function ProductState(props) {
const [src, setSrc]= useState(null)
const [prodName, setProdName]=useState(null)
const [prodDesc, setProdDesc]=useState(null)
const [prodCost, setProdCost]=useState(null)
const [login, setLogin] = useState(false)
  return (
    <ProductContext.Provider value={{src, setSrc, prodName, setProdName, prodDesc, setProdDesc, prodCost, setProdCost, login, setLogin}}>
        {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState
