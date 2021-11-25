import React, { useState, useEffect } from 'react'
import Patient from '../../../Components/Patient/Patient';
import Record from '../../../Components/Record/Record';
import "./Hospital.css";
import { getWeb3 } from "../../../utils.js";
import DMed from "../../../contracts/DMed.json";
import Loading from '../../../Components/Loading/Loading';
import { useHistory } from 'react-router-dom';

const Hospital = () => {

    const [web3, setWeb3] = useState(undefined);
    const [accounts, setAccounts] = useState(undefined);
    const [contract, setContract] = useState(undefined);
    const history = useHistory();

    const isReady = () => {
        return (
            typeof contract !== 'undefined'
            && typeof web3 !== 'undefined'
            && typeof accounts !== 'undefined'
        );
    }

    useEffect(() => {
        const init = async () => {
            try {
                const web3 = await getWeb3();
                const accounts = await web3.eth.getAccounts();
                const networkId = await web3.eth.net.getId();
                const deployedNetwork = DMed.networks[networkId];
                const contract = new web3.eth.Contract(
                    DMed.abi,
                    deployedNetwork && deployedNetwork.address,
                );

                setWeb3(web3);
                setAccounts(accounts);
                setContract(contract);
            } catch (error) {
                window.alert(error);
                history.push("/dashboard");
            }
        }
        init();
        if (isReady()) {
            window.ethereum.on('accountsChanged', accounts => {
                setAccounts(accounts);
            });
        }
    }, [history]);

    if (!isReady()) {
        return <Loading />;
    }

    return (
        <>
            <section className="auth-dash-wrapper">
                <div className="container">
                    <div className="section-title">
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
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="number" name="id" className="form-control" id="paitnet-id" placeholder="Patient's Id" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0 py-1">
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
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="address" className="form-control" id="hospital-address" placeholder="Hospital's Address" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0 py-1">
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
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="name" className="form-control" id="patient-name" placeholder="Patient's Name" />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="number" name="id" className="form-control" id="patient-id" placeholder="Patient's Id" />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="gender" className="form-control" id="patient-gender" placeholder="Patient's Gender" />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="blood-group" className="form-control" id="patient-bg" placeholder="Patient's Blood Group" />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="dob" className="form-control" id="patient-dob" placeholder="Patient's Date of Birth" />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="phone-number" className="form-control" id="phone-number" placeholder="Patient's Phone Number" />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="name" className="form-control" id="ethereum-address" placeholder="Ethereum Address" />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="file" name="name" className="form-control" id="profile-picture" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0 py-1">
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
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="hos-id" className="form-control" id="hospital-id" placeholder="Hospital's Id" />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="id" className="form-control" id="patient-id" placeholder="Patient's Id" />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="condition" className="form-control" id="patient-condition" placeholder="Patient's Condition" />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="desc" className="form-control" id="descrition" placeholder="Description" />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="allergies" className="form-control" id="allergies" placeholder="Patient's Allergies" />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="file" name="name" className="form-control" id="document" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0 py-1">
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
