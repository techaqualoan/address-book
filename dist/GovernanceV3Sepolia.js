"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/ts/GovernanceV3Sepolia.ts
var GovernanceV3Sepolia_exports = {};
__export(GovernanceV3Sepolia_exports, {
  CHAIN_ID: () => CHAIN_ID,
  CROSS_CHAIN_CONTROLLER: () => CROSS_CHAIN_CONTROLLER,
  DATA_WAREHOUSE: () => DATA_WAREHOUSE,
  EXECUTOR_LVL_1: () => EXECUTOR_LVL_1,
  EXECUTOR_LVL_2: () => EXECUTOR_LVL_2,
  GOVERNANCE: () => GOVERNANCE,
  GOVERNANCE_POWER_STRATEGY: () => GOVERNANCE_POWER_STRATEGY,
  PAYLOADS_CONTROLLER: () => PAYLOADS_CONTROLLER,
  VOTING_MACHINE: () => VOTING_MACHINE,
  VOTING_PORTAL_ETH_AVAX: () => VOTING_PORTAL_ETH_AVAX,
  VOTING_PORTAL_ETH_ETH: () => VOTING_PORTAL_ETH_ETH,
  VOTING_PORTAL_ETH_POL: () => VOTING_PORTAL_ETH_POL,
  VOTING_STRATEGY: () => VOTING_STRATEGY
});
module.exports = __toCommonJS(GovernanceV3Sepolia_exports);
var CROSS_CHAIN_CONTROLLER = "0xF57D158aA44B95E657bA4697fD69A2B9037bd723";
var GOVERNANCE = "0x2B2fa1A67964613F8056FB8612494893A2B90DCa";
var VOTING_MACHINE = "0x0c8B7355c0d048B1ce74FDE2D638415D5a392Ac7";
var PAYLOADS_CONTROLLER = "0xF3a4C3BDa8d54971aA5cEbdeF3326d9ea4Fd8262";
var VOTING_PORTAL_ETH_ETH = "0x86224d188f4005d5De75eEeFfC45dE51d3A4969c";
var VOTING_PORTAL_ETH_AVAX = "0x2c2585E30c1CC1F0B4f4992F17957E31C9750983";
var VOTING_PORTAL_ETH_POL = "0x31a1517c21fA41b7c4A208379a3f988093E4Aa44";
var GOVERNANCE_POWER_STRATEGY = "0x318B3A669156f530EB997495d015830E3bc3Ff9F";
var EXECUTOR_LVL_1 = "0x4EbD93aC31089591aDf9b752117128a66c14B28b";
var EXECUTOR_LVL_2 = "0xf327D3fac973e9C6744CB2CCF73187aFC36AeA55";
var VOTING_STRATEGY = "0x90021Ca340adCFa213af9A3BfC1b0dD38c01FCd9";
var DATA_WAREHOUSE = "0xD6480B403B9b2C48c4fbF15F6120b6f1F1b04496";
var CHAIN_ID = 11155111;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CHAIN_ID,
  CROSS_CHAIN_CONTROLLER,
  DATA_WAREHOUSE,
  EXECUTOR_LVL_1,
  EXECUTOR_LVL_2,
  GOVERNANCE,
  GOVERNANCE_POWER_STRATEGY,
  PAYLOADS_CONTROLLER,
  VOTING_MACHINE,
  VOTING_PORTAL_ETH_AVAX,
  VOTING_PORTAL_ETH_ETH,
  VOTING_PORTAL_ETH_POL,
  VOTING_STRATEGY
});
//# sourceMappingURL=GovernanceV3Sepolia.js.map