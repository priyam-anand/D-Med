import React, { useState, useEffect } from 'react'
import Patient from '../../../Components/Patient/Patient';
import Record from '../../../Components/Record/Record';
import "./Hospital.css";
import { getWeb3 } from "../../../utils.js";
import DMed from "../../../contracts/DMed.json";
import Loading from '../../../Components/Loading/Loading';
import { useHistory } from 'react-router-dom';
import { create } from "ipfs-http-client";

const Hospital = () => {

    const [web3, setWeb3] = useState(undefined);
    const [accounts, setAccounts] = useState(undefined);
    const [contract, setContract] = useState(undefined);
    const [ipfs, setIpfs] = useState(undefined);
    const history = useHistory();
    const [patientId, setPatientId] = useState("");
    const [patient, setPatient] = useState(null);
    const [patientAdd, setPatientAdd] = useState({ name: "", id: "", gender: "", bloodgroup: "", dob: "", number: "", address: "", ethAdd: "" });
    const [patientBuffer, setPatientBuffer] = useState(undefined);
    const [recordAdd, setRecordAdd] = useState({ hosId: "", patId: "", cond: "", desc: "", allergy: "" });
    const [recordBuffer, setRecordBuffer] = useState(undefined);
    const [records, setRecords] = useState([]);
    const [patId, setPatId] = useState("");

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
                const ipfsNode = create('https://ipfs.infura.io:5001');
                setWeb3(web3);
                setAccounts(accounts);
                setContract(contract);
                setIpfs(ipfsNode);
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
            const pat = await contract.methods.getPatientDetails(patientId).call({ from: accounts[0] });
            setPatient(pat);
        } catch (err) {
            window.alert("Could not get details of patient. Please make sure you have the correct rights and you have the correct Id")
        }
        setPatientId("");
    }

    const getRecords = async (e) => {
        e.preventDefault();
        setRecords([]);
        try {
            const recs = await contract.methods.getPatientRecords(patId).call({ from: accounts[0] });
            setRecords(recs);
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
        setPatId("");
    }


    const handleChangePatient = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => {
            setPatientBuffer(Buffer(reader.result));
        }
    }

    const handleSubmitPatient = async (e) => {
        e.preventDefault();
        try {
            const result = await ipfs.add(patientBuffer);
            console.log(result);
            console.log(patientAdd);
            await contract.methods.addNewPatient(patientAdd.id, patientAdd.name, patientAdd.gender, patientAdd.bloodgroup, patientAdd.dob, patientAdd.number, patientAdd.address, result.path, patientAdd.ethAdd).send({ from: accounts[0] });
            window.alert("Patient Registered Successfully");
        } catch (error) {
            window.alert("Patient could not be added. Make sure you are an authorized and check input fields");
            console.error(error);
        }
        setPatientAdd({ name: "", id: "", gender: "", bloodgroup: "", dob: "", number: "", address: "", ethAdd: "" });
    }

    const handleSubmitRecord = async (e) => {
        e.preventDefault();
        try {
            const result = await ipfs.add(recordBuffer);
            await contract.methods.addNewRecord(recordAdd.hosId, recordAdd.patId, recordAdd.cond, recordAdd.desc, recordAdd.allergy, result.path).send({ from: accounts[0] });
            window.alert("Record added Successfully");
        } catch (error) {
            window.alert("Record could not be added. Make sure you are an authorized and check input fields");
            console.error(error);
        }
        setRecordAdd({ hosId: "", patId: "", cond: "", desc: "", allergy: "" })
    }

    const handleChangeRecord = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => {
            setRecordBuffer(Buffer(reader.result));
        }
    }

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
                            <form onSubmit={getPatient}>
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="number" name="id" className="form-control" id="paitnet-id" placeholder="Patient's Id" required value={patientId} onChange={e => setPatientId(e.target.value)} />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0 py-1">
                                        <button type="submit">Click Here</button>
                                    </div>
                                </div>
                            </form>
                            {!patient
                                ? <></>
                                : <Patient patient={patient} />}

                        </div>
                    </div>

                    <div className="get-details">
                        <h4>
                            Get Records of Patient
                        </h4>
                        <div>
                            <form onSubmit={getRecords}>
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="id" className="form-control" id="patient-id" placeholder="Patient's Id" required value={patId} onChange={e => setPatId(e.target.value)} />
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
                    <div className="get-details-patient">
                        <h4>
                            Add new Patient
                        </h4>
                        <div>
                            <form onSubmit={handleSubmitPatient}>
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="name" className="form-control" id="patient-name" placeholder="Patient's Name" required value={patientAdd.name} onChange={e => setPatientAdd({ ...patientAdd, name: e.target.value })} />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="number" name="id" className="form-control" id="patient-id" placeholder="Patient's Id" required value={patientAdd.id} onChange={e => setPatientAdd({ ...patientAdd, id: e.target.value })} />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="gender" className="form-control" id="patient-gender" placeholder="Patient's Gender" required value={patientAdd.gender} onChange={e => setPatientAdd({ ...patientAdd, gender: e.target.value })} />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="blood-group" className="form-control" id="patient-bg" placeholder="Patient's Blood Group" required value={patientAdd.bloodgroup} onChange={e => setPatientAdd({ ...patientAdd, bloodgroup: e.target.value })} />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="dob" className="form-control" id="patient-dob" placeholder="Patient's Date of Birth" required value={patientAdd.dob} onChange={e => setPatientAdd({ ...patientAdd, dob: e.target.value })} />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="phone-number" className="form-control" id="phone-number" placeholder="Patient's Phone Number" required value={patientAdd.number} onChange={e => setPatientAdd({ ...patientAdd, number: e.target.value })} />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="address" className="form-control" id="address" placeholder="Patient's Address" required value={patientAdd.address} onChange={e => setPatientAdd({ ...patientAdd, address: e.target.value })} />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="name" className="form-control" id="ethereum-address" placeholder="Ethereum Address" required value={patientAdd.ethAdd} onChange={e => setPatientAdd({ ...patientAdd, ethAdd: e.target.value })} />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="file" name="name" className="form-control" id="profile-picture" required onChange={handleChangePatient} />
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
                            <form onSubmit={handleSubmitRecord}>
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="hos-id" className="form-control" id="hospital-id" placeholder="Hospital's Id" required value={recordAdd.hosId} onChange={e => setRecordAdd({ ...recordAdd, hosId: e.target.value })} />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="id" className="form-control" id="patient-id" placeholder="Patient's Id" required value={recordAdd.patId} onChange={e => setRecordAdd({ ...recordAdd, patId: e.target.value })} />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="condition" className="form-control" id="patient-condition" placeholder="Patient's Condition" required value={recordAdd.cond} onChange={e => setRecordAdd({ ...recordAdd, cond: e.target.value })} />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="desc" className="form-control" id="descrition" placeholder="Description" required value={recordAdd.desc} onChange={e => setRecordAdd({ ...recordAdd, desc: e.target.value })} />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="allergies" className="form-control" id="allergies" placeholder="Patient's Allergies" required value={recordAdd.allergy} onChange={e => setRecordAdd({ ...recordAdd, allergy: e.target.value })} />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="file" name="name" className="form-control" id="document" required onChange={handleChangeRecord} />
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
