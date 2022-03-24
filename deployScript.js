const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
    // We get the contract to deploy
    const AhmedNft = await ethers.getContractFactory("ahmedNFT");
    const ahmedNft = await AhmedNft.deploy();
  
    // await wonder.deployed();
  
    console.log("Wonder deployed to:", ahmedNft.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
    //0xfD1e4b977F3492f02C17f5D1C911E9B2135a99e8