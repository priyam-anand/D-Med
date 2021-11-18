// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import {Ownable} from "./Ownable.sol";

contract DMed is Ownable {
    event AddedHospital(uint256 _hospitalId, address indexed _hospitalAddress);

    struct Hospital {
        uint256 id;
        bytes32 name;
        bytes32 physicalAddress;
        address walletAddress;
        bytes32 License;
    }

    struct Record {
        uint256 id;
        uint256 hospitalId;
        uint256 patientId;
        bytes32 condition;
        bytes32 description;
        bytes32 allergies;
        bytes32 Document;
    }

    struct Patient {
        uint256 id;
        bytes32 name;
        bytes32 gender;
        bytes32 bloodGroup;
        bytes32 DOB;
        uint256 phoneNumber;
        uint256[] records;
        bytes32 physicalAddress;
        bytes32 profilePicture;
        address walletAddress;
    }

    struct Authorities {
        uint256 id;
        bytes32 name;
        address walletAddress;
        bytes32 License;
    }

    /*              State Variables             */

    uint256 public hospitalId = 1;
    uint256 public recordId = 1;
    uint256 public authoritiesId = 1;

    // to map hospitalId to Hospital Struct
    mapping(uint256 => Hospital) public hospitals;

    // mapping to check if an address is already a registered hospital or not
    mapping(address => uint256) public hospitalToId;

    // to map medical record id to Record struct
    mapping(uint256 => Record) public records;

    // to map paitentId to Patient Struct
    mapping(uint256 => Patient) public patients;

    // mapping from patient address to patient id
    mapping(address => uint256) public patientToId;

    // to map government authorities Authorities Struct
    mapping(uint256 => Authorities) public authorities;

    // nested mapping of (patientId) => ((address of authority)) => (isAuthorised ?))
    mapping(uint256 => mapping(address => bool)) public authorised;

    /*              Functions             */
    /* 
    - function to add new hospitals. 
    - Callable by only admins. 
    - receive name of hospital, address of hosptial, wallet of hospital, and IPFS Hash of document
    - emits an event for adding new hospital
  */
    function addHospital(
        bytes32 name,
        bytes32 physicalAddress,
        address walletAddress,
        bytes32 license
    ) public onlyAdmin {
        require(
            hospitalToId[walletAddress] == 0,
            "Already registered as an hospital"
        );
        hospitals[hospitalId] = Hospital(
            hospitalId,
            name,
            physicalAddress,
            walletAddress,
            license
        );
        hospitalToId[walletAddress] = hospitalId;
        hospitalId++;

        emit AddedHospital(hospitalId - 1, walletAddress);
    }

    /*
    - function to get hopital having the specified address
    - firstly checks if the given address exists in the mapping from hospitalAddress to Id
    - now we check if any hosptial exists with the returned Id
    - If the hosptial exists then we return it 
    */
    function getHosptialByAddress(address _address)
        public
        view
        returns (Hospital memory)
    {
        require(hospitalToId[_address] != 0, "No such hospital exist");
        uint256 _id = hospitalToId[_address];
        require(hospitals[_id].id != 0, "No such hospital exist");
        Hospital memory hosp = hospitals[_id];
        return hosp;
    }

    /*
    - function to add new records of an existing patient.
    - if the patient already exists then we make a new Record variable
    - map the created record to its recordId
    - add the recordId to the list of records of the patient
    - increment the recordId
    */
    function addNewRecord(
        uint256 _hospitalId,
        uint256 _patientId,
        bytes32 _condition,
        bytes32 _description,
        bytes32 _allergies,
        bytes32 _document
    ) public onlyHospital {
        require(patients[_patientId].id != 0, "The patient does not exist");
        Record memory rec = Record(
            recordId,
            _hospitalId,
            _patientId,
            _condition,
            _description,
            _allergies,
            _document
        );
        records[recordId] = rec;
        patients[_patientId].records.push(recordId);
        recordId++;
    }

    /*
    - function to add new patients
    - we check if the given patient id aleady exists
    - if does not exist then we make a new Patient varible
    - add the constructed varible to patients mapping
    - add the patientId to the mapping of patient address to patient Id
    */
    function addNewPatient(
        uint256 _id,
        bytes32 _name,
        bytes32 _gender,
        bytes32 _bloodGroup,
        bytes32 _dob,
        uint256 _phoneNumber,
        bytes32 _physicalAddress,
        bytes32 _profilePicture,
        address _walletAddress
    ) public onlyHospital {
        require(patients[_id].id == 0, "Patient already exists");

        uint256[] memory _records;
        Patient memory pat = Patient(
            _id,
            _name,
            _gender,
            _bloodGroup,
            _dob,
            _phoneNumber,
            _records,
            _physicalAddress,
            _profilePicture,
            _walletAddress
        );

        patientToId[_walletAddress]=_id;

        patients[_id] = pat;
    }

    /*              Modifiers             */

    modifier onlyHospital() {
        uint256 _id = hospitalToId[msg.sender];
        require(
            _id != 0 && hospitals[_id].id != 0,
            "Only hospitals are allowed"
        );
        _;
    }
}
