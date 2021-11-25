import React from 'react'
import "./Patient.css";
import DP from "../../assets/dp.png";

const Patient = ({_id, _name, _gender, _bloodGroup, _DOB, _phoneNumber, _physicalAddress, _profilePicture,
    _walletAddress}) => {
    return (
        <>
            <div className="container patient">
                <div className="row">
                    <div className="col-md-4 sec">
                        <img src={DP} alt="no dp" />
                        <span>
                            Patient Name
                        </span>
                    </div>
                    <div className="col-md-6">
                        <div className="details-patient">
                            <ul>
                                <li className="row">
                                    <span className="col-md-5">Name :</span> Name
                                </li>
                                <li className="row">
                                    <span className="col-md-5">Id :</span> Id
                                </li>
                                <li className="row">
                                    <span className="col-md-5">Gender:</span> Male
                                </li>
                                <li className="row">
                                    <span className="col-md-5">Bloodgroup:</span> B+
                                </li>
                                <li className="row">
                                    <span className="col-md-5">Date of Birth:</span> 16/8/1995
                                </li>
                                <li className="row">
                                    <span className="col-md-5">Phone Number :</span> 8471064554
                                </li>
                                <li className="row">
                                    <span className="col-md-5">Address :</span> long address
                                </li>
                                <li className="row">
                                    <span className="col-md-5">Ethereum Address :</span> 0xfsfgsfg655686
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
