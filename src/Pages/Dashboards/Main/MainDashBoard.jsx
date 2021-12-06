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
                        <Link to="/dashboard/public" className="col-lg-4 col-md-6 d-flex align-items-stretch icon-box-wrapper">
                            <div className="icon-box">
                                <div className="icon"><Icon icon="si-glyph:person-public" className="i" /></div>
                                <h4 className="dashboard-text">Public</h4>
                                <p className="dashboard-text">These function are open to all and do not need any special privileges to access.</p>
                            </div>
                        </Link>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <Link to="/dashboard/authorized" className="icon-box">
                                <div className="icon"><Icon icon="whh:authentication" className="i" /></div>
                                <h4>Authorized</h4>
                                <p>These funtions are for the authorized organization only. Make sure that you have the correct access rights before you enter.</p>
                            </Link>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                            <Link to="/dashboard/hospital" className="icon-box">
                                <div className="icon"><Icon icon="healthicons:hospital-outline" className="i" /></div>
                                <h4>Hospital</h4>
                                <p>These funtions are for the verified hospitals only. Make sure that you have the correct access rights before you enter.</p>
                            </Link>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <Link to="/dashboard/patient" className="icon-box">
                                <div className="icon"><Icon icon="fluent:patient-32-filled" className="i" /></div>
                                <h4>Patient</h4>
                                <p>These funtions are for registerd patients only. Make sure that you have the correct access rights before you enter.</p>
                            </Link>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <Link to="/dashboard/admin" className="icon-box">
                                <div className="icon"><Icon icon="wpf:administrator" className="i" /></div>
                                <h4>Admins</h4>
                                <p>These funtions are for the admins only. Make sure that you have the correct access rights before you enter.</p>
                            </Link>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <Link to="/dashboard/owner" className="icon-box">
                                <div className="icon"><Icon icon="eos-icons:admin" className="i" /></div>
                                <h4>Owner</h4>
                                <p>These funtions are for the Owner only. Make sure that you are the owner before you access.</p>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard
