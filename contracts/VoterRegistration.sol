pragma solidity ^0.4.23;

contract VoterResgistration {
  mapping(address => bool) registered;

  address public owner;
  // when runs this contract show who was the sender.
  constructor() public {
    owner = msg.sender;
  }

  modifier onlyOwner () {
    require( msg.sender == owner );
    _;
  }

  function register(address voter) public onlyOwner {
    registered[voter] = true;
  }
  function isRegistered(address voter) view public returns (bool){
    return  registered[voter];
  }
}


// solidity function need to pass data type (address) and the paramater (voter)
/* function isRegisterd(address voter){

} */
