import React, { useState, useEffect } from 'react'
import "./Admin.css";
import { getWeb3 } from "../../../utils.js";
import DMed from "../../../contracts/DMed.json";
import Loading from '../../../Components/Loading/Loading';
import { useHistory } from 'react-router-dom';

const Admin = () => {

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
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="name" className="form-control" id="hospital-name" placeholder="Hospital's Name" />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="phy-address" className="form-control" id="phy-address" placeholder="Address of hospital" />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="name" className="form-control" id="ethereum-address" placeholder="Ethereum Address" />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="file" name="name" className="form-control" id="license" />
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
                            Add new Organization
                        </h4>
                        <div>
                            <form>
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="name" className="form-control" id="org-name" placeholder="Organization's Name" />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="name" className="form-control" id="ethereum-address" placeholder="Ethereum Address" />
                                    </div>
                                    <br />
                                    <div className="col-md-4 form-group py-1 mx-1">
                                        <input type="file" name="name" className="form-control" id="license" />
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

export default Admin
