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
      dmed.changeOwner(owner, { from: owner })
      , "You are the owner already"
    )
  });

  it("should not change owner if not called by owner", async () => {
    await expectRevert(
      dmed.changeOwner(admin[1], { from: admin[0] })
      , "Only owner"
    )
  });

  it("should change owner", async () => {
    await dmed.changeOwner(admin[0], { from: owner });
    const Owner = await dmed.getOwner();
    assert(Owner === admin[0]);
  });

  //  Admin related tests

  it("should not add admin if not called by owner", async () => {
    await expectRevert(
      dmed.addAdmin(admin[0], { from: admin[1] })
      , "Only owner"
    )
  });

  it("should not add admin if already an admin", async () => {
    await expectRevert(
      dmed.addAdmin(owner, { from: owner })
      , "You are already an admin"
    )
  });

  it("should add admin", async () => {
    await dmed.addAdmin(accounts[3], { from: owner });
    const isAdmin = await dmed.isAdmin(accounts[3]);
    assert(isAdmin === true);
  });

  it("should not remove admin if already not an admin", async () => {
    await expectRevert(
      dmed.removeAdmin(accounts[3], { from: owner })
      , "You are not admin already"
    )
  });

  it("should not remove admin if not called by the owner", async () => {
    await expectRevert(
      dmed.removeAdmin(admin[0], { from: admin[1] })
      , "Only owner"
    )
  });

  it("should not remove admin if trying to remove owner", async () => {
    await expectRevert(
      dmed.removeAdmin(owner, { from: owner })
      , "Owner cannot be removed as an admin"
    )
  });

  it("should remove admin", async () => {
    await dmed.removeAdmin(admin[0],{from:owner});
    const getAdmin = await dmed.isAdmin(admin[0]);
    assert(getAdmin === false);
  })
});

/*------------------Dmed contract test-----------------*/
