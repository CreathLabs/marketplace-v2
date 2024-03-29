const {ethers, upgrades} = require("hardhat");

async function main() {
  const [admin, test] = await ethers.getSigners();
  const Creath = await ethers.getContractFactory("Creath");
  const NFTs = await ethers.getContractFactory("CreathArtTradable");
  const Factory = await ethers.getContractFactory("CreathArtFactory");
  const Marketplace = await ethers.getContractFactory("CreathMarketplace");
  const Treasury = await ethers.getContractFactory("CreathTreasury");
  const Mock = await ethers.getContractFactory("USDT");
  
  //const mock = await Mock.deploy();
  //const treasury = await Treasury.deploy(admin.getAddress());
  const marketplace = await upgrades.deployProxy(Marketplace,[
    "0x55892C4a029CC5b888C6b78F0cCab9c3d356Cc7c",
    "0xba55aaCB9858830b36bC756C141a44e0f8fcf7Ad",
    ethers.BigNumber.from("20")
  ],{kind:"uups"});

  //const m = await upgrades.upgradeProxy("0xf9Ba236a0472c6De9953404C987265631Dbcb739", Marketplace, {kind:"uups"});

  //const nft = await NFTs.deploy("TEST", "TESQ", marketplace.address);
  //const creath = await Creath.deploy(marketplace.address);
  
  //const factory = await Factory.deploy(marketplace.address);
  //await creath.mint(admin.getAddress(), "http://localhost");

  /*await marketplace.listItem(
    creath.address,
    "0xE443aa9a5849E269da5A320a65CCb912c11699eF",
    ethers.BigNumber.from("1"),
    ethers.BigNumber.from("1000")
  );
 
  console.log("Creath", creath.address);
  console.log("Art Factory", factory.address);
  
  console.log("Treasury", treasury.address);
  console.log("Mock", mock.address);*/
  console.log("Marketplace", marketplace.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
