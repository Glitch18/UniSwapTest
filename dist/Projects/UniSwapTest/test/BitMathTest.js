"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const testing_1 = require("../../../Github/hardhat-warp/src/testing");
const hardhat_network_helpers_1 = require("@nomicfoundation/hardhat-network-helpers");
// const { BigNumber } = ethers
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
        // it('1', async () => {
        //   expect(await bitMath.mostSignificantBit(1)).to.eq(0)
        // })
        // it('2', async () => {
        //   expect(await bitMath.mostSignificantBit(2)).to.eq(1)
        // })
        // it('all powers of 2', async () => {
        //   const results = await Promise.all(
        //     [...Array(255)].map((_, i) => bitMath.mostSignificantBit(BigNumber.from(2).pow(i)))
        //   )
        //   expect(results).to.deep.eq([...Array(255)].map((_, i) => i))
        // })
        // it('uint256(-1)', async () => {
        //   expect(await bitMath.mostSignificantBit(BigNumber.from(2).pow(256).sub(1))).to.eq(255)
        // })
        // it('gas cost of smaller number', async () => {
        //   await snapshotGasCost(bitMath.getGasCostOfMostSignificantBit(BigNumber.from(3568)))
        // })
        // it('gas cost of max uint128', async () => {
        //   await snapshotGasCost(bitMath.getGasCostOfMostSignificantBit(BigNumber.from(2).pow(128).sub(1)))
        // })
        // it('gas cost of max uint256', async () => {
        //   await snapshotGasCost(bitMath.getGasCostOfMostSignificantBit(BigNumber.from(2).pow(256).sub(1)))
        // })
    });
    //   describe('#leastSignificantBit', () => {
    //     it('0', async () => {
    //       await expect(bitMath.leastSignificantBit(0)).to.be.reverted
    //     })
    //     it('1', async () => {
    //       expect(await bitMath.leastSignificantBit(1)).to.eq(0)
    //     })
    //     it('2', async () => {
    //       expect(await bitMath.leastSignificantBit(2)).to.eq(1)
    //     })
    //     it('all powers of 2', async () => {
    //       const results = await Promise.all(
    //         [...Array(255)].map((_, i) => bitMath.leastSignificantBit(BigNumber.from(2).pow(i)))
    //       )
    //       expect(results).to.deep.eq([...Array(255)].map((_, i) => i))
    //     })
    //     it('uint256(-1)', async () => {
    //       expect(await bitMath.leastSignificantBit(BigNumber.from(2).pow(256).sub(1))).to.eq(0)
    //     })
    //     it('gas cost of smaller number', async () => {
    //       await snapshotGasCost(bitMath.getGasCostOfLeastSignificantBit(BigNumber.from(3568)))
    //     })
    //     it('gas cost of max uint128', async () => {
    //       await snapshotGasCost(bitMath.getGasCostOfLeastSignificantBit(BigNumber.from(2).pow(128).sub(1)))
    //     })
    //     it('gas cost of max uint256', async () => {
    //       await snapshotGasCost(bitMath.getGasCostOfLeastSignificantBit(BigNumber.from(2).pow(256).sub(1)))
    //     })
    //   })
});
