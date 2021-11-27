import React, { useState, useEffect } from 'react'
import "./Owner.css";
import { getWeb3 } from "../../../utils.js";
import DMed from "../../../contracts/DMed.json";
import Loading from '../../../Components/Loading/Loading';
import { useHistory } from 'react-router-dom';

const Owner = () => {

    const [web3, setWeb3] = useState(undefined);
    const [accounts, setAccounts] = useState(undefined);
    const [contract, setContract] = useState(undefined);
    const history = useHistory();
    const [addAdmin,setAddAdmin] = useState("");
    const [removeAdmin,setRemoveAdmin] = useState("");
    const [transferOwnership,setTransferOwnership] = useState("");

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
                if(deployedNetwork === undefined)
                    throw new Error('Make sure you are on the corrent network. Set the network to Ropsten Test Network');
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

    const AddAdmin = async (e) => {
        e.preventDefault();
        try {
            await contract.methods.addAdmin(addAdmin).send({from:accounts[0]});
            window.alert("Admin added successfully");
        } catch (error) {
            window.alert("Admin could not be added. Make sure you are the Owner and check the entered Address");
            console.error(error);
        }
        setAddAdmin("");
    }

    const RemoveAdmin = async (e) => {
        e.preventDefault();
        try{
            await contract.methods.removeAdmin(removeAdmin).send({from:accounts[0]});
            window.alert("Admin removed successfully");
        }catch(error)
        {
            window.alert("Admin could not be removed. Make sure you are the Owner and check the entered Address");
            console.error(error);
        }
        setRemoveAdmin("");
    }

    const TransferOwnership = async (e) => {
        e.preventDefault();

        try {
            await contract.methods.changeOwner(transferOwnership).send({from:accounts[0]});
            window.alert("Owner changed successfully");
        } catch (error) {
            window.alert("Ownership could not be transferred. Make sure you are the Owner and check the entered Address");
            console.error(error);
        }
    }

    if (!isReady()) {
        return <Loading />;
    }

    return (
        <>
            <section className="owner-dash-wrapper">
                <div className="container">
                    <div className="section-title">
                        <h2>Owner's Dashboard</h2>
                        <p>
                            Various operations the owner can do.
                        </p>
                    </div>

                    <div className="add-admin">
                        <h4>
                            Add new Admin
                        </h4>
                        <div>
                            <form onSubmit={AddAdmin}>
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="address" className="form-control" id="admin-address" placeholder="Admin's Address" value={addAdmin} onChange={e=>setAddAdmin(e.target.value)} required/>
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
                            Remove an Admin
                        </h4>
                        <div>
                            <form onSubmit={RemoveAdmin}>
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="address" className="form-control" id="admin-rmv-address" placeholder="Admin's Address" value={removeAdmin} onChange={e=>setRemoveAdmin(e.target.value)} required/>
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
                            Transfer Ownership
                        </h4>
                        <div>
                            <form onSubmit={TransferOwnership}>
                                <div className="row">
                                    <div className="col-md-4 form-group py-1">
                                        <input type="text" name="address" className="form-control" id="owner-address" placeholder="New Owner's Address" value={transferOwnership} onChange={e=>setTransferOwnership(e.target.value)}/>
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

export default Owner
