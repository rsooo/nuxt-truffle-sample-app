const Contract = artifacts.require("ZombieFactory");
const DemoContract = artifacts.require("DemoContract");
const DemoToken = artifacts.require("DemoToken");
const GLDToken = artifacts.require("GLDToken");
const GameItem = artifacts.require("GameItem");

module.exports = (deployer) => {
  deployer.deploy(Contract);
  deployer.deploy(DemoContract);
  deployer.deploy(DemoToken);
  deployer.deploy(GLDToken, 1);
  deployer.deploy(GameItem);
};
