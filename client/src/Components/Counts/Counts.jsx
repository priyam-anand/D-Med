import React from 'react';
import "./Counts.css";
import { Icon } from '@iconify/react';
const Counts = () => {
    return (
        <section id="counts" className="counts">
            <div className="container">

                <div className="row">

                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <div className="icons">
                                <Icon icon="fontisto:doctor" color="white" width="24" height="24"/>
                            </div>
                            <span>85</span>
                            <p>Doctors</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                        <div className="count-box">
                            <div className="icons">
                                <Icon icon="fa-regular:hospital" color="white" width="24" height="24"/>
                            </div>
                            <span>18</span>
                            <p>Departments</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <div className="icons">
                                <Icon icon="ion:flask" color="white" width="24" height="24"/>
                            </div>
                            <span>12</span>
                            <p>Research Labs</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <div className="icons">
                                <Icon icon="fa-solid:award" color="white" width="24" height="24"/>
                            </div>
                            <span>150</span>
                            <p>Awards</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Counts
