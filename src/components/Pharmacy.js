import React from 'react'
import { Link } from 'react-router-dom'

function Pharmacy() {
    return (
        <>
            <section class="hero">
                <nav class="d-flex navbar">
                    <h2><span><i class="fa-solid fa-prescription-bottle-medical"></i></span>FemCare</h2>
                    <div class="d-flex ">
                        <ul class="d-flex nav-links align-items-center">
                            <li><Link to="">Home</Link></li>
                            <li class="dropdown">
                                <Link to="#">Categories</Link>
                                <ul class="dropdown-category">
                                    <li><Link to="#">Medicine</Link></li>
                                    <li><Link to="cups.html" target="_blank">Menstrual Cups</Link></li>
                                    <li><Link to="#">Sanitary Napkins</Link></li>
                                    <li><Link to="">Tampons</Link></li>
                                </ul>
                            </li>
                            <li><Link to="">Discover</Link></li>
                            <li><Link to="">About Us</Link></li>
                            <li><Link to="">Contact Us</Link></li>
                            <li class="d-flex align-items-center">
                                <div id="search">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <input type="search" placeholder="search products & more" />
                                </div>
                            </li>
                            <li><Link to=""><i class="fa-solid fa-heart fa-xl" style={{ color: '#ffffff' }}></i></Link></li>
                            <li><Link to=""><i class="fa-solid fa-circle-user fa-xl" style={{ color: '#ffffff' }}></i></Link></li>
                            <li><Link to=""><i class="fa-solid fa-cart-shopping fa-xl" style={{ color: '#fcfcfc' }}></i></Link></li>
                            <li><Link to=""><i class="fa-solid fa-share-from-square fa-xl" style={{ color: '#ffffff' }}></i></Link></li>
                        </ul>


                    </div>
                </nav>


            </section >
        </>
    )
}

export default Pharmacy
