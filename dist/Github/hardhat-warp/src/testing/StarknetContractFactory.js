"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStarknetContractFactory = exports.StarknetContractFactory = void 0;
const utils_1 = require("../utils");
const starknet_1 = require("starknet");
const fs_1 = require("fs");
class StarknetContractFactory {
    constructor(contract) {
        this.contract = contract;
        const compiledCairoContract = starknet_1.json.parse((0, fs_1.readFileSync)(this.contract.getCompiledJson()).toString('ascii'));
        this.provider = process.env.STARKNET_PROVIDER_BASE_URL === undefined ?
            starknet_1.defaultProvider :
            new starknet_1.Provider({ baseUrl: process.env.STARKNET_PROVIDER_BASE_URL });
        this.starknetFactory = new starknet_1.ContractFactory(compiledCairoContract, this.provider, compiledCairoContract.abi);
    }
    async deploy(...args) {
        return this.starknetFactory.deploy([args]);
    }
}
exports.StarknetContractFactory = StarknetContractFactory;
function getStarknetContractFactory(contractName) {
    const contract = (0, utils_1.getContract)(contractName);
    return new StarknetContractFactory(contract);
}
exports.getStarknetContractFactory = getStarknetContractFactory;
