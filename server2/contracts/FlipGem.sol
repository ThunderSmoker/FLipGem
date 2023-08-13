// FlipGem.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract FlipGem is ERC20 {
    constructor(uint256 initialSupply) ERC20("FlipGem", "FGM") {
        _mint(msg.sender, initialSupply);
    }

    function transferFrom(address sender, address recipient, uint256 amount) public override returns (bool) {
        _transfer(sender, recipient, amount);
        return true;
    }
}
