import React from 'react'
import "./PublicDashBoard.css";
import License1 from "../../../assets/license1.jpg";
import License2 from "../../../assets/license2.jpg"
const PublicDashBoard = () => {
    return (
        <>
            <section class="appointment ">
                <div class="container">
                    <div class="section-title">
                        <h2>Public Dashboard</h2>
                        <p>
                            Explore the different features avaliable for public use.
                        </p>
                    </div>

                    <div className="get-owner">
                        <h4>
                            Get Address of the Owner
                        </h4>
                        <div>
                            <button>Click Here</button>
                            <span>
                                Owner's Address : 0xadlka54df68ad7v64ad8f65a4f687
                            </span>
                        </div>
                    </div>

                    <div className="check-admin">
                        <h4>
                            Check for Admin
                        </h4>
                        <div>
                            <form>
                                <div class="row">
                                    <div class="col-md-4 form-group py-1">
                                        <input type="text" name="address" class="form-control" id="admin-address" placeholder="Admin's Address"/>
                                    </div>
                                    <div class="col-md-4 form-group mt-3 mt-md-0 py-1">
                                        <button type="submit">Click Here</button>
                                    </div>
                                </div>
                            </form>
                            <div className="is-admin">
                                0xadlka54df68ad7v64ad8f65a4f687 is an Admin
                            </div>
                        </div>
                    </div>

                    <div className="get-details">
                        <h4>
                            Get Details of Hospital
                        </h4>
                        <div>
                            <form>
                                <div class="row">
                                    <div class="col-md-4 form-group py-1">
                                        <input type="text" name="address" class="form-control" id="hospital-address" placeholder="Hospital's Address"/>
                                    </div>
                                    <div class="col-md-4 form-group py-1">
                                        <input type="number" name="id" class="form-control" id="hospital-id" placeholder="Hospital's Id"/>
                                    </div>
                                    <div class="col-md-4 form-group mt-3 mt-md-0 py-1">
                                        <button type="submit">Click Here</button>
                                    </div>
                                </div>
                            </form>
                            <div className="details">
                                <ul>
                                    <li className="row">
                                        <span className="col-md-3">Hospital Name :</span> Name
                                    </li>
                                    <li className="row">
                                        <span className="col-md-3">Hospital Id :</span> Id
                                    </li>
                                    <li className="row">
                                        <span className="col-md-3">Hospital's Address :</span> Address
                                    </li>
                                    <li className="row">
                                        <span className="col-md-3">Hospital's Ethereum Address :</span> 0x65ad6f4a9d8f65ad4f6a
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>

                    <div className="get-details">
                        <h4>
                            Get Details of Organization
                        </h4>
                        <div>
                            <form>
                                <div class="row">
                                    <div class="col-md-4 form-group py-1">
                                        <input type="text" name="address" class="form-control" id="hospital-address" placeholder="Hospital's Address"/>
                                    </div>
                                    <div class="col-md-4 form-group py-1">
                                        <input type="number" name="id" class="form-control" id="hospital-id" placeholder="Hospital's Id"/>
                                    </div>
                                    <div class="col-md-4 form-group mt-3 mt-md-0 py-1">
                                        <button type="submit">Click Here</button>
                                    </div>
                                </div>
                            </form>
                            <div className="details">
                                <ul>
                                    <li className="row">
                                        <span className="col-md-3">Hospital Name :</span> Name
                                    </li>
                                    <li className="row">
                                        <span className="col-md-3">Hospital Id :</span> Id
                                    </li>
                                    <li className="row">
                                        <span className="col-md-3">Hospital's Address :</span> Address
                                    </li>
                                    <li className="row">
                                        <span className="col-md-3">Hospital's Ethereum Address :</span> 0x65ad6f4a9d8f65ad4f6a
                                    </li>
                                    <li className="row">
                                        <span className="col-md-3 license">License :</span>
                                        <img src={License1} alt=""/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                
                    <div className="get-details">
                        <h4>
                            Get Details of Hospital
                        </h4>
                        <div>
                            <form>
                                <div class="row">
                                    <div class="col-md-4 form-group py-1">
                                        <input type="text" name="address" class="form-control" id="hospital-address" placeholder="Hospital's Address"/>
                                    </div>
                                    <div class="col-md-4 form-group py-1">
                                        <input type="number" name="id" class="form-control" id="hospital-id" placeholder="Hospital's Id"/>
                                    </div>
                                    <div class="col-md-4 form-group mt-3 mt-md-0 py-1">
                                        <button type="submit">Click Here</button>
                                    </div>
                                </div>
                            </form>
                            <div className="details">
                                <ul>
                                    <li className="row">
                                        <span className="col-md-3">Hospital Name :</span> Name
                                    </li>
                                    <li className="row">
                                        <span className="col-md-3">Hospital Id :</span> Id
                                    </li>
                                    <li className="row">
                                        <span className="col-md-3">Hospital's Address :</span> Address
                                    </li>
                                    <li className="row">
                                        <span className="col-md-3">Hospital's Ethereum Address :</span> 0x65ad6f4a9d8f65ad4f6a
                                    </li>
                                    <li className="row">
                                        <span className="col-md-3 license">License :</span>
                                        <img src={License2} alt=""/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PublicDashBoard
