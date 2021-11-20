const DMed = artifacts.require("DMed");
const { expectRevert } = require('@openzeppelin/test-helpers');

contract("DMed", function (accounts) {

  const owner = accounts[0];
  const admin = [accounts[1], accounts[2]];
  let dmed;

  beforeEach(async () => {
    dmed = await DMed.new();
    await dmed.addAdmin(admin[0]);
    await dmed.addAdmin(admin[1]);
  })

  /*----------------Ownable contract tests----------------*/

  // Owner related tests

  it("should confirm owner", async () => {
    const Owner = await dmed.getOwner();
    assert(owner === Owner);
  });

  it("should not change owner if already owner", async () => {
    await expectRevert(
      dmed.changeOwner(
        owner,
        { from: owner }
      )
      , "You are the owner already"
    )
  });

  it("should not change owner if not called by owner", async () => {
    await expectRevert(
      dmed.changeOwner(
        admin[1],
        { from: admin[0] }
      )
      , "Only owner"
    )
  });

  it("should change owner", async () => {
    await dmed.changeOwner(
      admin[0],
      { from: owner }
    );
    const Owner = await dmed.getOwner();
    assert(Owner === admin[0]);
  });

  //  Admin related tests

  it("should not add admin if not called by owner", async () => {
    await expectRevert(
      dmed.addAdmin(
        admin[0],
        { from: admin[1] }
      )
      , "Only owner"
    )
  });

  it("should not add admin if already an admin", async () => {
    await expectRevert(
      dmed.addAdmin(
        owner,
        { from: owner }
      )
      , "You are already an admin"
    )
  });

  it("should add admin", async () => {
    await dmed.addAdmin(
      accounts[3],
      { from: owner }
    );
    const isAdmin = await dmed.isAdmin(accounts[3]);
    assert(isAdmin === true);
  });

  it("should not remove admin if already not an admin", async () => {
    await expectRevert(
      dmed.removeAdmin(
        accounts[3],
        { from: owner }
      )
      , "You are not admin already"
    )
  });

  it("should not remove admin if not called by the owner", async () => {
    await expectRevert(
      dmed.removeAdmin(
        admin[0],
        { from: admin[1] }
      )
      , "Only owner"
    )
  });

  it("should not remove admin if trying to remove owner", async () => {
    await expectRevert(
      dmed.removeAdmin(
        owner,
        { from: owner }
      )
      , "Owner cannot be removed as an admin"
    )
  });

  it("should remove admin", async () => {
    await dmed.removeAdmin(
      admin[0],
      { from: owner }
    );
    const getAdmin = await dmed.isAdmin(admin[0]);
    assert(getAdmin === false);
  })

  /*------------------Dmed contract test-----------------*/

  //  Hospital related tests
  it("should not add hospital if not called by admin", async () => {
    await expectRevert(
      dmed.addHospital(
        "Hospital1",
        "physical address of hospital",
        accounts[3],
        "IPFS hash of license",
        { from: accounts[3] }
      )
      , "Only Admin"
    )
  });

  it("should add new hospital", async () => {
    await dmed.addHospital(
      "Hospital1",
      "physical address of hospital",
      accounts[3],
      "IPFS hash of license",
      { from: admin[0] }
    );
    const hospital = await dmed.getHospitalById(1);
    assert(hospital.name === "Hospital1");
  });

  it("should not add hospital if already registered", async () => {
    await dmed.addHospital(
      "Hospital1",
      "physical address of hospital",
      accounts[3],
      "IPFS hash of license",
      { from: admin[0] }
    );
    await expectRevert(
      dmed.addHospital(
        "Hospital1",
        "physical address of hospital",
        accounts[3],
        "IPFS hash of license",
        { from: admin[0] }
      )
      , "Already registered as an hospital"
    )
  });

  it("should not get hospital by id if does not exist", async () => {
    await expectRevert(
      dmed.getHospitalById(1)
      , "No such hospital exists"
    )
  });

  it("should not get hospital by address if does not exits", async () => {
    await expectRevert(
      dmed.getHospitalByAddress(accounts[3])
      , "No such hospital exists"
    )
  });

  it("should get hospital by address", async () => {
    await dmed.addHospital(
      "Hospital1",
      "physical address of hospital",
      accounts[3],
      "IPFS hash of license",
      { from: admin[0] }
    );
    const hospital = await dmed.getHospitalByAddress(accounts[3]);
    assert(hospital.name === "Hospital1");
  });

  // Organization related tests
  it("should not add new organization if not called by admin", async () => {
    await expectRevert(
      dmed.addOrganization(
        "Org1",
        accounts[3],
        "IPFS Hash of license",
        { from: accounts[4] }
      )
      , "Only Admin"
    )
  });

  it("should add organization", async () => {
    await dmed.addOrganization(
      "Org1",
      accounts[3],
      "IPFS Hash of license",
      { from: admin[0] }
    );
    const org = await dmed.getOrganizationById(1);
    assert(org.name === "Org1");
  });

  it("should not add organization if already exists", async () => {
    await dmed.addOrganization(
      "Org1",
      accounts[3],
      "IPFS Hash of license",
      { from: admin[0] }
    );
    await expectRevert(
      dmed.addOrganization(
        "Org1",
        accounts[3],
        "IPFS Hash of license",
        { from: admin[0] }
      )
      , "Organization already exists"
    )
  });

  it("should not get organization by Id if does not exist", async () => {
    await expectRevert(
      dmed.getOrganizationById(1)
      , "No such organization exists"
    )
  });

  it("should not get organization by Address if does not exist", async () => {
    await expectRevert(
      dmed.getOrganizationByAddress(accounts[4])
      , "No such organization exists"
    )
  });

  it("should get organizatio by address", async () => {
    await dmed.addOrganization(
      "Org1",
      accounts[3],
      "IPFS Hash of license",
      { from: admin[0] }
    );
    const org = await dmed.getOrganizationByAddress(accounts[3]);
    assert(org.name === "Org1");
  })

  // Patient related tests
  it("should not add patient if not called by hosptial", async () => {
    const patientId = 9685
    await expectRevert(
      dmed.addNewPatient(
        patientId
        , "John"
        , "Male"
        , "B+"
        , "12/1/1989"
        , 841706
        , "Physical Address"
        , "IPFS Hash of profile picture"
        , accounts[3])
      , "Only hospitals are allowed"
    )
  });

  it("should add new patient", async () => {
    const hospital = accounts[3];
    await dmed.addHospital(
      "Hospital1",
      "physical address of hospital",
      hospital,
      "IPFS hash of license",
      { from: admin[0] }
    );
    const patientId = 9685;
    await dmed.addNewPatient(
      patientId
      , "John"
      , "Male"
      , "B+"
      , "12/1/1989"
      , 841706
      , "Physical Address"
      , "IPFS Hash of profile picture"
      , accounts[3]
      , { from: hospital }
    );
    const patient = await dmed.getPatientDetails(patientId, { from: hospital });
    assert(patient[1] === "John");
  });

  it("should not add new patient if already exist", async () => {
    const hospital = accounts[3];
    await dmed.addHospital(
      "Hospital1",
      "physical address of hospital",
      hospital,
      "IPFS hash of license",
      { from: admin[0] }
    );
    const patientId = 9685;
    await dmed.addNewPatient(
      patientId
      , "John"
      , "Male"
      , "B+"
      , "12/1/1989"
      , 841706
      , "Physical Address"
      , "IPFS Hash of profile picture"
      , accounts[3]
      , { from: hospital }
    );
    await expectRevert(
      dmed.addNewPatient(
        patientId
        , "John"
        , "Male"
        , "B+"
        , "12/1/1989"
        , 841706
        , "Physical Address"
        , "IPFS Hash of profile picture"
        , accounts[3]
        , { from: hospital }
      )
      , "Patient already exists"
    )
  });

  // Authorization realated tests
  it("should not add auth by address if not called by paitent", async () => {
    await expectRevert(
      dmed.addAuthByAddress(accounts[5], { from: admin[1] })
      , "Only patient is allowed"
    )
  });

  it("should add auth by address", async () => {
    const hospital = accounts[3];
    await dmed.addHospital(
      "Hospital1",
      "physical address of hospital",
      hospital,
      "IPFS hash of license",
      { from: admin[0] }
    );
    const patientId = 9685;
    await dmed.addNewPatient(
      patientId
      , "John"
      , "Male"
      , "B+"
      , "12/1/1989"
      , 841706
      , "Physical Address"
      , "IPFS Hash of profile picture"
      , accounts[5]
      , { from: hospital }
    );
    const auth = accounts[4];
    await dmed.addAuthByAddress(auth, { from: accounts[5] });

    const patient = await dmed.getPatientDetails(patientId, { from: auth });
    assert(patient[1] === "John");
  })

  it("should not revoke auth by address if not called by patient", async () => {
    await expectRevert(
      dmed.revokeAuthByAddress(accounts[1], { from: admin[1] })
      , "Only patient is allowed"
    )
  });

  it("should revoke auth by address", async () => {
    const hospital = accounts[3];
    await dmed.addHospital(
      "Hospital1",
      "physical address of hospital",
      hospital,
      "IPFS hash of license",
      { from: admin[0] }
    );
    const patientId = 9685;
    await dmed.addNewPatient(
      patientId
      , "John"
      , "Male"
      , "B+"
      , "12/1/1989"
      , 841706
      , "Physical Address"
      , "IPFS Hash of profile picture"
      , accounts[5]
      , { from: hospital }
    );
    const auth = accounts[4];
    await dmed.addAuthByAddress(auth, { from: accounts[5] });
    await dmed.revokeAuthByAddress(auth, { from: accounts[5] });

    await expectRevert(
      dmed.getPatientDetails(patientId, { from: auth })
      , "Only authorised addressed"
    );
  });

  it("should not revoke auth by address if already not auth", async () => {
    const hospital = accounts[3];
    await dmed.addHospital(
      "Hospital1",
      "physical address of hospital",
      hospital,
      "IPFS hash of license",
      { from: admin[0] }
    );
    const patientId = 9685;
    await dmed.addNewPatient(
      patientId
      , "John"
      , "Male"
      , "B+"
      , "12/1/1989"
      , 841706
      , "Physical Address"
      , "IPFS Hash of profile picture"
      , accounts[5]
      , { from: hospital }
    );
    const auth = accounts[4];
    await dmed.addAuthByAddress(auth, { from: accounts[5] });
    await dmed.revokeAuthByAddress(auth, { from: accounts[5] });
    await expectRevert(
      dmed.revokeAuthByAddress(auth, { from: accounts[5] })
      , "Already not authorised"
    )
  });

  it("should not add auth by Id if not called by paitent", async () => {
    await dmed.addOrganization(
      "Org1",
      accounts[3],
      "IPFS Hash of license",
      { from: admin[0] }
    );
    await expectRevert(
      dmed.addAuthById(1, { from: admin[1] })
      , "Only patient is allowed"
    )
  });

  it("should not add auth by Id if org does not exist", async () => {
    const hospital = accounts[3];
    await dmed.addHospital(
      "Hospital1",
      "physical address of hospital",
      hospital,
      "IPFS hash of license",
      { from: admin[0] }
    );
    const patientId = 9685;
    await dmed.addNewPatient(
      patientId
      , "John"
      , "Male"
      , "B+"
      , "12/1/1989"
      , 841706
      , "Physical Address"
      , "IPFS Hash of profile picture"
      , accounts[5]
      , { from: hospital }
    );
    await expectRevert(
      dmed.addAuthById(1, { from: accounts[5] })
      , "No such organization found"
    )
  });

  it("should add auth by Id", async () => {
    const hospital = accounts[3];
    const org = accounts[4];
    const patient = accounts[5];
    await dmed.addHospital(
      "Hospital1",
      "physical address of hospital",
      hospital,
      "IPFS hash of license",
      { from: admin[0] }
    );

    await dmed.addOrganization(
      "Org1",
      org,
      "IPFS Hash of license",
      { from: admin[0] }
    );

    const patientId = 9685;
    await dmed.addNewPatient(
      patientId
      , "John"
      , "Male"
      , "B+"
      , "12/1/1989"
      , 841706
      , "Physical Address"
      , "IPFS Hash of profile picture"
      , patient
      , { from: hospital }
    );

    await dmed.addAuthById(1, { from: patient });
    const currPatient = await dmed.getPatientDetails(patientId, { from: org });
    assert(currPatient[1] === "John");
  });

  it("should not revoke auth by Id if not called by patient", async () => {
    await expectRevert(
      dmed.revokeAuthById(1, { from: admin[1] })
      , "Only patient is allowed"
    )
  });

  it("should not revoke auth by If if no such org exist", async () => {
    const hospital = accounts[3];
    await dmed.addHospital(
      "Hospital1",
      "physical address of hospital",
      hospital,
      "IPFS hash of license",
      { from: admin[0] }
    );
    const patientId = 9685;
    await dmed.addNewPatient(
      patientId
      , "John"
      , "Male"
      , "B+"
      , "12/1/1989"
      , 841706
      , "Physical Address"
      , "IPFS Hash of profile picture"
      , accounts[5]
      , { from: hospital }
    );
    await expectRevert(
      dmed.revokeAuthById(1, { from: accounts[5] })
      , "No such organization found"
    )
  });

  it("should revoke auth by address", async () => {
    const hospital = accounts[3];
    const org = accounts[4];
    const patient = accounts[5];
    await dmed.addHospital(
      "Hospital1",
      "physical address of hospital",
      hospital,
      "IPFS hash of license",
      { from: admin[0] }
    );

    await dmed.addOrganization(
      "Org1",
      org,
      "IPFS Hash of license",
      { from: admin[0] }
    );

    const patientId = 9685;
    await dmed.addNewPatient(
      patientId
      , "John"
      , "Male"
      , "B+"
      , "12/1/1989"
      , 841706
      , "Physical Address"
      , "IPFS Hash of profile picture"
      , patient
      , { from: hospital }
    );

    await dmed.addAuthById(1, { from: patient });
    await dmed.revokeAuthById(1, { from: patient });
    await expectRevert(
      dmed.getPatientDetails(patientId, { from: org })
      , "Only authorised addressed"
    )
  });

  it("should not revoke auth by id if already not auth", async () => {
    const hospital = accounts[3];
    const org = accounts[4];
    const patient = accounts[5];
    await dmed.addHospital(
      "Hospital1",
      "physical address of hospital",
      hospital,
      "IPFS hash of license",
      { from: admin[0] }
    );

    await dmed.addOrganization(
      "Org1",
      org,
      "IPFS Hash of license",
      { from: admin[0] }
    );

    const patientId = 9685;
    await dmed.addNewPatient(
      patientId
      , "John"
      , "Male"
      , "B+"
      , "12/1/1989"
      , 841706
      , "Physical Address"
      , "IPFS Hash of profile picture"
      , patient
      , { from: hospital }
    );

    await dmed.addAuthById(1, { from: patient });
    await dmed.revokeAuthById(1, { from: patient });
    await expectRevert(
      dmed.revokeAuthById(1, { from: patient })
      , "Already not authorised"
    )
  })

});

