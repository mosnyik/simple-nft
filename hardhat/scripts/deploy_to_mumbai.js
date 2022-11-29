const { ethers } = require('hardhat');


async function main(){
    // make an instance of the Mos.sol contract
    const mosNFTContract = await ethers.getContractFactory('Mos');

    // deploy the contract
    const deployedMosNFTContract = await mosNFTContract.deploy();

    // await complete deployment
    await deployedMosNFTContract.deployed();

    // get the contract address
    console.log('Mos Contract Address: ', deployedMosNFTContract.address);
}

main()
.then(()=> process.exit(0))
.catch((error)=>{
    console.log(error);
    process.exit(1);
})

// Contract address 0xFAC3C78C55d02E0fe6c32a4c48cf3A945E736E17