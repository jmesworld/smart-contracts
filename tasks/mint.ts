export default async function mint(address: any, amount: any){
    // Mitigate HH9 Error
    const { ethers } = require('hardhat');
    const mintAmount = ethers.utils.parseEther(amount.toString());
    console.log(`Minting ${mintAmount} to ${address}...`)
    const george = await ethers.getContractAt("GEORGE", "0xc205533686CeACE7f49478E4de15b595B0AA38eF");
    const mintToken = await george.mint(address, mintAmount.toString());
    console.log("Trx hash:", mintToken.hash);
}

// const hardhat = require("hardhat");
// const { ethers } = hardhat;
// console.log(hardhat.tasks);
//
// let admin
//
// async function init() {
//     hardhat.task("hello", "Prints a greeting'")
//         .addOptionalParam("greeting", "The greeting to print", "Hello, World!")
//         .setAction(async ({ greeting }) => console.log(greeting));
//
//     const [deployer,] = await ethers.getSigners()
//     let networkName = (await ethers.provider.getNetwork()).name
//     admin = deployer.address
//     console.log(`${deployer.address} In ${networkName}`)
// }
//
// async function mint(amount) {
//     console.log('Minting...')
//     const Token = await ethers.getContractFactory("GEORGE");
//     const george = await ethers.getContractAt("GEORGE", "0xc205533686CeACE7f49478E4de15b595B0AA38eF");
//     const mintToAddress = admin;
//     const mintAmount = ethers.utils.parseEther(amount.toString());
//     // console.log(mintAmount.toString())
//     // const mintToken = await george.mint(mintToAddress, mintAmount.toString());
//     // console.log("Trx hash:", mintToken.hash);
// }
//
// async function main(params) {
//     console.log({params})
//     // await init()
//     // await mint(1);
// }
//
// main(params)
//     .then(() => process.exit(0))
//     .catch((error) => {
//         console.error(error);
//         process.exit(1);
//     });
