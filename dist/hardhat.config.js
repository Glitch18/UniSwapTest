"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@nomicfoundation/hardhat-toolbox");
require("hardhat-warp");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
const config = {
    solidity: "0.8.9",
    paths: {
        warp: '../../Github/warp/bin/warp',
    }
};
exports.default = config;
