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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                    Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                                </p>
                                <div className="text-center">
                                    <Link to="/learn-more" className="more-btn">
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
                                        <Icon icon="fluent:receipt-bag-24-regular" color="#1977cc" width="40" height="40" style={{"marginBottom":"30px"}}/>
                                            <h4>Corporis voluptates sit</h4>
                                            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 d-flex align-items-stretch">
                                        <div className="icon-box mt-4 mt-xl-0">
                                        <Icon icon="fluent:cube-link-20-filled" color="#1977cc" width="40" height="40" style={{"marginBottom":"30px"}}/>
                                            <h4>Ullamco laboris ladore pan</h4>
                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 d-flex align-items-stretch">
                                        <div className="icon-box mt-4 mt-xl-0">
                                            <Icon icon="bx:bx-images" color="#1977cc" width="40" height="40" style={{"marginBottom":"30px"}}/>
                                            <h4>Labore consequatur</h4>
                                            <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
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
