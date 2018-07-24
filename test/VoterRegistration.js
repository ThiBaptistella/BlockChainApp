const VoterResgistration = artifacts.require('VoterResgistration.sol');

contract ("VoterResgistration", async (accounts) => {

  it("can check whether or not a voter is registered", async () => {

    voterResgistration = await VoterResgistration.deployed();

    owner = await voterResgistration.owner.call();
    console.log(owner);

    let unRegisteredVoter = accounts[0]; // account was created by truffle (default 10).
    var isRegistered =  await voterResgistration.isRegistered.call(unRegisteredVoter); // check if is registered
    assert.equal(isRegistered, false, "voter should not be registered."); // if fail display it

    let registeredVoter = accounts[1];
    await voterResgistration.register(registeredVoter);
    var isRegistered = await voterResgistration.isRegistered.call(registeredVoter);
    assert.equal(isRegistered, true, "voter should be registered.");
  });

  it("only let the owner register their voters", async () => {

    voterResgistration = await VoterResgistration.deployed();
    let voter = accounts[7];
    try {
      await voterResgistration.register(voter, {from : accounts[4]});
    } catch (e) {
        var isRegistered = await voterResgistration.isRegistered.call(voter);
        assert.equal(isRegistered, false, "voter should not be registered.");
    }
        await voterResgistration.register(voter, {from : accounts[0]});
        var isRegistered = await voterResgistration.isRegistered.call(voter);
        assert.equal(isRegistered, true, "voter should be registered.");
  });
})


// runs a test by reading question and deply it.
