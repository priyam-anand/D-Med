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
    const [owner, setOwner] = useState(null);
    const [admin, setAdmin] = useState("");
    const [isAdmin, setIsAdmin] = useState("");
    const [hospitalId, setHospitalId] = useState("");
    const [hospital, setHospital] = useState(null);
    const [orgId,setOrgId] = useState("");
    const [org,setOrg] = useState(null);


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

    const getOwner = async (e) => {
        e.preventDefault();

        const owner = await contract.methods.getOwner().call();
        setOwner(owner);
    }

    const getAdmin = async (e) => {
        e.preventDefault();

        const isAdmin = await contract.methods.isAdmin(admin).call();
        if (isAdmin)
            setIsAdmin(admin + " is an admin");
        else
            setIsAdmin(admin + " is not an admin");
        setAdmin("");
    }

    const getHospital = async (e) => {
        e.preventDefault();
        try {
            const hos = await contract.methods.getHospitalById(hospitalId).call();
            setHospital(hos);
        } catch (error) {
            window.alert("Could not get details of hospital. Please check Hospial Id")
        }
        setHospitalId("");
    }

    const getOrg = async (e) => {
        e.preventDefault();
        try {
            const hos = await contract.methods.getOrganizationById(orgId).call();
            setOrg(hos);
        } catch (error) {
            window.alert("Could not get details of Organization. Please check Organization Id")
        }
        setOrgId("");
    }    

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
                            <button onClick={getOwner}>Click Here</button>
                            <span>
                                {owner ? (`Owner's Address : ${owner}`)
                                    : ""}
                            </span>
                        </div>
                    </div>

                    <div className="check-admin">
                        <h4>
                            Check for Admin
                        </h4>
                        <div>
                            <form onSubmit={getAdmin}>
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="address" className="form-control" id="admin-address" placeholder="Admin's Address" required value={admin} onChange={e => setAdmin(e.target.value)} />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0 py-1">
                                        <button type="submit">Click Here</button>
                                    </div>
                                </div>
                            </form>
                            <div className="is-admin">
                                {isAdmin}
                            </div>
                        </div>
                    </div>

                    <div className="get-details">
                        <h4>
                            Get Details of Hospital
                        </h4>
                        <div>
                            <form onSubmit={getHospital}>
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="number" name="id" className="form-control" id="hospital-id" placeholder="Hospital's Id" value={hospitalId} onChange={e => setHospitalId(e.target.value)} required />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0 py-1">
                                        <button type="submit">Click Here</button>
                                    </div>
                                </div>
                            </form>
                            <div className="details">
                                {!hospital
                                    ? <></>
                                    : (<ul>
                                        <li className="row">
                                            <span className="col-md-3">Hospital Name :</span> {hospital.name}
                                        </li>
                                        <li className="row">
                                            <span className="col-md-3">Hospital Id :</span> {hospital.id}
                                        </li>
                                        <li className="row">
                                            <span className="col-md-3">Hospital's Address :</span> {hospital.physicalAddress}
                                        </li>
                                        <li className="row">
                                            <span className="col-md-3">Hospital's Ethereum Address :</span> {hospital.walletAddress}
                                        </li>
                                        <li className="row">
                                            <span className="col-md-3 license">License :</span>
                                            <img src={`https://ipfs.io/ipfs/${hospital.License}`} alt="license of hospital" />
                                        </li>
                                    </ul>)}
                            </div>
                        </div>
                    </div>

                    <div className="get-details">
                        <h4>
                            Get Details of Organization
                        </h4>
                        <div>
                            <form onSubmit={getOrg}>
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="number" name="id" className="form-control" id="org-id" placeholder="Organization's Id" value={orgId} onChange={e=>setOrgId(e.target.value)} required/>
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0 py-1">
                                        <button type="submit">Click Here</button>
                                    </div>
                                </div>
                            </form>
                            <div className="details">
                                {!org
                                    ? <></>
                                    : (<ul>
                                        <li className="row">
                                            <span className="col-md-3">Organization Name :</span> {org.name}
                                        </li>
                                        <li className="row">
                                            <span className="col-md-3">Organization Id :</span> {org.id}
                                        </li>
                                        <li className="row">
                                            <span className="col-md-3">Organization's Ethereum Address :</span> {org.walletAddress}
                                        </li>
                                        <li className="row">
                                            <span className="col-md-3 license">License :</span>
                                            <img src={`https://ipfs.io/ipfs/${org.License}`} alt="license of hospital" />
                                        </li>
                                    </ul>)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PublicDashBoard
