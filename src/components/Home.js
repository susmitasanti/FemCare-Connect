import React from 'react'
import { Link } from 'react-router-dom'
import '../css/style.css'
import '../css/utilities.css'
import WhyUs from './WhyUs'
function Pharmacy() {
    return (
        <>
           <section className="hero">
                <div className="content d-flex d-col">
            <h1>One Stop Solution For All Menstrual Care Products</h1>
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
        <div className="d-flex d-col" style={{ justifyContent: 'center', alignItems: 'center' }}>
                {/* <!-- <i className="fa-solid fa-earth-americas fa-2xl" id="align-padding"></i> --> */}
                <Link to="" style={{ textDecoration: 'none' }} target="_blank">
                <img width="64" height="64" src="https://img.icons8.com/ios-filled/50/pills.png" alt="pills"/>

                <h4>Gyno & Menstrual Medicines</h4></Link>
                
            </div>
            <div className="d-flex d-col" style={{ justifyContent: 'center', alignItems: 'center' }}>
                {/* <!-- <i className="fa-solid fa-truck-medical fa-2xl" id="align-padding"></i> --> */}
                <Link to="" style={{ textDecoration: 'none' }} target="_blank">
                <img width="64" height="64" src="https://img.icons8.com/external-glyph-andi-nur-abdillah/64/external-Menstrual-Cup-menstruation-(glyph)-glyph-andi-nur-abdillah.png" alt="external-Menstrual-Cup-menstruation-(glyph)-glyph-andi-nur-abdillah"/>
                <h4>Menstrual Cups</h4></Link>
               
            </div>
            <div className="d-flex d-col" style={{ justifyContent: 'center', alignItems: 'center' }}>
                {/* <!-- <i className="fa-solid fa-cart-shopping fa-2xl" id="align-padding"></i> --> */}
                <Link to="" style={{ textDecoration: 'none' }} target="_blank">
                <img width="64" height="64" src="https://img.icons8.com/external-ddara-lineal-ddara/64/external-Sanitary-napkin-disposable-products-ddara-lineal-ddara-2.png" alt="external-Sanitary-napkin-disposable-products-ddara-lineal-ddara-2 "/>
                <h4>Sanitary Napkins</h4></Link>
                
            </div>
            <div className="d-flex d-col" style={{ justifyContent: 'center', alignItems: 'center' }}>
                {/* <!-- <i className="fa-solid fa-lock fa-2xl" id="align-padding"></i> --> */}
                <Link to="" style={{ textDecoration: 'none' }} target="_blank">
                <img width="64" height="64" src="https://img.icons8.com/ios-glyphs/60/tampon.png" alt="tampon"/>
                <h4>Tampons</h4></Link>
                
            </div>
        </div>
    </section>

    <section className="d-flex d-col featured-products">
        <h2>Featured Products</h2>
        <div className="d-flex prod-row-align">
            <div>
                <Link to="" className="d-flex d-col text-decor-none">
                    <img src="../images/cupshero.jpg"
                        alt="" />
                    <h4>Sirona Reusable Menstrual Cup for Women - Small Size with Pouch</h4>
                    <span>₹260</span>
                </Link>
            </div>
            <div>
                <Link to="" className="d-flex d-col text-decor-none">
                    <img src="images/iactcup.png"
                        alt="" />
                    <h4>i-activ Menstrual Cup for Women | Rash-Free, Leak-Free</h4>
                    <span>₹199</span>
                </Link>
            </div>
            <div>
                <Link to="" className="d-flex d-col text-decor-none">
                    <img src="../images/sterilizing.png"
                        alt="" />
                    <h4>PEESAFE Menstrual Cup For Women | Medium Size With Pouch And Menstrual Cup Sterilizing Container Combo | Medical Grade Silicone |</h4>
                    <span>₹499</span>
                </Link>
            </div>
            <div>
                <Link to="" className="d-flex d-col text-decor-none">
                    <img src="images/everteen.png"
                        alt="" />
                    <h4>everteen XS Menstrual Cup (Extra Small) for Periods in Teenage Girls - 1 Pack (16ml Capacity)</h4>
                    <span>₹219</span>
                </Link>
            </div>
        </div>
        <div className="d-flex prod-row-align">
            <div>
                <Link to="" className="d-flex d-col text-decor-none">
                    <img src="images/Tampon1.png"
                        alt="" />
                    <h4>Sirona Period Made Easy Tampons - 20 Piece | For Medium & Regular Flow | Biodegradable Tampons | FDA Approved</h4>
                    <span>₹197</span>
                </Link>
            </div>
            <div>
                <Link to="" className="d-flex d-col text-decor-none">
                    <img src="images/tampons2.png"
                        alt="" />
                    <h4>Menarche 100% Organic Cotton Tampons For Women (40 piece) Regular Flow | FDA approved | Biodegradable | Highly Absorbent | Super Soft & Comfortable</h4>
                    <span>₹498</span>
                </Link>
            </div>
            <div>
                <Link to="" className="d-flex d-col text-decor-none">
                    <img src="images/tampons3.png"
                        alt="" />
                    <h4>
                        cambio 100% Organic Cotton Tampons With Cardboard Applicators, 8 Pieces, GOTS Certified, FDA Approved, Dermatologically Tested (Regular)</h4>
                    <span>₹379</span>
                </Link>
            </div>
            <div>
                <Link to="" className="d-flex d-col text-decor-none">
                    <img src="images/tampons4.png"
                        alt="" />
                    <h4>
                        Pee Safe 100% Organic Cotton, Biodegradable Tampons, Set Of 2, Trial Pack, 12 Tampons - 4 Regular, 4 Super, 4 Super Plus</h4>
                    <span>₹169</span>
                </Link>
            </div>
        </div>
        <div className="d-flex prod-row-align">
            <div>
                <Link to="" className="d-flex d-col text-decor-none">
                    <img src="images/tonic.png"
                        alt="" />
                    <h4>Baidyanath Vansaar Health Tonic for Her - 450ml| Specially crafted Ayurvedic formula for PMS Relief| Relieves period cramp</h4>
                    <span>₹170</span>
                </Link>
            </div>
            <div>
                <Link to="" className="d-flex d-col text-decor-none">
                    <img src="images/tonic2..png"
                        alt="" />
                    <h4>Gynoherb Shakti Syrup | Relief From Period Cramps | Regularize Period Cycle | For All Period Problems | Syrup For Irregular Periods and Cramps</h4>
                    <span>₹320</span>
                </Link>
            </div>
            <div>
                <Link to="" className="d-flex d-col text-decor-none">
                    <img src="images/pad.png"
                        alt="" />
                    <h4>Whisper Ultra Skinlove Soft Sanitary Pads for Women|50 thin Pads|XL|Cottony soft|our #1 Softness|Soft top sheet|Irritation free </h4>
                    <span>₹500</span>
                </Link>
            </div>
            <div>
                <Link to="" className="d-flex d-col text-decor-none">
                    <img src="images/rollon.png"
                        alt="" />
                    <h4>Sirona Menstrual Cramp Relief Oil, Roll On for Women - 9 ml |100% Natural Period Pain Reliever | Cramp Comfort and Easy to Use</h4>
                    <span>₹99</span>
                </Link>
            </div>
        </div>
    </section>
    <WhyUs />

        </>
    )
}

export default Pharmacy
