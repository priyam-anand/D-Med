import React from 'react'
import "./MainDashBoard.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Dashboard = () => {
    return (
        <>
            <section id="services" className="services">
                <div className="container">
                    <div className="section-title">
                        <h2>Dashboards</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch icon-box-wrapper">
                            <div className="icon-box">
                                <div className="icon"><Icon icon="si-glyph:person-public"  className="i"/></div>
                                <h4><Link to="/dashboard/public">Public</Link></h4>
                                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="icon-box">
                                <div className="icon"><Icon icon="whh:authentication" className="i"/></div>
                                <h4><Link to="/dashboard">Authorized</Link></h4>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                            <div className="icon-box">
                                <div className="icon"><Icon icon="healthicons:hospital-outline" className="i"/></div>
                                <h4><Link to="/dashboard">Hospital</Link></h4>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <div className="icon-box">
                                <div className="icon"><Icon icon="fluent:patient-32-filled" className="i"/></div>
                                <h4><Link to="/dashboard">Patient</Link></h4>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <div className="icon-box">
                                <div className="icon"><Icon icon="wpf:administrator" className="i"/></div>
                                <h4><Link to="/dashboard">Admins</Link></h4>
                                <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <div className="icon-box">
                                <div className="icon"><Icon icon="eos-icons:admin" className="i"/></div>
                                <h4><Link to="/dashboard">Owner</Link></h4>
                                <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Dashboard
