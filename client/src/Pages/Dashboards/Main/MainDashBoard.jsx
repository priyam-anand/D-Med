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
                                <p>These function are open to all and do not need any special privileges to access.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="icon-box">
                                <div className="icon"><Icon icon="whh:authentication" className="i"/></div>
                                <h4><Link to="/dashboard/authorized">Authorized</Link></h4>
                                <p>These funtions are for the authorized organization only. Make sure that you have the correct access rights before you enter.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                            <div className="icon-box">
                                <div className="icon"><Icon icon="healthicons:hospital-outline" className="i"/></div>
                                <h4><Link to="/dashboard/hospital">Hospital</Link></h4>
                                <p>These funtions are for the verified hospitals only. Make sure that you have the correct access rights before you enter.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <div className="icon-box">
                                <div className="icon"><Icon icon="fluent:patient-32-filled" className="i"/></div>
                                <h4><Link to="/dashboard/patient">Patient</Link></h4>
                                <p>These funtions are for registerd patients only. Make sure that you have the correct access rights before you enter.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <div className="icon-box">
                                <div className="icon"><Icon icon="wpf:administrator" className="i"/></div>
                                <h4><Link to="/dashboard/admin">Admins</Link></h4>
                                <p>These funtions are for the admins only. Make sure that you have the correct access rights before you enter.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <div className="icon-box">
                                <div className="icon"><Icon icon="eos-icons:admin" className="i"/></div>
                                <h4><Link to="/dashboard/owner">Owner</Link></h4>
                                <p>These funtions are for the Owner only. Make sure that you are the owner before you access.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Dashboard
