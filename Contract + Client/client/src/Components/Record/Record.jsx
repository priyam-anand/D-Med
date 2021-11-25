import React from 'react'
import "./Record.css";
import record from "../../assets/medicalRecord.jpg"
const Record = (_hospitalId,_condition_,_description,_allergies,_document) => {
    return (
        <>
            <div className="container record">
                <div className="row">
                    <div className="col-md-7">
                        <div className="details-record">
                            <ul>
                                <li className="row">
                                    <span className="col-md-5">Hospital Id :</span>
                                    <p>
                                        Id
                                    </p>
                                </li>
                                <li className="row">
                                    <span className="col-md-5">Condition :</span> 
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nam obcaecati, quas saepe quae laudantium consequatur vel minus illo, 
                                    </p>
                                </li>
                                <li className="row">
                                    <span className="col-md-5">Description :</span> 
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum saepe in inventore molestias sint doloribus quisquam natus impedit nobis sed, esse eum iste minus. Nostrum nam pariatur reprehenderit magnam?
                                    </p>
                                </li>
                                <li className="row">
                                    <span className="col-md-5">Allergies:</span> <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque, enim nemo amet quam quas!
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 rec">
                        <img src={record} alt="no record"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Record
