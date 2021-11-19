const DMed = artifacts.require("DMed");

contract("DMed", function (accounts) {

  const owner = accounts[0];
  const admin = [accounts[1],accounts[2],accounts[3]];
  let dmed;

  befreEach(async()=>{
    dmed = await DMed.new();
  })

  it("should assert true", async function () {
    await DMed.deployed();
    return assert.isTrue(true);
  });
});
