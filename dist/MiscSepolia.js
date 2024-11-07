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

// src/ts/MiscSepolia.ts
var MiscSepolia_exports = {};
__export(MiscSepolia_exports, {
  CHAIN_ID: () => CHAIN_ID,
  GHO_FLASHMINTER_FACILITATOR: () => GHO_FLASHMINTER_FACILITATOR,
  GHO_TOKEN: () => GHO_TOKEN,
  PROXY_ADMIN: () => PROXY_ADMIN,
  TRANSPARENT_PROXY_FACTORY: () => TRANSPARENT_PROXY_FACTORY
});
module.exports = __toCommonJS(MiscSepolia_exports);
var TRANSPARENT_PROXY_FACTORY = "0x3Bad08c7b17D77cE12A2e1438Db2353b58F7c4a2";
var PROXY_ADMIN = "0x8dDa7a1E3e96EB13BE50bB59e80485227E3DE2e7";
var GHO_TOKEN = "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60";
var GHO_FLASHMINTER_FACILITATOR = "0xB5d0ef1548D9C70d3E7a96cA67A2d7EbC5b1173E";
var CHAIN_ID = 11155111;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CHAIN_ID,
  GHO_FLASHMINTER_FACILITATOR,
  GHO_TOKEN,
  PROXY_ADMIN,
  TRANSPARENT_PROXY_FACTORY
});
//# sourceMappingURL=MiscSepolia.js.map