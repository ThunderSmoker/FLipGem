import user from "../model/userSchema";
import { flipGemConnector ,RewardRulesConnector} from "../utils/flipgem";
const { ethers } = require("hardhat");

export const getAmount = async (req, res) => {
    try {
        const { userId } = req.body;
        const myuser = await user.findById(userId);

        if (!myuser) {
            return res.status(400).json({ msg: "User not found" });
        }

        if (!myuser.walletAddress) {
            return res.status(400).json({ msg: "Wallet address not found for the user" });
        }

        const useraddress = myuser.walletAddress;
        const flipGem = flipGemConnector();

        let addrBalance;
        try {
            addrBalance = await flipGem.balanceOf(useraddress);
        } catch (balanceErr) {
            return res.status(500).json({ msg: "Error fetching balance" });
        }

        const data = addrBalance.toString();

        return res.status(200).json({ balance: data });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: "Internal server error" });
    }
};

export const setRewardRulesForAction = async (req, res) => {
    try {
        const { product_id, reward } = req.body;
        const rewardRules = RewardRulesConnector();
        const tx = await rewardRules.setRewardForAction(product_id, reward);
        await tx.wait(); // Wait for the transaction to be mined
        
        return res.status(200).json({ msg: "Reward rule successfully set" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Error setting reward rule" });
    }
};

export const setCoupenAmount = async (req, res) => {
    try {
        const { coupen_id, reward } = req.body;
        const rewardRules = RewardRulesConnector();
        
        const tx = await rewardRules.setCoupenAmount(coupen_id, reward);
        await tx.wait(); // Wait for the transaction to be mined
        
        return res.status(200).json({ msg: "Coupen rule successfully set" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Error setting coupen rule" });
    }
};
export const getRewardRulesForAction = async (req, res) => {
    try {
        const { product_id } = req.body;
        const rewardRules = RewardRulesConnector();
        
        const tx = await rewardRules.getRewardForAction(product_id);
        
        return res.status(200).json({reward: tx});
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Error getting reward rule" });
    }
};

export const getCoupenAmount = async (req, res) => {
    try {
        const { coupen_id} = req.body;
        const rewardRules = RewardRulesConnector();
        
        const tx = await rewardRules.getCoupenAmountForAction(coupen_id);
        
        return res.status(200).json({ price: tx });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Error getting coupen rule" });
    }
};

export const transferReward = async (req, res) => {
    const { userId,product_id } = req.body;
    const myuser = await user.findById(userId);

    if (!myuser) {
        return res.status(400).json({ msg: "User not found" });
    }

    if (!myuser.walletAddress) {
        return res.status(400).json({ msg: "Wallet address not found for the user" });
    }

    const rewardRules = RewardRulesConnector();
    const tx = await rewardRules.transferReward(myuser.walletAddress,product_id);
    await tx.wait(); 
    res.status(200).json({ msg: "Reward transfered successfully" });
}
export const deductCoupen= async (req, res) => {
    const { userId,coupen_id } = req.body;
    const myuser = await user.findById(userId);

    if (!myuser) {
        return res.status(400).json({ msg: "User not found" });
    }

    if (!myuser.walletAddress) {
        return res.status(400).json({ msg: "Wallet address not found for the user" });
    }

    const rewardRules = RewardRulesConnector();
    const tx = await rewardRules.deductCoupon(myuser.walletAddress,coupen_id);
    await tx.wait(); 
    res.status(200).json({ msg: "Reward transfered successfully" });
}

export const decayReward= async (req, res) => {
    const { userId,coupen_id } = req.body;
    const myuser = await user.findById(userId);

    if (!myuser) {
        return res.status(400).json({ msg: "User not found" });
    }

    if (!myuser.walletAddress) {
        return res.status(400).json({ msg: "Wallet address not found for the user" });
    }

    const rewardRules = RewardRulesConnector();
    const tx = await rewardRules.decayReward(myuser.walletAddress,amount);
    await tx.wait(); 
    res.status(200).json({ msg: "Reward transfered successfully" });
}
