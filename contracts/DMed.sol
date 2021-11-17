// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import {Ownable} from "./Ownable.sol";

contract DMed is Ownable{

  struct Hospital { 
    uint id;
    bytes32 name;
    bytes32 physicalAddress;
    address walletAddress;
    bytes32 License;
  }

  struct Record {
    uint id;
    uint hospitalId;
    uint patientId;
    bytes32 condition;
    bytes32 description;
    bytes32 allergies;
    bytes32 Document;
  }

  struct Patient {
    uint Id;
    bytes32 name;
    bytes32 gender;
    bytes32 bloodGroup;
    bytes32 DOB;
    uint phoneNumber;
    uint[] records;
    bytes32 physicalAddress;
    bytes32 profilePicture;
    address walletAddress;
  }

  struct Authorities {
    uint Id;
    bytes32 name;
    address walletAddress;
    bytes32 License;
  }

  uint public hospitalId = 1;
  uint public recordId = 1;
  uint public patientId;
  uint public authoritiesId = 1;

  // to map hospitalId to Hospital Struct
  mapping(uint => Hospital) public hospitals;
  
  // to map medical record id to Record struct
  mapping (uint => Record) public records;

  // to map paitentId to Patient Struct
  mapping (uint => Patient) public patients;

  // to map government authorities Authorities Struct
  mapping (uint => Authorities) public authorities;

  // nested mapping of (patientId) => ((address of authority) => (isAuthorised ?))
  mapping (uint => mapping(address => bool)) public authorised;

  constructor() public {

  }
}


