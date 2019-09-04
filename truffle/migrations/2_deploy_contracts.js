const Contract = artifacts.require("ZombieFactory");
const DemoContract = artifacts.require("DemoContract");
const DemoToken = artifacts.require("DemoToken");

module.exports = (deployer) => {
  deployer.deploy(Contract);
  deployer.deploy(DemoContract);
  deployer.deploy(DemoToken);
};
