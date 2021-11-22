import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <div id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto">
                        <Link to="/">
                            D-Med
                        </Link>
                    </h1>

                    <div id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="nav-link scrollto">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="nav-link scrollto">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="nav-link scrollto">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
