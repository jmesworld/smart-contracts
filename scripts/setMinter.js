const { ethers } = require("hardhat");
const {utils} = require("ethers");

let admin

async function init() {
    const [deployer,] = await ethers.getSigners()
    let networkName = (await ethers.provider.getNetwork()).name
    admin = deployer.address
    console.log(`${deployer.address} In ${networkName}`)
}

async function setMinter() {
    console.log('set minter...')
    const Token = await ethers.getContractFactory("GEORGE");
    const george = await ethers.getContractAt("GEORGE", "0xc205533686CeACE7f49478E4de15b595B0AA38eF");
    const minterAddress = admin;

    const minterRole = utils.formatBytes32String("MINTER_ROLE")
    console.log(minterRole);
    const transaction = await george.grantRole(minterRole,minterAddress)
    console.log("Trx hash:", transaction.hash);
}

async function main() {
    await init()
    await setMinter();
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
