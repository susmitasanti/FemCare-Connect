import React from "react";
import ProductContext from "./ProductContext";

import { useState } from "react";

function ProductState(props) {
const [src, setSrc]= useState(null)
const [prodName, setProdName]=useState(null)
const [prodDesc, setProdDesc]=useState(null)
const [prodCost, setProdCost]=useState(null)
  return (
    <ProductContext.Provider value={{src, setSrc, prodName, setProdName, prodDesc, setProdDesc, prodCost, setProdCost}}>
        {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState
