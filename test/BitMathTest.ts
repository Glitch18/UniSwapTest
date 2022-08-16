import {BitMathTest__WC__BitMathTest_compiled} from '../typechain-types/BitMathTest__WC__BitMathTest_compiled'
import {expect} from 'chai';
import { getStarknetContractFactory } from 'hardhat-warp/dist/testing'
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';

describe('BitMath', () => {
  let bitMath: BitMathTest__WC__BitMathTest_compiled
  // const fixture = async () => {
  //   const factory = await getStarknetContractFactory('BitMathTest')
  //   const contract = await factory.deploy()
  //   return (await contract.deployed()) as BitMathTest__WC__BitMathTest_compiled
  // }
  // beforeEach('deploy BitMathTest', async () => {
  //   bitMath = await loadFixture(fixture);
  // })

  describe('#mostSignificantBit', () => {
    it('0', async () => {
      // await expect(bitMath.mostSignificantBit_e6bcbc65({low:0, high:0})).to.be.reverted
      const factory = getStarknetContractFactory('BitMathTest')
      const contract = await (factory.deploy()) as BitMathTest__WC__BitMathTest_compiled
      console.log(`Deploying on ${contract.address}`)
      await contract.deployed()
      console.log('Deployed')
    })
  })
})
