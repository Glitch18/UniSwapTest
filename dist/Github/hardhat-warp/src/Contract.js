"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractInfo = void 0;
const path_1 = __importDefault(require("path"));
class ContractInfo {
    constructor(name, solidityFile) {
        this.deployedAddress = '';
        this.deployTxHash = '';
        this.name = name;
        this.solidityFile = solidityFile;
    }
    getName() {
        return this.name;
    }
    getSolidityFile() {
        return this.solidityFile;
    }
    setDeployedAddress(add) {
        this.deployedAddress = add;
    }
    setDeployTxHash(hash) {
        this.deployTxHash = hash;
    }
    getCairoFile() {
        const cairoFile = this.solidityFile.slice(0, -4).replace('_', '__').concat(`__WC__${this.name}.cairo`);
        return path_1.default.join('warp_output', cairoFile);
    }
    getCompiledJson() {
        return this.getCairoFile().slice(0, -6).concat('_compiled.json');
    }
}
exports.ContractInfo = ContractInfo;
