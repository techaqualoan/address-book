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

// src/ts/MiscEthereum.ts
var MiscEthereum_exports = {};
__export(MiscEthereum_exports, {
  AAVE_ECOSYSTEM_RESERVE_CONTROLLER: () => AAVE_ECOSYSTEM_RESERVE_CONTROLLER,
  CHAIN_ID: () => CHAIN_ID,
  ECOSYSTEM_RESERVE: () => ECOSYSTEM_RESERVE,
  EUR_USD_AGGREGATOR: () => EUR_USD_AGGREGATOR
});
module.exports = __toCommonJS(MiscEthereum_exports);
var AAVE_ECOSYSTEM_RESERVE_CONTROLLER = "0x2C7E6B153fC1AC0ae903f25BA023D4f2e7B3c38C";
var ECOSYSTEM_RESERVE = "0x5577B156C3ad7beC2A11BBe29009B330ac5C9bF5";
var EUR_USD_AGGREGATOR = "0xb49f677943BC038e9857d61E7d053CaA2C1734C1";
var CHAIN_ID = 1;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AAVE_ECOSYSTEM_RESERVE_CONTROLLER,
  CHAIN_ID,
  ECOSYSTEM_RESERVE,
  EUR_USD_AGGREGATOR
});
//# sourceMappingURL=MiscEthereum.js.map