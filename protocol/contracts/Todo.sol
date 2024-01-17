// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Todos {
    struct Todo {
        string text;
        bool completed;
    }

    Todo[] public todos;

    function addTodo(string memory _text) external {
        todos.push(Todo({
                text: _text,
                completed: false
                }));
    }

    function getTodo(uint256 _index) external view returns (Todo memory) {
        return todos[_index];
    }
}
