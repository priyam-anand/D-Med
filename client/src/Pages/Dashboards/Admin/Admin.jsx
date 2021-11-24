import React from 'react'
import "./Admin.css";

const Admin = () => {
    return (
        <>
            <section class="auth-dash-wrapper">
                <div class="container">
                    <div class="section-title">
                        <h2>Admin's Dashboard</h2>
                        <p>
                            Various operations an admin can do.
                        </p>
                    </div>

                    <div className="get-details-patient">
                        <h4>
                            Add new Hospital
                        </h4>
                        <div>
                            <form>
                                <div class="row">
                                    <div class="col-md-4 form-group py-1">
                                        <input type="text" name="name" class="form-control" id="hospital-name" placeholder="Hospital's Name" />
                                    </div>
                                    <div class="col-md-4 form-group py-1">
                                        <input type="text" name="phy-address" class="form-control" id="phy-address" placeholder="Address of hospital" />
                                    </div>
                                    <div class="col-md-4 form-group py-1">
                                        <input type="text" name="name" class="form-control" id="ethereum-address" placeholder="Ethereum Address" />
                                    </div>
                                    <div class="col-md-4 form-group py-1">
                                        <input type="file" name="name" class="form-control" id="license" />
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
                            Add new Organization
                        </h4>
                        <div>
                            <form>
                                <div class="row">
                                    <div class="col-md-4 form-group py-1">
                                        <input type="text" name="name" class="form-control" id="org-name" placeholder="Organization's Name" />
                                    </div>
                                    <div class="col-md-4 form-group py-1">
                                        <input type="text" name="name" class="form-control" id="ethereum-address" placeholder="Ethereum Address" />
                                    </div>
                                    <br/>
                                    <div class="col-md-4 form-group py-1 mx-1">
                                        <input type="file" name="name" class="form-control" id="license" />
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

export default Admin
