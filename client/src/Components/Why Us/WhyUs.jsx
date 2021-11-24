import React from 'react'
import "./WhyUs.css";
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const WhyUs = () => {
    return (
        <section id="why-us" className="why-us">
            <div className="container">

                <div className="row">
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="content">
                            <h3>Why Choose D-Med?</h3>
                            <p>
                                Blockchain technology has a great potential for improving efficiency, security and privacy of Electronic Health Records sharing systems. However, existing solutions relying on a centralized database are susceptible to traditional security problems such as Denial of Service (DoS) attacks and a single point of failure. In addition, past solutions exposed users to privacy linking attacks and did not tackle performance and scalability challenges.
                            </p>
                            <div className="text-center">
                                <Link to="/about" className="more-btn">
                                    {`Learn More >`}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 d-flex align-items-stretch">
                        <div className="icon-boxes d-flex flex-column justify-content-center">
                            <div className="row">
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <Icon icon="fluent:cube-link-20-filled" color="#1977cc" width="40" height="40" style={{ "marginBottom": "30px" }} />
                                        <h4>Based on Blockchain</h4>
                                        <p>The entire system of D-Med is based on blockchain technology. Hence it is practically un hackable</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <Icon icon="fluent:receipt-bag-24-regular" color="#1977cc" width="40" height="40" style={{ "marginBottom": "30px" }} />
                                        <h4>Smart Contracts</h4>
                                        <p>There is no actual person behind the organization. It is a smart contract, making it transparent to the public</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <Icon icon="bx:bx-images" color="#1977cc" width="40" height="40" style={{ "marginBottom": "30px" }} />
                                        <h4>IPFS Storage</h4>
                                        <p>All the media is stored on InterPlanetary File System (IPFS) network. Making it completely safe and private.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default WhyUs
