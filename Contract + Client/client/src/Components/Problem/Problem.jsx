import React from 'react'
import "./Problem.css";
import {Icon} from "@iconify/react";

const Problem = () => {
    return (
        <>
            <section id="about" className="about">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-1 px-lg-5">
                            <h2>The Problem</h2>
                            <p>
                                An electronic health record is defined as an electronic version of a medical history of the patient as kept by the health care provider. But it consists of some major security and privacy flaws.
                            </p>
                            <div className="icon-box">
                                <div className="icon">
                                    <Icon icon="dashicons:database-remove" className="pro-sol"/>
                                </div>
                                <h4 className="title">
                                    Potential Cybersecurity Issues
                                </h4>
                                <p className="description">The data of the patients lies on a centralized database, which are prone to  Denial of Service (DoS) attacks and single point of failure</p>
                            </div>
                            <div className="icon-box">
                                <div className="icon">
                                <Icon icon="ri:git-repository-private-fill" className="pro-sol"/>
                                </div>
                                <h4 className="title">
                                    Privacy of Patients
                                </h4>
                                <p className="description">If the database ever gets hacked. The data of the Patients can get leaked into the world which is unethical. Centralized systems are vulnerable to privacy attacks as well.</p>
                            </div>
                            <div className="icon-box">
                                <div className="icon">
                                <Icon icon="bpmn:data-output"  className="pro-sol"/>
                                </div>
                                <h4 className="title">
                                    Inaccurate Data
                                </h4>
                                <p className="description">If an EMR is not updated immediately, as soon as new information is known, such as after test results come in, anyone viewing that EMR could receive incorrect. This could lead to errors in diagnosis and treatment.</p>
                            </div>
                            <div className="icon-box">
                                <div className="icon">
                                <Icon icon="emojione-monotone:money-mouth-face" className="pro-sol"/>
                                </div>
                                <h4 className="title">
                                    Time and Money
                                </h4>
                                <p className="description">It also takes time to demo EHR products and negotiate with EHR system vendors to choose and implement the right system for your practice.</p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Problem;
