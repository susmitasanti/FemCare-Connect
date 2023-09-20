import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import '../css/style.css'
import '../css/utilities.css'
import WhyUs from './WhyUs'
import ProductContext from '../context/Product/ProductContext'
function Pharmacy() {
    const context = useContext(ProductContext)
    const { setSrc, setProdName, setProdDesc, setProdCost, login} = context
    const OfferedProducts = [
        {
            src: "https://img.icons8.com/ios-filled/50/pills.png",
            name: "Gyno & Menstrual Medicines"
        },
        {
            src: "https://img.icons8.com/external-glyph-andi-nur-abdillah/64/external-Menstrual-Cup-menstruation-(glyph)-glyph-andi-nur-abdillah.png",
            name: "Menstrual Cups"
        },
        {
            src: "https://img.icons8.com/external-ddara-lineal-ddara/64/external-Sanitary-napkin-disposable-products-ddara-lineal-ddara-2.png",
            name: "Sanitary Napkins"
        },
        {
            src: "https://img.icons8.com/ios-glyphs/60/tampon.png",
            name: "Tampons"
        },
    ]

    const featuredProducts = [
        {
            src: "images/iactcup.png",
            name: "Menstrual Cup",
            desc: "i-activ Menstrual Cup for Women | Rash-Free, Leak-Free",
            cost: "₹199"

        },
        {
            src: "images/sterilizing.png",
            name: "Menstrual Cup",
            desc: "PEESAFE Menstrual Cup For Women | Medium Size With Pouch And Menstrual Cup Sterilizing Container Combo | Medical Grade Silicone |",
            cost: "₹499"

        },
        {
            src: "images/everteen.png",
            name: "Menstrual Cup",
            desc: "everteen XS Menstrual Cup (Extra Small) for Periods in Teenage Girls - 1 Pack (16ml Capacity)",
            cost: "₹219"

        },
        {
            src: "images/Tampon1.png",
            name: "Tampon",
            desc: "Sirona Period Made Easy Tampons - 20 Piece | For Medium & Regular Flow | Biodegradable Tampons | FDA Approved",
            cost: "₹197"

        },
        {
            src: "images/tampons2.png",
            name: "Tampon",
            desc: "Menarche 100% Organic Cotton Tampons For Women (40 piece) Regular Flow | FDA approved | Biodegradable | Highly Absorbent | Super Soft & Comfortable",
            cost: "₹498"

        },
        {
            src: "images/tampons3.png",
            name: "Tampon",
            desc: "cambio 100% Organic Cotton Tampons With Cardboard Applicators, 8 Pieces, GOTS Certified, FDA Approved, Dermatologically Tested (Regular)",
            cost: "₹379"

        },
        {
            src: "images/tampons4.png",
            name: "Tampon",
            desc: "Pee Safe 100% Organic Cotton, Biodegradable Tampons, Set Of 2, Trial Pack, 12 Tampons - 4 Regular, 4 Super, 4 Super Plus",
            cost: "₹169"

        },
        {
            src: "images/tonic.png",
            name: "Tonic",
            desc: "Baidyanath Vansaar Health Tonic for Her - 450ml| Specially crafted Ayurvedic formula for PMS Relief| Relieves period cramp",
            cost: "₹170"

        },

    ]

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
                    {OfferedProducts.map((product) => {
                        return <div className="d-flex d-col" style={{ justifyContent: 'center', alignItems: 'center' }}>

                            <Link to="/Home" style={{ textDecoration: 'none' }} target="_blank">
                                <img width="64" height="64" src={product.src} alt="pills" />

                                <h4>{product.name}</h4></Link>
                        </div>
                    })}
                </div>
            </section>

            <section className="d-flex d-col featured-products">
                <h2>Featured Products</h2>
                <div class="row row-cols-4">

                    {featuredProducts.map((product) => {
                        return <div class="col">
                            <div className="card border-primary mb-3" style={{ width: "18rem" }}>
                                <img src={product.src} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.desc}<br />{product.cost}</p>
                                    <Link
                                        to={(login===true)?"/Shipping":"/login"}
                                        className="btn btn-primary"
                                        onClick={() => {
                                            setSrc(product.src);
                                            setProdName(product.name);
                                            setProdDesc(product.desc);
                                            setProdCost(product.cost);
                                        }}
                                    >
                                        Buy
                                    </Link>
                                </div>
                            </div>
                        </div>
                    })
                    }

                </div>

            </section>
            <WhyUs />

        </>
    )
}

export default Pharmacy
