import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/User/UserContext'
import CategoryContext from '../context/Category/CategoryContext'

function Navbar() {
    const context = useContext(UserContext)
    const context1 = useContext(CategoryContext)
    const { userInfo, login } = context
    const { getSelectedCategory, selectedCategory, setSelectedCategory } = context1

    return (
        <div>
            <section>
                <nav className="d-flex navbar">
                    <h2><span><i className="fa-solid fa-prescription-bottle-medical"></i></span>FemCare</h2>
                    <div className="d-flex ">
                        <ul className="d-flex nav-links align-items-center">
                            <li><Link to="/Home" onClick={() => setSelectedCategory(null)}>Home</Link></li>
                            <li className="dropdown">
                                <Link to="#">Categories</Link>
                                <ul className="dropdown-category">
                                    <li><button onClick={() => setSelectedCategory(null)}>All</button></li>
                                    <li><button onClick={() => setSelectedCategory("Medicines")}>Medicines</button></li>
                                    <li><button onClick={() => setSelectedCategory("Menstrual Cups")}>Menstrual Cups</button></li>
                                    <li><button onClick={() => setSelectedCategory("Sanitary Napkins")}>Sanitary Napkins</button></li>
                                    <li><button onClick={() => setSelectedCategory("Tampons")}>Tampons</button></li>
                                </ul>

                            </li>
                            {(login === true) ? (<li><Link to="/MyProducts">My Products</Link></li>) : null}
                            {(login === true && userInfo.role === 'Customer') ? (<li><Link to="/Blogs">Blogs</Link></li>) : null}

                            {(login === true && userInfo.role === 'Customer') ? (<li><Link to="/AddBlog">Add Blog</Link></li>) : null}


                            {(login === true && userInfo.role === 'Customer') ? (<li><Link to="/Tracker">Tracker</Link></li>) : null}

                            {(login === true && userInfo.role === 'Customer') ? (<li><Link to="/Map">Nearby Gyno</Link></li>) : null}

                            <li>  <Link to='/login'><i class="bi bi-box-arrow-in-right"></i> Login</Link></li>


                            {/* <li><Link to="">Discover</Link></li> */}
                            {/* <li><Link to="">About Us</Link></li>
                    <li><Link to="">Contact Us</Link></li> */}

                        </ul>
                        <div className="d-flex align-items-center">

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
