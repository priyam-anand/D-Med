import React, { useState, useEffect } from 'react'
import "./Admin.css";
import { getWeb3 } from "../../../utils.js";
import DMed from "../../../contracts/DMed.json";
import Loading from '../../../Components/Loading/Loading';
import { useHistory } from 'react-router-dom';
import { create } from "ipfs-http-client";


const Admin = () => {

    const [web3, setWeb3] = useState(undefined);
    const [accounts, setAccounts] = useState(undefined);
    const [contract, setContract] = useState(undefined);
    const [ipfs, setIpfs] = useState(undefined);
    const history = useHistory();
    const [hospital, setHospital] = useState({ name: "", address: "", ethAdd: "" });
    const [hospitalBuffer, setHospitalBuffer] = useState("");
    const [org,setOrg] = useState({name:"",ethAdd:""});
    const [orgBuffer,setOrgBuffer] = useState("");


    const isReady = () => {
        return (
            typeof contract !== 'undefined'
            && typeof web3 !== 'undefined'
            && typeof accounts !== 'undefined'
            && typeof ipfs !== 'undefined'
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

    if (!isReady()) {
        return <Loading />;
    }

    const handleChangeHospital = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => {
            setHospitalBuffer(Buffer(reader.result));
        }
    }

    const handleChangeOrg = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => {
            setOrgBuffer(Buffer(reader.result));
        }
    }

    const handleSubmitHospital = async (e) => {
        e.preventDefault();
        try {
            const result = await ipfs.add(hospitalBuffer);
            console.log("IPFS Hash",result);
            await contract.methods.addHospital(hospital.name, hospital.address, hospital.ethAdd, result.path).send({from:accounts[0]});
            window.alert("Hospital Registered Successfully"); 
        } catch (error) {
            window.alert("Hospital Could not be added. Make sure you are an admin and check input fields");
            console.error(error);
        }
        setHospital({ name: "", address: "", ethAdd: "" });
    }

    const handleSubmitOrg = async (e) => {
        e.preventDefault();
        try {
            const result = await ipfs.add(orgBuffer);
            console.log("IPFS Hash",result);
            await contract.methods.addOrganization(org.name, org.ethAdd, result.path).send({from:accounts[0]});
            window.alert("Organization Registered Successfully"); 
        } catch (error) {
            window.alert("Organization Could not be added. Make sure you are an admin and check input fields");
            console.error(error);
        }
        setOrg({ name: "", ethAdd: "" });
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
                            <form onSubmit={handleSubmitHospital}>
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="name" className="form-control" id="hospital-name" placeholder="Hospital's Name" value={hospital.name} onChange={e => setHospital({ ...hospital, name: e.target.value })} required />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="phy-address" className="form-control" id="phy-address" placeholder="Address of hospital" value={hospital.address} required onChange={e => setHospital({ ...hospital, address: e.target.value })} />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="name" className="form-control" id="ethereum-address" placeholder="Ethereum Address" value={hospital.ethAdd} required onChange={e => setHospital({ ...hospital, ethAdd: e.target.value })} />
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="file" name="name" className="form-control" id="license" required onChange={handleChangeHospital} />
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
                            <form onSubmit={handleSubmitOrg}>
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="name" className="form-control" id="org-name" placeholder="Organization's Name" value={org.name} onChange={e=>setOrg({...org,name:e.target.value})} required/>
                                    </div>
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="name" className="form-control" id="ethereum-address" placeholder="Ethereum Address" value={org.ethAdd} onChange={e=>setOrg({...org,ethAdd:e.target.value})} required/>
                                    </div>
                                    <br />
                                    <div className="col-md-4 form-group py-1 mx-1">
                                        <input type="file" name="name" className="form-control" id="license" required onChange={handleChangeOrg}/>
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
