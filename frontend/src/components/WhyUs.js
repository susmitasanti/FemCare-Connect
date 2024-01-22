import React from 'react'

function WhyUs() {
  return (
    <div>
       <section className="d-flex quality d-col">
        <div>
            <h2>Why Us?</h2>
        </div>
        <div className="d-flex quality">
            <div className="d-flex d-col">
                <i className="fa-solid fa-earth-americas fa-2xl" id="align-padding"></i>
                <h4>Nationwide Shipping</h4>
                <p>Nationwide Reach, Personalized Care-We're on Your Side.</p>
            </div>
            <div className="d-flex d-col">
                <i className="fa-solid fa-truck-medical fa-2xl" id="align-padding"></i>
                <h4>Best Quality</h4>
                <p>A Tradition of Excellence in Every Product and Service.</p>
            </div>
            <div className="d-flex d-col">
                <i className="fa-solid fa-cart-shopping fa-2xl" id="align-padding"></i>
                <h4>Best Offers</h4>
                <p>Affordable Wellness Starts Here - Grab Our Latest Offers!</p>
            </div>
            <div className="d-flex d-col">
                <i className="fa-solid fa-lock fa-2xl" id="align-padding"></i>
                <h4>Secure Payments</h4>
                <p>Safe and Secure Transactions for Your Health and Wellness.</p>
            </div>
        </div>
    </section>
    
    <section className="d-flex about">
        <div className="bg left">
            <img src="/images/about us.jpg" alt="" />
        </div>
        <div className="d-flex d-col right">
            <h2>About US</h2>
            <p>At FemCare,we are more than just a marketplace for menstrual products and medicines;we are a haven dedicated to nurturing women's well-being. Our journey began with a simple yet profound mission:to empower women with the resources they need to embrace every phase of their menstrual cycle and health.
            </p>
            <a href="#Learn More" className="btn abt-btn-width border-success">Learn More</a>
        </div>
    </section>
    <br></br>
    <div className="contact-head">
        <h1>Contact Us!!</h1>
    </div>
    <section className="contact-us d-flex d-col">
        
        <div className="d-flex d-col ">
            <h2 className="padd-down">Get in Touch</h2>
            <p className="padd-down"><i className="fa-solid fa-phone" style={{color: '#000000'}}></i>Phone:999999990</p>
            <p className="padd-down"><i className="fa-solid fa-envelope" style={{color: '#000000'}}></i>Email: abc@gmail.com</p>
            
        </div>
        <form className="d-flex" action="">
            <div className="form-left">
                <div className="d-flex d-col form-padd">
                    <label htmlFor="firstname" className="padding">First Name</label>
                    <input type="text" name="fname" id="firstname" className="textfield-padd" />
                </div>
                <div className="d-flex d-col form-padd">
                    <label htmlFor="lastname" className="padding">Last Name</label>
                    <input type="text" name="lname" id="lastname" className="textfield-padd" />
                </div>
                <div className="d-flex d-col form-padd">
                    <label htmlFor="email-id" className="padding">Email</label>
                    <input type="email" name="email" id="email-id" className="textfield-padd" />
                </div>
            </div>
            <div className="form-right">
                <div className="d-flex d-col form-padd">
                    <label htmlFor="message" className="padding">Message</label>
                    <input type="text" name="msg" id="message" className="textfield" />
                </div>
            </div>
        </form>
        <a href="#Find More" className="cont-btn btn-success">Find More</a>
    </section>

    </div>
  )
}

export default WhyUs
