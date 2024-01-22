import React from 'react'
import { Link } from 'react-router-dom'
import '../css/style.css'
import '../css/utilities.css'
import WhyUs from './WhyUs'

function Cups() {
  return (
    <div>
       <div style={{margin:'100px'}}>
       <section className="d-flex d-col featured-products">
        <h2>Best Selling</h2>
        <div className="d-flex prod-row-align">
            <div>
                <Link to="" className="d-flex d-col text-decor-none">
                    <img src="/images/cup.png"
                        alt="" />
                    <h4>Sirona Reusable Menstrual Cup for Women - Small Size with Pouch</h4>
                    <span>₹260</span>
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
                    <img src="images/sterilizing.png"
                        alt="" />
                    <h4>PEESAFE Menstrual Cup For Women | Medium Size With Pouch And Menstrual Cup Sterilizing Container Combo | Medical Grade Silicone |</h4>
                    <span>₹499</span>
                </Link>
            </div>
        </div>
        <br />
        <h1>Silicone Cups Under ₹199</h1>
        <div className="d-flex prod-row-align">
            <div>
                <Link to="" className="d-flex d-col text-decor-none">
                <img src="images/herb.png" alt="" />
                    <h4>MYCUP From MYHERB Menstrual Authentic Original Cups- Medical Grade Silicon Material- with Pouch-Ultra Soft, Odour and Rash Free - No Leakage - Protection for Up to 10 Hours (Large Size)</h4>
                    <span>₹199</span>
                </Link>
            </div>
            <div>
                <Link to="" className="d-flex d-col text-decor-none">
                    <img src="images/cup2.png" alt="" />
                    <h4>KRIDON Menstrual Cups For Women Odour & Rash Free Leakage Proof Infection Free 100 Percent Medical Grade Silicone Reusable Cups Us FDA Approved Medium Size</h4>
                    <span>₹179</span>
                </Link>
            </div>
            <div>
                <Link to="" className="d-flex d-col text-decor-none">
                    <img src="images/cup3.png" alt="" />
                    <h4>Menstrual Cup for Women - Medium Size, Silicone body, Odour and Rash Free, No Leak, Protection for Up to 10-12 Hours, FDA Approved</h4>
                    <span>₹149</span>
                </Link>
            </div><div>
                <Link to="" className="d-flex d-col text-decor-none">
                    <img src="images/cup4.png" alt="" />
                    <h4>GAAZA VALLEY | Ultra Soft | Odor and Rash Free | 100% Medical Grade Silicone | No Leakage | FDA Approved | Reusable Menstrual Cup For Women (Medium)</h4>
                    <span>₹109</span>
                </Link>
            </div>
        </div>
    </section>
    <div>
        <img src="images/info.png" alt="" height="500px" />
    </div>
    </div>
    <WhyUs/>
    </div>
  )
}

export default Cups
