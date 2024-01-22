import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/User/UserContext'
import CategoryContext from '../context/Category/CategoryContext'

function Navbar() {
    const context = useContext(UserContext)
    const context1 = useContext(CategoryContext)
    const { userInfo, login } = context
    const { setSelectedCategory } = context1

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

                        </ul>
                        <div className="d-flex align-items-center">

                        </div>
                    </div>
                </nav>
            </section>
        </div>
    )
}

export default Navbar
