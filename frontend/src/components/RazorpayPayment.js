import React, { useEffect, useState } from 'react';

function RazorpayPayment() {
    const [orderId, setOrderId] = useState(null);
  
    useEffect(() => {
      // Function to create a new orderId
      const createOrderId = async () => {
        try {
          const response = await fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}payment/createOrder`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              amount: '50000',
              product_name:"hmm",
              description:"huhh"
            }),
          });
  
          if (response.ok) {
            const data = await response.json();
            setOrderId(data.orderId);
            console.log(data.orderId);
          } else {
            console.error('Failed to create orderId.');
          }
        } catch (error) {
          console.error('Error creating orderId:', error);
        }
      };
  
      createOrderId();
    }, []);
  
    return (
      <div>
        {/* Render button only when orderId is available */}
        (
          <button onClick={() => console.log('Clicked with orderId:', orderId)}>
            Pay with Razorpay
          </button>
        )
      </div>
    );
  }
  
  export default RazorpayPayment;
  