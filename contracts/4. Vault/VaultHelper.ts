import { expect } from "chai";
import { ethers, waffle } from "hardhat";

const helper = async (victim: any) => {
  // Slot 0 has the boolean.
  // Slot 1 has the password!
  // TODO(jqphu): due to https://github.com/ethers-io/ethers.js/issues/2982 this won't work. Downgrade hardhat to get this test to pass.
  const result = await ethers.provider.getStorageAt(victim.address, 1);
  // TODO(jqphu): 
  /*
    Add code here that will help you pass the test
    Note: Unlock without using the string "A very strong password"
    Unlock the vault by somehow reading the private password from 
    Vault directly
  */
};

export default helper;
