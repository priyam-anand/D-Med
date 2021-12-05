<!-- PROJECT NAME -->
<div align="center">
  <h1 align="center">D-Med</h1>
  <p align="center">
    <a href="https://priyam-anand.github.io/D-Med"/>View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
  <h2 >Table of Contents</h2>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#the-problem">The Problem</a>
    </li>
    <li>
        <a href="#the-solution">The Solution</a>
    </li>
    <li>
        <a href="#how-it-work">How Does it Work?</a>
    </li>
    <li>
        <a href="#how-to-use">How to Use?</a>
    </li>
    <li>
        <a href="#getting-started">Getting Started</a>
    </li>
    <li>
        <a href="#made-by">Made By</a>
    </li>
  </ol>

<!-- ABOUT THE PROJECT -->
<a id="about-the-project"></a>

## About The Project

D-Med is a decentralized solution for Electronic Medical Records sharing systems (EMR). It uses Ethereum network and IPFS technology at its core, giving you complete control of your data. Only authorized people and registerd Medical Institues can acces your records.

Why Choose D-Med:

- The entire system of D-Med is based on blockchain technology. Hence it is practically un hackable
- There is no actual person behind the organization. It is a smart contract, making it transparent to the public
- All the media is stored on InterPlanetary File System (IPFS) network. Making it completely safe and private.

<a id="built-with"></a>
### Built With
- [Ethereum](https://ethereum.org/en/)
- [Solidity](https://soliditylang.org/)
- [Truffle](https://trufflesuite.com/)
- [React.js](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com)

<!-- THE PROBLEM -->
<a id="the-problem"></a>

## The Problem
An electronic health record is defined as an electronic version of a medical history of the patient as kept by the health care provider. But it consists of some major security and privacy flaws.

- **Potential Cybersecurity Issues** :
  The data of the patients lies on a centralized database, which are prone to Denial of Service (DoS) attacks and single point of failure
- **Privacy of Patients** :
  If the database ever gets hacked. The data of the Patients can get leaked into the world which is unethical. Centralized systems are vulnerable to privacy attacks as well.
- **Inaccurate Data**
  If an EMR is not updated immediately, as soon as new information is known, such as after test results come in, anyone viewing that EMR could receive incorrect. This could lead to errors in diagnosis and treatment.
- **Time and Money**
It also takes time to demo EHR products and negotiate with EHR system vendors to choose and implement the right system for your practice.


<!-- THE SOLUTION -->
<a id="the-solution"></a>

## The Solution
D-Med provides a decentralized easy to use Electronic Medical Record system(EMR). It is a free to use web application providing a feature rich as well as interactive UI making it easy to use.

- **Minimal Security Risks**
As previously mentioned. We use Ethereum Network for our computation making it very safe and secure. There cannot be a single point of failure.
- **Complete Privacy**
The application used IPFS technology for storage of patient's data. Every patient can control who can access their data. Only registerd Organizations and verified Medical Institute can access your data.
- **Verifies Admins**
For a Medical Institute to participate in this shared system, it need to be verified by one of the admins. Same goes for the Organizations. They require proper medical and identity license to be succesfully registerd.
- **Non Profit**
D-Med is a free to use, non profit system. One does not need to buy this software. It is available for everyone. There are some public open feautes which can be accessed by anyone, be it admin, owner or someone visiting the website for he first time. All that is required is a crypto wallet.

<!-- HOW DOES IT WORK -->
<a id="how-it-work"></a>

## How Does It Work
The application offers a variety of services. Some of them open for the public to see and test out themselves. The main flow of the application goes as follows.
- There is one owner of the smart contract of the application who's ownership is transferable.
- The owner can add or remove new Admins. The owner itself is an admin.
- Only an admin can register new Hospitals in the network, as well as other Organization that want to view the user data
-  For registration in the network the hospital as well as organization must have a license.
-  The license will be uploaded to IPFS as a proof.
-  Every time a new medical record needs to be added, the hospital fills in all the details for the record and adds it under the id of the patient. If the patient does not exit, the hospital also adds new Patient to the network.
-  Each paitent must have a unique ID number so we decided to use Aadhar Number of the person as ID.
-  Only registered Hospital, Organizations and the patient himself is able to see it's records.
-  If any registered hospital wants to fetch the details of a patient or his medical record, it can do so. But if any organization wants to do the same, it must take an authority by the patient. 
-  Each patient can grant as well as revoke authorization to some address or Organization address.  

<!-- HOW TO USE -->
<a id="how-to-use"></a>

## How To Use
1. Make sure you have your Meta Mask crypto wallet installed
2. If you do not have Mata Mask head over to [Meta Mask](https://metamask.io/) and follow the instruction.
3. After you have setup your crypto wallet, now you need to have some test Ether. visit [Ether Faucet](https://faucet.ropsten.be/) and enter your account address to recieve test ether.
4. After you have recieved Test Ether in your account, you are all setup to use D-Med.
5. On your network tab on the top right corner of meta mask, select Ropsten Test Net.
6. You are all setup to use D-Med. Head over to the public dashboard in the application to connect to the blockchain using your Meta Mask wallet and try out the various features.
(HINT : Try Hospital ID 1 to 4 to get their details)

<!-- GETTING STARTED -->
<a id="getting-started"></a>

## Getting Started

_To download the source code and on your machine and get it up and running, follow the given steps_

1. Clone the repo
   ```sh
   git clone https://github.com/priyam-anand/D-Med.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the Application 
   ```sh
    npm start
   ```
4. Build for production
   ```sh
    npm run build
   ```

<!-- MADE BY -->
<a id="made-by"></a>

## Made By
<table>
  <tbody><tr>
    <td align="center"><a href="https://github.com/priyam-anand"><img src="https://avatars.githubusercontent.com/priyam-anand" width="100px;"><br><sub><b>Priyam Anand</b></sub></a><br/></a></td>
    </td>
  </tbody></tr>
</table>