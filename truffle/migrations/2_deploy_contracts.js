const Contract = artifacts.require("ZombieFactory");
const DemoContract = artifacts.require("DemoContract");

module.exports = (deployer) => {
  deployer.deploy(Contract);
  deployer.deploy(DemoContract);
};
