import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <div id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto">
                        <a href="index.html" style={{"textDecoration":'none'}}>
                            D-Med
                        </a>
                    </h1>

                    <div id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li>
                                <a className="nav-link scrollto active" href="#hero">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto" href="#about">
                                    About
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto" href="#services">
                                    Services
                                </a>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="nav-link">
                                    <span>
                                        Drop Down
                                    </span>
                                    <i className="bi bi-chevron-down"></i>
                                </a>
                                <ul>
                                    <li>
                                        <a href="#">
                                            Drop Down 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Drop Down 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Drop Down 3
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Drop Down 4
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
