"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const testing_1 = require("hardhat-warp/dist/testing");
const hardhat_network_helpers_1 = require("@nomicfoundation/hardhat-network-helpers");
describe('BitMath', () => {
    let bitMath;
    const fixture = async () => {
        const factory = await (0, testing_1.getStarknetContractFactory)('BitMathTest');
        const contract = await factory.deploy();
        return (await contract.deployed());
    };
    beforeEach('deploy BitMathTest', async () => {
        bitMath = await (0, hardhat_network_helpers_1.loadFixture)(fixture);
    });
    describe('#mostSignificantBit', () => {
        it('0', async () => {
            await (0, chai_1.expect)(bitMath.mostSignificantBit_e6bcbc65({ low: 0, high: 0 })).to.be.reverted;
        });
    });
});
