const { ethers } = require("hardhat");

const tokenName = "GEORGE"
const symbol = "GRG"
let admin

async function init() {
    const [deployer,] = await ethers.getSigners()
    let networkName = (await ethers.provider.getNetwork()).name
    admin = deployer.address
    console.log(`${deployer.address} In ${networkName}`)
}

async function deploy() {
    console.log('Deploying...')
    const Token = await ethers.getContractFactory("GEORGE");
    const token = await Token.deploy(tokenName, symbol);
    await token.deployed();

    console.log("token deployed to:", token.address);
}

async function main() {
    await init()
    await deploy()
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
