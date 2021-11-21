// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

import {Ownable} from "./Ownable.sol";

contract DMed is Ownable {
    struct Hospital {
        uint256 id;
        string name;
        string physicalAddress;
        address walletAddress;
        string License;
    }

    struct Record {
        uint256 id;
        uint256 hospitalId;
        uint256 patientId;
        string condition;
        string description;
        string allergies;
        string Document;
    }

    struct Patient {
        uint256 id;
        string name;
        string gender;
        string bloodGroup;
        string DOB;
        uint256 phoneNumber;
        uint256[] records;
        string physicalAddress;
        string profilePicture;
        address walletAddress;
    }

    struct Organization {
        uint256 id;
        string name;
        address walletAddress;
        string License;
    }

    uint256 public hospitalId = 1;
    uint256 public recordId = 1;
    uint256 public organizationId = 1;

    // to map hospitalId to Hospital Struct
    mapping(uint256 => Hospital) private hospitals;

    // mapping to check if an address is already a registered hospital or not
    mapping(address => uint256) private hospitalToId;

    // to map medical record id to Record struct
    mapping(uint256 => Record) private records;

    // to map paitentId to Patient Struct
    mapping(uint256 => Patient) private patients;

    // mapping from patient address to patient id
    mapping(address => uint256) private patientToId;

    // to map government authorities Authorities Struct
    mapping(uint256 => Organization) private organizations;

    // mapping from organization address to id
    mapping(address => uint256) private organizationToId;

    // nested mapping of (patientId) => ((address of authority)) => (isAuthorised ?))
    mapping(uint256 => mapping(address => bool)) private authorised;

    /*
        - function to get the address of the owner
        - no restriction in the access
        - returns the address of the current owner
    */
    function getOwner() public view returns (address) {
        return owner;
    }

    /*
        - function to check if the given address is an admin or not
        - no restriction in the access
        - returns true or false.
    */
    function isAdmin(address _admin) public view returns (bool) {
        return admin[_admin];
    }

    /* 
        - function to add new hospitals. 
        - Callable by only admins. 
        - receive name of hospital, address of hosptial, wallet of hospital, and IPFS Hash of document
        - emits an event for adding new hospital
    */
    function addHospital(
        string memory name,
        string memory physicalAddress,
        address walletAddress,
        string memory license
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
    }

    /*
        - function to get hopital with the given id
        - check if any hosptial exists with the given Id
        - If the hosptial exists then we return it 
    */
    function getHospitalById(uint256 _id)
        public
        view
        returns (Hospital memory)
    {
        require(hospitals[_id].id != 0, "No such hospital exists");
        Hospital memory hosp = hospitals[_id];
        return hosp;
    }

    /*
        - function to get hopital having the specified address
        - firstly checks if the given address exists in the mapping from hospitalAddress to Id
        - now we check if any hosptial exists with the returned Id
        - If the hosptial exists then we return it 
    */
    function getHospitalByAddress(address _address)
        public
        view
        returns (Hospital memory)
    {
        require(hospitalToId[_address] != 0, "No such hospital exists");
        uint256 _id = hospitalToId[_address];
        require(hospitals[_id].id != 0, "No such hospital exists");
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
        string memory _condition,
        string memory _description,
        string memory _allergies,
        string memory _document
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

    // /*
    //     - this is a developer function
    //     - not meant to be present on the production contract
    //     - returns the record mapped to its id
    // */
    // function getRecordById(uint _id)public view returns(Record memory) {
    //     require(records[_id].id != 0,"Record does not exist");
    //     return records[_id];
    // }

    /*
        - function to add new patients
        - we check if the given patient id aleady exists
        - if does not exist then we make a new Patient varible
        - add the constructed varible to patients mapping
        - add the patientId to the mapping of patient address to patient Id
    */
    function addNewPatient(
        uint256 _id,
        string memory _name,
        string memory _gender,
        string memory _bloodGroup,
        string memory _dob,
        uint256 _phoneNumber,
        string memory _physicalAddress,
        string memory _profilePicture,
        address _walletAddress
    ) public onlyHospital {
        require(patients[_id].id == 0, "Patient already exists");
        uint256[] memory _records;
        patientToId[_walletAddress] = _id;
        patients[_id] = Patient(
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
    }

    /* 
        - function to add new organizations. 
        - Callable by only admins. 
        - receive name of organiation, _walletAddress of organization, and IPFS Hash of document
    */
    function addOrganization(
        string memory _name,
        address _walletAddress,
        string memory _license
    ) public onlyAdmin {
        require(
            organizationToId[_walletAddress] == 0,
            "Organization already exists"
        );
        organizations[organizationId] = Organization(
            organizationId,
            _name,
            _walletAddress,
            _license
        );
        organizationToId[_walletAddress] = organizationId;

        organizationId++;
    }

    /*
        - function to get organization with the given id
        - check if any organization exists with the given Id
        - If the organization exists then we return it 
    */
    function getOrganizationById(uint256 _id)
        public
        view
        returns (Organization memory)
    {
        require(organizations[_id].id != 0, "No such organization exists");
        return organizations[_id];
    }

    /*
        - function to get organization having the specified address
        - firstly checks if the given address exists in the mapping from organizationAddress to Id
        - now we check if any organization exists with the returned Id
        - If the organization exists then we return it 
    */
    function getOrganizationByAddress(address _addr)
        public
        view
        returns (Organization memory)
    {
        uint256 _id = organizationToId[_addr];
        require(
            _id != 0 && organizations[_id].id != 0,
            "No such organization exists"
        );
        return organizations[_id];
    }

    /*
        - function to give access authority to addresses
        - message sender must be the patient
        - if all condition pass add id of patient and address to authorised mapping
    */
    function addAuthByAddress(address addr) public onlyPatient {
        uint256 _id = patientToId[msg.sender];
        authorised[_id][addr] = true;
    }

    /*
        - function to give access authority to an organization
        - message sender must be the patient
        - firstly check if organization with the given id exist or not
        - if all conditions pass add id of patient and address of the organization to the mapping
    */
    function addAuthById(uint256 _id) public onlyPatient {
        Organization memory org = organizations[_id];
        require(org.id != 0, "No such organization found");
        uint256 patientId = patientToId[msg.sender];
        authorised[patientId][org.walletAddress] = true;
    }

    /*
        - function to remove access rights from some address
        - message sender must be the patient
        - check if the given address has the access authorities
        - if all conditions check, remove the mapping of id and address
    */
    function revokeAuthByAddress(address addr) public onlyPatient {
        uint256 _id = patientToId[msg.sender];
        require(authorised[_id][addr] == true, "Already not authorised");

        authorised[_id][addr] = false;
    }

    /*
        - function to remove access authority from an organization
        - message sender must be the patient
        - check if the given organization exists or not
        - check if the given organization has the access authorities
        - if all conditions check, remove the mapping of id and address
    */
    function revokeAuthById(uint256 _id) public onlyPatient {
        Organization memory org = organizations[_id];
        require(org.id != 0, "No such organization found");
        uint256 patientId = patientToId[msg.sender];

        require(
            authorised[patientId][org.walletAddress] == true,
            "Already not authorised"
        );
        authorised[patientId][org.walletAddress] = false;
    }

    /*
        - function to get the details of the patient 
        - this function is callable by either a hospital or an authorised address
        - we check if the given id is a valid patient or not
        - if all checks pass, we return all the data of the patient except list of its records
    */
    function getPatientDetails(uint256 _id)
        public
        view
        onlyAuthorised(_id)
        returns (
            uint256,
            string memory,
            string memory,
            string memory,
            string memory,
            uint256,
            string memory,
            string memory,
            address
        )
    {
        require(_id != 0 && patients[_id].id != 0, "No such patient found");
        Patient memory pat = patients[_id];
        return (
            pat.id,
            pat.name,
            pat.gender,
            pat.bloodGroup,
            pat.DOB,
            pat.phoneNumber,
            pat.physicalAddress,
            pat.profilePicture,
            pat.walletAddress
        );
    }

    /*
        - function to get all the records of the given patient
        - this function is callable by only either a registered hospital or an authorised address or the patient itself
        - it checks if the patient with the given id exists or not
        - it checks if the number of records of the given patient is greater than 0 or not
        - we create an array for each of the attributes
        - we return all the attributes except patientId and records own id
        - loop through all the records in the recordId array of the patient and fill the array as specified
        - return all the filled arrays
    */
    function getPatientRecords(uint256 _id)
        public
        view
        onlyAuthorised(_id)
        returns (
            uint256[] memory,
            string[] memory,
            string[] memory,
            string[] memory,
            string[] memory
        )
    {
        Patient memory patient = patients[_id];
        require(_id != 0 && patient.id != 0, "No such patient found");
        require(patient.records.length > 0, "No record found");

        uint256 len = patient.records.length;
        uint256[] memory rec = patient.records;

        uint256[] memory hosId = new uint256[](len);
        string[] memory cond = new string[](len);
        string[] memory desc = new string[](len);
        string[] memory aller = new string[](len);
        string[] memory docs = new string[](len);

        for (uint256 i = 0; i < rec.length; i++) {
            Record memory curr = records[rec[i]];
            hosId[i] = curr.hospitalId;
            cond[i] = curr.condition;
            desc[i] = curr.description;
            aller[i] = curr.allergies;
            docs[i] = curr.Document;
        }

        return (hosId, cond, desc, aller, docs);
    }

    modifier onlyAuthorised(uint256 _id) {
        uint256 hosId = hospitalToId[msg.sender];
        require(
            (authorised[_id][msg.sender] == true) ||
                (hosId != 0 && hospitals[hosId].id != 0) ||
                (_id != 0 && patients[_id].walletAddress == msg.sender),
            "Only authorised addressed"
        );
        _;
    }

    modifier onlyPatient() {
        uint256 _id = patientToId[msg.sender];
        require(_id != 0 && patients[_id].id != 0, "Only patient is allowed");
        _;
    }

    modifier onlyHospital() {
        uint256 _id = hospitalToId[msg.sender];
        require(
            _id != 0 && hospitals[_id].id != 0,
            "Only hospitals are allowed"
        );
        _;
    }
}
