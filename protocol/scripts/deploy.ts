import { ethers } from "hardhat";

async function main() {
  const todos = await ethers.deployContract("Todos",{});
  await todos.waitForDeployment();

  console.log(
    `deployed to ${todos.target}`
  );

  const token = await ethers.deployContract("Token",{});
  await token.waitForDeployment();

  console.log(
    `deployed to ${token.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
