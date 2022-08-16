"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContract = exports.saveContract = exports.colorLogger = exports.WarpPluginError = void 0;
const plugins_1 = require("hardhat/plugins");
require("colors");
const Contract_1 = require("./Contract");
const fs = __importStar(require("fs"));
class WarpPluginError extends plugins_1.NomicLabsHardhatPluginError {
    constructor(message, parent, shouldBeReported) {
        super('hardhat-warp', message, parent, shouldBeReported);
    }
}
exports.WarpPluginError = WarpPluginError;
function colorLogger(str) {
    console.log(str.blue.bold);
}
exports.colorLogger = colorLogger;
function saveContract(contract) {
    const contracts = [contract];
    if (fs.existsSync('warp_output/contracts.json')) {
        const readData = fs.readFileSync('warp_output/contracts.json', 'utf-8');
        const existingData = JSON.parse(readData);
        existingData.forEach((ctr) => {
            const temp = new Contract_1.ContractInfo('', '');
            Object.assign(temp, ctr);
            if (temp.getName() !== contract.getName())
                contracts.push(temp);
        });
    }
    fs.writeFileSync('warp_output/contracts.json', JSON.stringify(contracts));
}
exports.saveContract = saveContract;
function getContract(contractName) {
    if (!fs.existsSync('warp_output/contracts.json')) {
        throw new WarpPluginError('No Starknet contracts found. Please run hardhat compile');
    }
    const readData = fs.readFileSync('warp_output/contracts.json', 'utf-8');
    const existingData = JSON.parse(readData);
    const contracts = existingData.map((ctr) => {
        const temp = new Contract_1.ContractInfo('', '');
        Object.assign(temp, ctr);
        return temp;
    });
    const res = contracts.find((ctr) => {
        return ctr.getName() === contractName;
    });
    if (res === undefined) {
        throw new WarpPluginError('Given object was not found in Starknet contracts.');
    }
    return res;
}
exports.getContract = getContract;
