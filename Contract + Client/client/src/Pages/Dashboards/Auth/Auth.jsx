import React, { useState, useEffect } from 'react'
import Patient from '../../../Components/Patient/Patient';
import Record from '../../../Components/Record/Record';
import "./Auth.css";
import { getWeb3 } from "../../../utils.js";
import DMed from "../../../contracts/DMed.json";
import Loading from '../../../Components/Loading/Loading';
import { useHistory } from 'react-router-dom';

const Auth = () => {

    const [web3, setWeb3] = useState(undefined);
    const [accounts, setAccounts] = useState(undefined);
    const [contract, setContract] = useState(undefined);
    const history = useHistory();
    const [patientId, setPatientId] = useState("");
    const [patientIdRec, setPatientIdRec] = useState("");
    const [patient, setPatient] = useState(null);
    const [records, setRecords] = useState([]);

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
            const recs = await contract.methods.getPatientRecords(patientIdRec).call({ from: accounts[0] });
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
        setPatientIdRec("");
    }

    if (!isReady()) {
        return <Loading />;
    }

    return (
        <>
            <section className="auth-dash-wrapper">
                <div className="container">
                    <div className="section-title">
                        <h2>Authorized Dashboard</h2>
                        <p>
                            Various operations an authorized person can do.
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
                                        <input type="number" name="id" className="form-control" id="paitnet-id" placeholder="Patient's Id" required value={patientId}
                                            onChange={e => setPatientId(e.target.value)} />
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
                                        <input type="number" name="address" className="form-control" id="patient-id" placeholder="Patient's Id" required value={patientIdRec} onChange={e => setPatientIdRec(e.target.value)} />
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
                </div>
            </section>
        </>
    )
}

export default Auth
