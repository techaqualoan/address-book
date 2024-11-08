"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/ts/AddressBook.ts
var AddressBook_exports = {};
__export(AddressBook_exports, {
  MiscBNB: () => MiscBNB,
  MiscSepolia: () => MiscSepolia,
  ProtocolSafetyModule: () => ProtocolSafetyModule,
  ProtocolV3BNB: () => ProtocolV3BNB,
  ProtocolV3Sepolia: () => ProtocolV3Sepolia
});
module.exports = __toCommonJS(AddressBook_exports);
var ProtocolV3Sepolia = __toESM(require("./ProtocolV3Sepolia.js"));
var ProtocolV3BNB = __toESM(require("./ProtocolV3BNB.js"));
var MiscBNB = __toESM(require("./MiscBNB.js"));
var MiscSepolia = __toESM(require("./MiscSepolia.js"));
var ProtocolSafetyModule = __toESM(require("./ProtocolSafetyModule.js"));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MiscBNB,
  MiscSepolia,
  ProtocolSafetyModule,
  ProtocolV3BNB,
  ProtocolV3Sepolia
});
//# sourceMappingURL=AddressBook.js.map