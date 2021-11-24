import React from 'react'
import Patient from '../../../Components/Patient/Patient';
import Record from '../../../Components/Record/Record';
import "./Hospital.css";

const Hospital = () => {
    return (
        <>
            <section class="auth-dash-wrapper">
                <div class="container">
                    <div class="section-title">
                        <h2>Hospital Dashboard</h2>
                        <p>
                            Various operations a hospital can do.
                        </p>
                    </div>

                    <div className="get-details-patient">
                        <h4>
                            Get Details of Patient
                        </h4>
                        <div>
                            <form>
                                <div class="row">
                                    <div class="col-md-4 form-group py-1">
                                        <input type="number" name="id" class="form-control" id="paitnet-id" placeholder="Patient's Id" />
                                    </div>
                                    <div class="col-md-4 form-group mt-3 mt-md-0 py-1">
                                        <button type="submit">Click Here</button>
                                    </div>
                                </div>
                            </form>
                            <Patient />
                        </div>
                    </div>

                    <div className="get-details">
                        <h4>
                            Get Records of Patient
                        </h4>
                        <div>
                            <form>
                                <div class="row">
                                    <div class="col-md-4 form-group py-1">
                                        <input type="text" name="address" class="form-control" id="hospital-address" placeholder="Hospital's Address" />
                                    </div>
                                    <div class="col-md-4 form-group mt-3 mt-md-0 py-1">
                                        <button type="submit">Click Here</button>
                                    </div>
                                </div>
                            </form>
                            <Record />
                        </div>
                    </div>
                    <div className="get-details-patient">
                        <h4>
                            Add new Patient
                        </h4>
                        <div>
                            <form>
                                <div class="row">
                                    <div class="col-md-4 form-group py-1">
                                        <input type="text" name="name" class="form-control" id="patient-name" placeholder="Patient's Name" />
                                    </div>
                                    <div class="col-md-4 form-group py-1">
                                        <input type="number" name="id" class="form-control" id="patient-id" placeholder="Patient's Id" />
                                    </div>
                                    <div class="col-md-4 form-group py-1">
                                        <input type="text" name="gender" class="form-control" id="patient-gender" placeholder="Patient's Gender" />
                                    </div>
                                    <div class="col-md-4 form-group py-1">
                                        <input type="text" name="blood-group" class="form-control" id="patient-bg" placeholder="Patient's Blood Group" />
                                    </div>
                                    <div class="col-md-4 form-group py-1">
                                        <input type="text" name="dob" class="form-control" id="patient-dob" placeholder="Patient's Date of Birth" />
                                    </div>
                                    <div class="col-md-4 form-group py-1">
                                        <input type="text" name="phone-number" class="form-control" id="phone-number" placeholder="Patient's Phone Number" />
                                    </div>
                                    <div class="col-md-4 form-group py-1">
                                        <input type="text" name="name" class="form-control" id="ethereum-address" placeholder="Ethereum Address" />
                                    </div>
                                    <div class="col-md-4 form-group py-1">
                                        <input type="file" name="name" class="form-control" id="profile-picture" />
                                    </div>
                                    <div class="col-md-4 form-group mt-3 mt-md-0 py-1">
                                        <button type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="get-details-patient">
                        <h4>
                            Add new Record
                        </h4>
                        <div>
                            <form>
                                <div class="row">
                                    <div class="col-md-4 form-group py-1">
                                        <input type="text" name="hos-id" class="form-control" id="hospital-id" placeholder="Hospital's Id" />
                                    </div>
                                    <div class="col-md-4 form-group py-1">
                                        <input type="text" name="id" class="form-control" id="patient-id" placeholder="Patient's Id" />
                                    </div>
                                    <div class="col-md-4 form-group py-1">
                                        <input type="text" name="condition" class="form-control" id="patient-condition" placeholder="Patient's Condition" />
                                    </div>
                                    <div class="col-md-4 form-group py-1">
                                        <input type="text" name="desc" class="form-control" id="descrition" placeholder="Description" />
                                    </div>
                                    <div class="col-md-4 form-group py-1">
                                        <input type="text" name="allergies" class="form-control" id="allergies" placeholder="Patient's Allergies" />
                                    </div>
                                    <div class="col-md-4 form-group py-1">
                                        <input type="file" name="name" class="form-control" id="document" />
                                    </div>
                                    <div class="col-md-4 form-group mt-3 mt-md-0 py-1">
                                        <button type="submit">Submit</button>
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

export default Hospital
