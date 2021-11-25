import React, { useState, useEffect } from 'react'
import "./PublicDashBoard.css";
import License1 from "../../../assets/license1.jpg";
import License2 from "../../../assets/license2.jpg";

import { getWeb3 } from "../../../utils.js";
import DMed from "../../../contracts/DMed.json";
import Loading from '../../../Components/Loading/Loading';
import { useHistory } from 'react-router-dom';

const PublicDashBoard = () => {

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
            <section className="appointment ">
                <div className="container">
                    <div className="section-title">
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
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="address" className="form-control" id="admin-address" placeholder="Admin's Address" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0 py-1">
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
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="address" className="form-control" id="hospital-address" placeholder="Hospital's Address" />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="number" name="id" className="form-control" id="hospital-id" placeholder="Hospital's Id" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0 py-1">
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
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="address" className="form-control" id="hospital-address" placeholder="Hospital's Address" />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="number" name="id" className="form-control" id="hospital-id" placeholder="Hospital's Id" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0 py-1">
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
                                        <img src={License1} alt="" />
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
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="address" className="form-control" id="hospital-address" placeholder="Hospital's Address" />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="number" name="id" className="form-control" id="hospital-id" placeholder="Hospital's Id" />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0 py-1">
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
                                        <img src={License2} alt="" />
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
