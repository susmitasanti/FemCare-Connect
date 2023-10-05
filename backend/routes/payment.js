const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay')
const {RAZORPAY_ID_KEY, RAZORPAY_SECRET_KEY}= process.env;

var orderId ;
var instance = new Razorpay({
    key_id: RAZORPAY_ID_KEY,
    key_secret: RAZORPAY_SECRET_KEY,
  });


router.post('/createOrder', (req, res)=>{
    var options = {
        amount: 100*100,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
      };
      instance.orders.create(options, function(err, order) {
        res.json(order)
        console.log(order,{
            
        })
    
      });
})

router.post('/verification', (req, res) => {
	// do a validation
	const secret = RAZORPAY_SECRET_KEY

	console.log(req.body)

	const crypto = require('crypto')

	const shasum = crypto.createHmac('sha256', secret)
	shasum.update(JSON.stringify(req.body))
	const digest = shasum.digest('hex')

	console.log(digest, req.headers['x-razorpay-signature'])

	if (digest === req.headers['x-razorpay-signature']) {
		console.log('request is legit')
		// process it
		require('fs').writeFileSync('payment1.json', JSON.stringify(req.body, null, 4))
	} else {
		// pass it
	}
	res.json({ status: 'ok' })
})
 

  module.exports = router