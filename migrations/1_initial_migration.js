var Migrations = artifacts.require("./Migrations.sol");
var VoterResgistration = artifacts.require("./VoterResgistration.sol");
var VotableIssue = artifacts.require("./VotableIssue.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(VoterResgistration);
  deployer.deploy(VotableIssue);
};


// deployed test to the network (runs from /contract)
