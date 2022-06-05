# smart-contracts


Bridge part : https://github.com/BoringDAO/smart-bridge-contract/tree/main/deploy


# Compile

`yarn hardhat compile`

# Test

`yarn hardhat test`

# Deploy

`yarn hardhat run scripts/deploy.js`

To specific network

`yarn hardhat run scripts/deploy.js --network mumbai`

# Grant role

## Minter 

`yarn hardhat run scripts/setMinter.js --network mumbai`
## Burner

`yarn hardhat run scripts/setBurner.js --network mumbai`

# Operations

## Balance 

yarn hardhat balance --account 0xcEa3F0182C3f36C2D83f52065E0f572d17D7823c --network mumbai

## Mint 

yarn hardhat mint --account 0xcEa3F0182C3f36C2D83f52065E0f572d17D7823c --amount 1 --network mumbai

## Burn

yarn hardhat burn --account 0xcEa3F0182C3f36C2D83f52065E0f572d17D7823c --amount 1 --network mumbai
