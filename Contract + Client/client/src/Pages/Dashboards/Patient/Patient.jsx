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
    const [yourId, setYourId] = useState("");
    const [patient, setPatient] = useState(null);
    const [yourIdRec, setYourIdRec] = useState("");
    const [records, setRecords] = useState([]);
    const [addAuthId, setAddAuthId] = useState("");
    const [addAuthAddress, setAddAuthAddress] = useState("");
    const [removeAuthId, setRemoveAuthId] = useState("");
    const [removeAuthAddress, setRemoveAuthAddress] = useState("");

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

    const getPatient = async (e) => {
        e.preventDefault();
        try {
            const pat = await contract.methods.getPatientDetails(yourId).call({ from: accounts[0] });
            setPatient(pat);
        } catch (err) {
            window.alert("Could not get details of patient. Please make sure you have the correct rights and you have the correct Id")
        }
        setYourId("");
    }

    const getRecords = async (e) => {
        e.preventDefault();
        setRecords([]);
        try {
            const recs = await contract.methods.getPatientRecords(yourIdRec).call({ from: accounts[0] });
            const recsArray = [];
            for (let i = 0; i < recs[0].length; i++) {
                recsArray.push({
                    hospitalId: recs[0][i],
                    condition: recs[1][i],
                    description: recs[2][i],
                    allergy: recs[3][i],
                    docs: recs[4][i]
                })
            }
            setRecords(recsArray);
        } catch (err) {
            console.log(err)
            window.alert("Could not get records of patient. Please make sure you have the correct rights and you have the correct Id")
        }
        setYourIdRec("");
    }

    const handleAddAuthAddress = async (e) => {
        e.preventDefault();
        try {
            await contract.methods.addAuthByAddress(addAuthAddress).send({ from: accounts[0] });
            window.alert("Authorized successfully");
        } catch (error) {
            window.alert("Could not authorized. Make sure you have the right privileges");
            console.error(error);
        }
        setAddAuthAddress("");
    }

    const handleAddAuthId = async (e) => {
        e.preventDefault();
        try {
            await contract.methods.addAuthById(addAuthId).send({ from: accounts[0] });
            window.alert("Authorized successfully");
        } catch (error) {
            window.alert("Could not authorized. Make sure you have the right privileges");
            console.error(error);
        }
        setAddAuthId("");
    }

    const handleRemoveAuthAddress = async (e) => {
        e.preventDefault();
        try {
            await contract.methods.revokeAuthByAddress(removeAuthAddress).send({ from: accounts[0] });
            window.alert("Unauthorized successfully");
        } catch (error) {
            window.alert("Could not authorized. Make sure you have the right privileges.");
            console.error(error);
        }
        setRemoveAuthAddress("");
    }

    const handleRemoveAuthId = async (e) => {
        e.preventDefault();
        try {
            await contract.methods.revokeAuthById(removeAuthId).send({ from: accounts[0] });
            window.alert("Unauthorized successfully");
        } catch (error) {
            window.alert("Could not authorized. Make sure you have the right privileges.");
            console.error(error);
        }
        setRemoveAuthId("");
    }

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

                    <div className="get-details">
                        <h4>
                            Get your Details
                        </h4>
                        <div>
                            <form onSubmit={getPatient}>
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="address" className="form-control" id="patient-address" placeholder="Your Id" required value={yourId} onChange={e => setYourId(e.target.value)} />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0 py-1">
                                        <button type="submit">Click Here</button>
                                    </div>
                                </div>
                            </form>
                            {!patient
                                ? <></>
                                : <Patient1 patient={patient} />}
                        </div>
                    </div>

                    <div className="get-details">
                        <h4>
                            Get your Record
                        </h4>
                        <div>
                            <form onSubmit={getRecords}>
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="address" className="form-control" id="patient-address" placeholder="Your Id" value={yourIdRec} onChange={e => setYourIdRec(e.target.value)} required />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0 py-1">
                                        <button type="submit">Click Here</button>
                                    </div>
                                </div>
                            </form>
                            {records.length > 0
                                ?
                                records.map((record, index) => {
                                    return <div key={index}><Record record={record} /></div>
                                })
                                : <></>
                            }
                        </div>
                    </div>
                    <div className="get-details">
                        <h4>
                            Give Authorization
                        </h4>
                        <div>
                            <form onSubmit={handleAddAuthAddress}>
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="address" className="form-control" id="org-address" placeholder="Organization's Address" required value={addAuthAddress} onChange={e => setAddAuthAddress(e.target.value)} />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0 py-1">
                                        <button type="submit">Click Here</button>
                                    </div>
                                </div>
                            </form>
                            <span className="or">
                                Or
                            </span>
                            <form onSubmit={handleAddAuthId}>
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="address" className="form-control" id="org-address" placeholder="Organization's Id" required value={addAuthId} onChange={e => setAddAuthId(e.target.value)} />
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
                            <form onSubmit={handleRemoveAuthAddress}>
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="address" className="form-control" id="org-address" placeholder="Organization's Address" value={removeAuthAddress} onChange={e=>setRemoveAuthAddress(e.target.value)} required/>
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0 py-1">
                                        <button type="submit">Click Here</button>
                                    </div>
                                </div>
                            </form>
                            <span className="or">
                                Or
                            </span>
                            <form onSubmit={handleRemoveAuthId}>
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="address" className="form-control" id="org-address" placeholder="Organization's Id" value={removeAuthId} onChange={e=>setRemoveAuthId(e.target.value)} required/>
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
