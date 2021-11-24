import React from 'react'
import "./Owner.css";

const Owner = () => {
    return (
        <>
            <section class="owner-dash-wrapper">
                <div class="container">
                    <div class="section-title">
                        <h2>Owner's Dashboard</h2>
                        <p>
                            Various operations the owner can do.
                        </p>
                    </div>

                    <div className="add-admin">
                        <h4>
                            Add new Admin
                        </h4>
                        <div>
                            <form>
                                <div class="row">
                                    <div class="col-md-4 form-group py-1">
                                        <input type="text" name="address" class="form-control" id="admin-address" placeholder="Admin's Address" />
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
                            Remove an Admin
                        </h4>
                        <div>
                            <form>
                                <div class="row">
                                    <div class="col-md-4 form-group py-1">
                                        <input type="text" name="address" class="form-control" id="admin-rmv-address" placeholder="Admin's Address" />
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
                            Transfer Ownership
                        </h4>
                        <div>
                            <form>
                                <div class="row">
                                    <div class="col-md-4 form-group py-1">
                                        <input type="text" name="address" class="form-control" id="owner-address" placeholder="New Owner's Address" />
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

export default Owner
