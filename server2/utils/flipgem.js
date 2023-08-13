const { ethers } = require("hardhat");
require('dotenv').config();
export const flipGemConnector=async() => {
    const [owner] = await ethers.getSigners();
    const flipGem = new ethers.Contract(process.env.FGDEPLOYADDRESS, process.env.FGDEPLOYABI, owner);
    return flipGem;
}
export const RewardRulesConnector=async() => {
    const [owner] = await ethers.getSigners();
    const RewardRules= new ethers.Contract(process.env.RRDEPLOYADDRESS, process.env.RRDEPLOYABI, owner);
    return RewardRules;
}