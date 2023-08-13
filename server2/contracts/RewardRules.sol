// RewardRules.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./FlipGem.sol";  

contract RewardRules is Ownable {
    FlipGem public flipGemToken;  

    mapping(string => uint256) public actionRewards;
    mapping(string => uint256) public coupenAmount;

    constructor(address _flipGemAddress) {
        flipGemToken = FlipGem(_flipGemAddress); 
    }


    function setRewardForAction(string memory product_id, uint256 reward) external onlyOwner {
        actionRewards[product_id] = reward;
    }

    function setCoupenAmount(string memory coupen_id, uint256 reward) external onlyOwner {
        actionRewards[coupen_id] = reward;
    }

 
    function getRewardForAction(string memory product_id) external view returns (uint256) {
        return actionRewards[product_id];
    }

    function getCoupenAmountForAction(string memory coupen_id) external view returns (uint256) {
        return actionRewards[coupen_id];
    }

    
    function transferReward(address user, string memory product_id) external onlyOwner {
        uint256 rewardAmount = actionRewards[product_id];

        require(rewardAmount > 0, "Reward not set for this action");
        require(user != address(0), "Invalid user address");

        flipGemToken.transferFrom(owner(), user, rewardAmount);
    }

    function deductCoupon(address user, string memory coupon_id) external onlyOwner {
        uint256 couponAmount = coupenAmount[coupon_id];
        require(couponAmount > 0, "Coupon amount not set");
        require(user != address(0), "Invalid user address");


        flipGemToken.transferFrom(user, address(this), couponAmount);
    }

    function decayReward(address user, uint256 amount)external onlyOwner{
        flipGemToken.transferFrom(user, address(this),amount);
    }
}
