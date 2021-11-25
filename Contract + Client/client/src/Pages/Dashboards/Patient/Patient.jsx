import React, { useState, useEffect } from 'react'
import "./Patient.css";
import Patient1 from "../../../Components/Patient/Patient"
import Record from '../../../Components/Record/Record';
import { getWeb3 } from "../../../utils.js";
import DMed from "../../../contracts/DMed.json";
import Loading from '../../../Components/Loading/Loading';
import { useHistory } from 'react-router-dom';

const Patient = () => {

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
            <section className="patient-dash-wrapper">
                <div className="container">
                    <div className="section-title">
                        <h2>Patient's Dashboard</h2>
                        <p>
                            Various operations the Patient can do.
                        </p>
                    </div>

                    <div className="patient-detail">
                        <h4 style={{ "textAlign": "center" }}>
                            Your details
                        </h4>
                        <div>
                            <Patient1 />
                        </div>
                    </div>

                    <div className="get-details">
                        <h4>
                            Get your Record
                        </h4>
                        <div>
                            <form>
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="address" className="form-control" id="patient-address" placeholder="Your Address" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0 py-1">
                                        <button type="submit">Click Here</button>
                                    </div>
                                </div>
                            </form>
                            <Record />
                            <Record />
                            <Record />
                        </div>
                    </div>
                    <div className="get-details">
                        <h4>
                            Give Authorization
                        </h4>
                        <div>
                            <form>
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="address" className="form-control" id="org-address" placeholder="Organization's Address" />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="number" name="id" className="form-control" id="org-id" placeholder="Organization's Id" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0 py-1">
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
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="address" className="form-control" id="org-address" placeholder="Organization's Address" />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="number" name="id" className="form-control" id="org-id" placeholder="Organization's Id" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0 py-1">
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
