import React from 'react'
import "./Bc-Eth-Dmed.css";

const BcEthDmed = () => {
    return (
        <>
            <div className="what-is-bc">
                <h1>
                    What is a Block Chain ?
                </h1>
                <div className="bc">
                    A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions. The innovation with a blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need for a trusted third party.
                </div>
                <h3 className="takeaways">
                    KEY TAKEAWAYS
                </h3>
                <div className="bc-1">
                    <ul>
                        <li>
                            Blockchain is a type of shared database that differs from a typical database in the way it stores information; blockchains store data in blocks that are then linked together via cryptography.
                        </li>
                        <li>
                            As new data comes in it is entered into a fresh block. Once the block is filled with data it is chained onto the previous block, which makes the data chained together in chronological order.
                        </li>
                        <li>
                            Different types of information can be stored on a blockchain but the most common use so far has been as a ledger for transactions.
                        </li>
                        <li>
                            In Bitcoin’s case, blockchain is used in a decentralized way so that no single person or group has control—rather, all users collectively retain control.
                        </li>
                        <li>
                            Decentralized blockchains are immutable, which means that the data entered is irreversible. For Bitcoin, this means that transactions are permanently recorded and viewable to anyone.
                        </li>
                        <li>
                            <a href="https://en.wikipedia.org/wiki/Blockchain" style={{"textDecoration":"underline"}} target="_blank" rel="noreferrer">
                                Know more about Block Chain
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="what-is-eth">
                <h1>
                    But What is Ethereum ?
                </h1>
                <div className="bc">
                    Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether (ETH or Ξ) is the native cryptocurrency of the platform. Amongst cryptocurrencies, Ether is second only to Bitcoin in market capitalization.

                    Ethereum was conceived in 2013 by programmer Vitalik Buterin.In 2014, development work commenced and was crowdfunded, and the network went live on 30 July 2015.The platform allows anyone to deploy permanent and immutable decentralized applications onto it, with which users can interact. Decentralized finance (DeFi) applications provide a broad array of financial services without the need for typical financial intermediaries like brokerages, exchanges, or banks, such as allowing cryptocurrency users to borrow against their holdings or lend them out for interest.Ethereum also allows for the creation and exchange of NFTs, which are non-interchangeable tokens connected to digital works of art or other real-world items and sold as unique digital property. Additionally, many other cryptocurrencies operate as ERC-20 tokens on top of the Ethereum blockchain and have utilized the platform for initial coin offerings.
                </div>
                <a href="https://ethereum.org/en/" style={{"textDecoration":"underline"}} target="_blank" rel="noreferrer">Learn More about Ethereum</a>
            </div>
        </>
    )
}

export default BcEthDmed
