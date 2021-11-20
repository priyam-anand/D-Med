// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Ownable {
    event OwnerChanged(address indexed _from, address indexed _to);
    event AdminAdded(address indexed Admin_Address);
    event AdminRemoved(address indexed Admin_Address);

    address internal owner;
    mapping(address => bool) internal admin;

    constructor() public {
        owner = msg.sender;
        admin[msg.sender] = true;
    }

    function changeOwner(address _newOwner) public onlyOwner returns (bool) {
        require(_newOwner != owner, "You are the owner already");
        admin[owner] = false;
        owner = _newOwner;
        admin[owner] = true;
        emit OwnerChanged(msg.sender, owner);
        return true;
    }

    function addAdmin(address _admin) public onlyOwner returns (bool) {
        require(admin[_admin] == false, "You are already an admin");
        admin[_admin] = true;
        emit AdminAdded(_admin);
        return true;
    }

    function removeAdmin(address _admin) public onlyOwner returns (bool) {
        require(admin[_admin] == true, "You are not admin already");
        require(_admin != owner, "Owner cannot be removed as an admin");
        admin[_admin] = false;
        emit AdminRemoved(_admin);
        return true;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    modifier onlyAdmin() {
        require(admin[msg.sender] == true, "Only Admin");
        _;
    }
}
