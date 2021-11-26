import React from 'react'
import "./Patient.css";

const Patient = ({ patient }) => {
    return (
        <>
            <div className="container patient">
                <div className="row">
                    <div className="col-md-4 sec">
                        <img src={`https://ipfs.io/ipfs/${patient[7]}`} alt="no dp" />
                        <span>
                            {patient[1]}
                        </span>
                    </div>
                    <div className="col-md-6">
                        <div className="details-patient">
                            <ul>
                                <li className="row">
                                    <span className="col-md-5">Name :</span> {patient[1]}
                                </li>
                                <li className="row">
                                    <span className="col-md-5">Id :</span> {patient[0]}
                                </li>
                                <li className="row">
                                    <span className="col-md-5">Gender:</span> {patient[2]}
                                </li>
                                <li className="row">
                                    <span className="col-md-5">Bloodgroup:</span> {patient[3]}
                                </li>
                                <li className="row">
                                    <span className="col-md-5">Date of Birth:</span> {patient[4]}
                                </li>
                                <li className="row">
                                    <span className="col-md-5">Phone Number :</span> {patient[5]}
                                </li>
                                <li className="row">
                                    <span className="col-md-5">Address :</span> {patient[6]}
                                </li>
                                <li className="row">
                                    <span className="col-md-5">Ethereum Address :</span> {patient[8]}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Patient
