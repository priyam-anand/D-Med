import React from 'react'
import Patient from '../../../Components/Patient/Patient';
import Record from '../../../Components/Record/Record';
import "./Auth.css";

const Auth = () => {
    return (
        <>
            <section class="auth-dash-wrapper">
                <div class="container">
                    <div class="section-title">
                        <h2>Authorized Dashboard</h2>
                        <p>
                            Various operations an authorized person can do.
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
                            <Patient/>
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
                            <Record/>
                            <Record/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Auth
