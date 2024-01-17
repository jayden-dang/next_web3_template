// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Token is ERC20 {
    constructor() ERC20("JaydenToken", "JDT") {}

    function mint() external returns(uint256) {
        uint amount = 5 * 10 ** 18;
        _mint(msg.sender, amount);
        return amount;
    }
}
