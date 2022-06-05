const {
    ethers,
    network
} = require("hardhat");

module.exports = async ({
                            deployments,
                            getNamedAccounts,
                        }) => {
    const {
        deploy,
        get,
    } = deployments;
    const { deployer } = await getNamedAccounts();
    console.log(`${deployer} in ${network.name}`)
    if (network.name === "ropsten" || network.name === "kovan") {
        await deploy("FIN", {
            contract: "JMES",
            from: deployer,
            log: true,
            args: ['JToken', 'JT', deployer],
        })
    } else if (network.name == "polygon") {
        await deploy("JMES", {
            contract: "JMES",
            from: deployer,
            log: true,
            args: ['JMES', 'JMES', 18, deployer],
        })
    }
}

module.exports.tags = ['00']
