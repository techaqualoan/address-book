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

// src/ts/ProtocolSafetyModuleBNB.ts
var ProtocolSafetyModuleBNB_exports = {};
__export(ProtocolSafetyModuleBNB_exports, {
  CHAIN_ID: () => CHAIN_ID,
  STK_AAVE: () => STK_AAVE
});
module.exports = __toCommonJS(ProtocolSafetyModuleBNB_exports);
var STK_AAVE = "0x4da27a545c0c5B758a6BA100e3a049001de870f5";
var CHAIN_ID = 56;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CHAIN_ID,
  STK_AAVE
});
//# sourceMappingURL=ProtocolSafetyModuleBNB.js.map