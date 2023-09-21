import React, { useContext, useEffect } from 'react';
import ProductContext from '../context/Product/ProductContext';
import '../css/style.css'; // You can create a CSS file for styling

function Shipping(props) {
  const context = useContext(ProductContext);
  const { src, prodName, prodDesc, prodCost } = context;

  return (
    <div className="shipping-container">
      <img src={src} className="product-image" alt={prodName} />
      <div className="product-details">
        <label htmlFor="ProductName" class="form-label">Product Name</label>
        <input
          className="form-control custom-input"
          id="ProductName"
          type="text"
          value={prodName}
          aria-label="Product Name"
          disabled
          readOnly
        />
        <br />
        <div class="mb-3">
          <label htmlFor="exampleFormControlTextarea1" class="form-label">Product Description</label>
          <textarea class="form-control custom-textarea" id="exampleFormControlTextarea1" rows="3" value={prodDesc} disabled readOnly></textarea>
        </div>
        <br />
        <label htmlFor="ProductCost" class="form-label">Price</label>
        <input
          className="form-control custom-input"
          type="text"
          value={prodCost}
          id="ProductCost"
          aria-label="Product Cost"
          style={{ width: "500px" }}
          disabled
          readOnly
        />
      </div>
    </div>
  );
}

export default Shipping;
