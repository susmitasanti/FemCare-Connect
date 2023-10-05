import React, { useContext, useEffect, useState } from 'react';
import ProductContext from '../context/Product/ProductContext';
import UserContext from '../context/User/UserContext'

import '../css/style.css'; // You can create a CSS file for styling

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




function Shipping() {
  const context = useContext(ProductContext);
  const context1 = useContext(UserContext);

  const [orderId, setOrderId] = useState('');
  const { src, prodName, prodDesc, prodCost } = context;
  const {  userInfo} = context1


  const [name, setName] = useState(userInfo.name)

	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('http://localhost:3001/payment/createOrder', { 
      method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               prod_cost:prodCost
            })
  
  
  }).then((t) =>
			t.json()
		)

		console.log(data)

		const options = {
			key: __DEV__ ? 'rzp_test_gefVaPB7rAAheq' : 'PRODUCTION_KEY',
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'FemCare',
			description: 'Thank you!',
			// image: 'http://localhost:1337/logo.svg',
			handler: function (response) {
				// alert(response.razorpay_payment_id)
				// alert(response.razorpay_order_id)
				// alert(response.razorpay_signature)
			},
			prefill: {
				name,
				phone_number: userInfo.phone
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}


  return (
    <div className="shipping-container">
      <img src={`uploads/${src}`} className="product-image" alt={prodName} />
      <div className="product-details">
        <label htmlFor="ProductName" className="form-label">Product Name</label>
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
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Product Description</label>
          <textarea className="form-control custom-textarea" id="exampleFormControlTextarea1" rows="3" value={prodDesc} disabled readOnly></textarea>
        </div>
        <br />
        <label htmlFor="ProductCost" className="form-label">Price</label>
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
        <br/>
        <button type="button" className="btn btn-success" onClick={displayRazorpay}>Pay with Razorpay</button>
      </div>
    </div>
  );
}

export default Shipping;
