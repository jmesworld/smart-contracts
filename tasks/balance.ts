import {ethers} from "hardhat";

export default async function balance(address: any, { web3 }: any){
    const { ethers } = require('hardhat');

    // Mitigate HH9 Error
    const account = web3.utils.toChecksumAddress(address);
    const balance = await web3.eth.getBalance(account);

    console.log(web3.utils.fromWei(balance, "ether"), "ETH");

    const george = await ethers.getContractAt(
            "GEORGE",
            "0xc205533686CeACE7f49478E4de15b595B0AA38eF");

    const tokenBalance = await george.balanceOf(address);
    console.log(web3.utils.fromWei(tokenBalance.toString(), "ether"), "GEORGE");
}
