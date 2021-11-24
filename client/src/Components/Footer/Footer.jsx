import React from 'react'
import "./Footer.css";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
const Footer = () => {
    return (
        <>
            <div id="footer">
                <div className="top row">
                    <div className="col-md-6 brand">
                        <span className="inner-head">
                            <h3 style={{ "textDecoration": "underline" }}>D-Med</h3>
                        </span>
                        <span className="outer-head">
                            <ul className="ul">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/services">Services</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                            </ul>
                        </span>
                    </div>
                    <div className="bottom-icons col-md-6">
                        <h5 className="right-head">
                            Some Important Links
                        </h5>
                        <div className="icons-container">
                            <a href="https://github.com/priyam-anand/D-Med" target="_blank" rel="noreferrer">
                                <Icon icon="akar-icons:github-fill" color="#1977cc" />
                            </a>
                            <a href="https://www.linkedin.com/in/priyam27/" target="_blank" rel="noreferrer">
                                <Icon icon="bi:linkedin" color="#1977cc" />
                            </a>
                            <a href="https://discord.com/" target="_parent">
                                <Icon icon="akar-icons:discord-fill" color="#1977cc" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="copy-right">
                        &copy; Copyright <strong><span>D-Med</span></strong>. All Rights Reserved
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
