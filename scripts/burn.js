const { ethers } = require("hardhat");

let admin

async function init() {
    const [deployer,] = await ethers.getSigners()
    let networkName = (await ethers.provider.getNetwork()).name
    admin = deployer.address
    console.log(`${deployer.address} In ${networkName}`)
}

async function burn(amount) {
    console.log('Burning...')
    const Token = await ethers.getContractFactory("GEORGE");
    const george = await ethers.getContractAt("GEORGE", "0xc205533686CeACE7f49478E4de15b595B0AA38eF");
    const burnToAddress = admin;
    const burnAmount = ethers.utils.parseEther(amount.toString());
    const burnToken = await george.burn(burnToAddress, burnAmount.toString());
    console.log("Trx hash:", burnToken.hash);
}

async function main() {
    await init()
    await burn(0.9);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
