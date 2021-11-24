import React from 'react'
import "./Patient.css";
import Patient1 from "../../../Components/Patient/Patient"
import Record from '../../../Components/Record/Record';
const Patient = () => {
    return (
        <>
            <section class="patient-dash-wrapper">
                <div class="container">
                    <div class="section-title">
                        <h2>Patient's Dashboard</h2>
                        <p>
                            Various operations the Patient can do.
                        </p>
                    </div>

                    <div className="patient-detail">
                        <h4 style={{"textAlign":"center"}}>
                            Your details
                        </h4>
                        <div>
                            <Patient1/>
                        </div>
                    </div>

                    <div className="get-details">
                        <h4>
                            Get your Record
                        </h4>
                        <div>
                            <form>
                                <div class="row">
                                    <div class="col-md-4 form-group py-1">
                                        <input type="text" name="address" class="form-control" id="patient-address" placeholder="Your Address" />
                                    </div>
                                    <div class="col-md-4 form-group mt-3 mt-md-0 py-1">
                                        <button type="submit">Click Here</button>
                                    </div>
                                </div>
                            </form>
                            <Record/>
                            <Record/>
                            <Record/>
                        </div>
                    </div>
                    <div className="get-details">
                        <h4>
                            Give Authorization
                        </h4>
                        <div>
                            <form>
                                <div class="row">
                                    <div class="col-md-4 form-group py-1">
                                        <input type="text" name="address" class="form-control" id="org-address" placeholder="Organization's Address" />
                                    </div>
                                    <div class="col-md-4 form-group py-1">
                                        <input type="number" name="id" class="form-control" id="org-id" placeholder="Organization's Id" />
                                    </div>
                                    <div class="col-md-4 form-group mt-3 mt-md-0 py-1">
                                        <button type="submit">Click Here</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="get-details">
                        <h4>
                            Remove Authorization
                        </h4>
                        <div>
                            <form>
                                <div class="row">
                                    <div class="col-md-4 form-group py-1">
                                        <input type="text" name="address" class="form-control" id="org-address" placeholder="Organization's Address" />
                                    </div>
                                    <div class="col-md-4 form-group py-1">
                                        <input type="number" name="id" class="form-control" id="org-id" placeholder="Organization's Id" />
                                    </div>
                                    <div class="col-md-4 form-group mt-3 mt-md-0 py-1">
                                        <button type="submit">Click Here</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Patient
