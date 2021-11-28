import React from 'react'
import "./Footer.css";
import { Icon } from '@iconify/react';
const Footer = () => {
    return (
        <>
            <div id="footer">
                <div className="copy-right">
                    <div className="icons-container">
                        <a href="https://github.com/priyam-anand/D-Med" target="_blank" rel="noreferrer">
                            <Icon icon="akar-icons:github-fill" color="#000000" />
                        </a>
                        <a href="https://www.linkedin.com/in/priyam27/" target="_blank" rel="noreferrer">
                            <Icon icon="bi:linkedin" color="#1977cc" />
                        </a>
                        <a href="https://discord.com/" target="_parent">
                            <Icon icon="akar-icons:discord-fill" color="#455383" />
                        </a>
                    </div>
                    <div className="cr">
                        &copy; Copyright <strong><span>D-Med</span></strong>. All Rights Reserved
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
