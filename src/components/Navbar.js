import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/User/UserContext'

function Navbar() {
    const context =useContext(UserContext)
    const {userInfo, setUserInfo}=context
  return (
    <div>
       <section>
        <nav className="d-flex navbar">
            <h2><span><i className="fa-solid fa-prescription-bottle-medical"></i></span>FemCare</h2>
            <div className="d-flex ">
                <ul className="d-flex nav-links align-items-center">
                    <li><Link to="/Home">Home</Link></li>
                    <li className="dropdown">
                        <Link to="#">Categories</Link>
                        <ul className="dropdown-category">
                            <li><Link to="#">Medicine</Link></li>
                            <li><Link to="/MenstrualCups">Menstrual Cups</Link></li>
                            <li><Link to="#">Sanitary Napkins</Link></li>
                            <li><Link to="">Tampons</Link></li>
                        </ul>
                        

                    </li>
                    <li><Link to="/Tracker">Tracker</Link></li>
                    
                    {/* <li style={{display:(userInfo.role==="Customer")?'none': '' }}><Link to="/MyProducts">My Products</Link></li> */}

                    {/* <li><Link to="">Discover</Link></li> */}
                    {/* <li><Link to="">About Us</Link></li>
                    <li><Link to="">Contact Us</Link></li> */}
                    
                </ul>
                <div className="d-flex align-items-center">
                    <div id="search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="search" placeholder="search products & more" />
                    </div>
                    <h2>Login</h2>
                </div>
            </div>
        </nav>
        {/* <!-- <div className="content d-flex d-col">
            <h2></h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, facilis?</p>
            <div className="d-flex"><Link to="#Shop Now" className="btn btn-success">Shop Now</Link>
                <Link to="#Find More" className="btn border-success">Find More</Link>
            </div>
        </div> --> */}
    </section>
    </div>
  )
}

export default Navbar
