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

// src/ts/abis/ILendingPool.ts
var ILendingPool_exports = {};
__export(ILendingPool_exports, {
  ILendingPool_ABI: () => ILendingPool_ABI
});
module.exports = __toCommonJS(ILendingPool_exports);
var ILendingPool_ABI = [
  {
    type: "function",
    name: "borrow",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "interestRateMode",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "referralCode",
        type: "uint16",
        internalType: "uint16"
      },
      {
        name: "onBehalfOf",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "deposit",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "onBehalfOf",
        type: "address",
        internalType: "address"
      },
      {
        name: "referralCode",
        type: "uint16",
        internalType: "uint16"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "finalizeTransfer",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      },
      {
        name: "from",
        type: "address",
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "balanceFromAfter",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "balanceToBefore",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "flashLoan",
    inputs: [
      {
        name: "receiverAddress",
        type: "address",
        internalType: "address"
      },
      {
        name: "assets",
        type: "address[]",
        internalType: "address[]"
      },
      {
        name: "amounts",
        type: "uint256[]",
        internalType: "uint256[]"
      },
      {
        name: "modes",
        type: "uint256[]",
        internalType: "uint256[]"
      },
      {
        name: "onBehalfOf",
        type: "address",
        internalType: "address"
      },
      {
        name: "params",
        type: "bytes",
        internalType: "bytes"
      },
      {
        name: "referralCode",
        type: "uint16",
        internalType: "uint16"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "getAddressesProvider",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract ILendingPoolAddressesProvider"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getConfiguration",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct DataTypes.ReserveConfigurationMap",
        components: [
          {
            name: "data",
            type: "uint256",
            internalType: "uint256"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getReserveData",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct DataTypes.ReserveData",
        components: [
          {
            name: "configuration",
            type: "tuple",
            internalType: "struct DataTypes.ReserveConfigurationMap",
            components: [
              {
                name: "data",
                type: "uint256",
                internalType: "uint256"
              }
            ]
          },
          {
            name: "liquidityIndex",
            type: "uint128",
            internalType: "uint128"
          },
          {
            name: "variableBorrowIndex",
            type: "uint128",
            internalType: "uint128"
          },
          {
            name: "currentLiquidityRate",
            type: "uint128",
            internalType: "uint128"
          },
          {
            name: "currentVariableBorrowRate",
            type: "uint128",
            internalType: "uint128"
          },
          {
            name: "currentStableBorrowRate",
            type: "uint128",
            internalType: "uint128"
          },
          {
            name: "lastUpdateTimestamp",
            type: "uint40",
            internalType: "uint40"
          },
          {
            name: "aTokenAddress",
            type: "address",
            internalType: "address"
          },
          {
            name: "stableDebtTokenAddress",
            type: "address",
            internalType: "address"
          },
          {
            name: "variableDebtTokenAddress",
            type: "address",
            internalType: "address"
          },
          {
            name: "interestRateStrategyAddress",
            type: "address",
            internalType: "address"
          },
          {
            name: "id",
            type: "uint8",
            internalType: "uint8"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getReserveNormalizedIncome",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getReserveNormalizedVariableDebt",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getReservesList",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getUserAccountData",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "totalCollateralETH",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "totalDebtETH",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "availableBorrowsETH",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "currentLiquidationThreshold",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "ltv",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "healthFactor",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getUserConfiguration",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct DataTypes.UserConfigurationMap",
        components: [
          {
            name: "data",
            type: "uint256",
            internalType: "uint256"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "initReserve",
    inputs: [
      {
        name: "reserve",
        type: "address",
        internalType: "address"
      },
      {
        name: "aTokenAddress",
        type: "address",
        internalType: "address"
      },
      {
        name: "stableDebtAddress",
        type: "address",
        internalType: "address"
      },
      {
        name: "variableDebtAddress",
        type: "address",
        internalType: "address"
      },
      {
        name: "interestRateStrategyAddress",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "liquidationCall",
    inputs: [
      {
        name: "collateralAsset",
        type: "address",
        internalType: "address"
      },
      {
        name: "debtAsset",
        type: "address",
        internalType: "address"
      },
      {
        name: "user",
        type: "address",
        internalType: "address"
      },
      {
        name: "debtToCover",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "receiveAToken",
        type: "bool",
        internalType: "bool"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "paused",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "rebalanceStableBorrowRate",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      },
      {
        name: "user",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "repay",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "rateMode",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "onBehalfOf",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setConfiguration",
    inputs: [
      {
        name: "reserve",
        type: "address",
        internalType: "address"
      },
      {
        name: "configuration",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setPause",
    inputs: [
      {
        name: "val",
        type: "bool",
        internalType: "bool"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setReserveInterestRateStrategyAddress",
    inputs: [
      {
        name: "reserve",
        type: "address",
        internalType: "address"
      },
      {
        name: "rateStrategyAddress",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setUserUseReserveAsCollateral",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      },
      {
        name: "useAsCollateral",
        type: "bool",
        internalType: "bool"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "swapBorrowRateMode",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      },
      {
        name: "rateMode",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "withdraw",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "to",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "Borrow",
    inputs: [
      {
        name: "reserve",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "user",
        type: "address",
        indexed: false,
        internalType: "address"
      },
      {
        name: "onBehalfOf",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "borrowRateMode",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "borrowRate",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "referral",
        type: "uint16",
        indexed: true,
        internalType: "uint16"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Deposit",
    inputs: [
      {
        name: "reserve",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "user",
        type: "address",
        indexed: false,
        internalType: "address"
      },
      {
        name: "onBehalfOf",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "referral",
        type: "uint16",
        indexed: true,
        internalType: "uint16"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "FlashLoan",
    inputs: [
      {
        name: "target",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "initiator",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "asset",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "premium",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "referralCode",
        type: "uint16",
        indexed: false,
        internalType: "uint16"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "LiquidationCall",
    inputs: [
      {
        name: "collateralAsset",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "debtAsset",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "debtToCover",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "liquidatedCollateralAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "liquidator",
        type: "address",
        indexed: false,
        internalType: "address"
      },
      {
        name: "receiveAToken",
        type: "bool",
        indexed: false,
        internalType: "bool"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Paused",
    inputs: [],
    anonymous: false
  },
  {
    type: "event",
    name: "RebalanceStableBorrowRate",
    inputs: [
      {
        name: "reserve",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Repay",
    inputs: [
      {
        name: "reserve",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "repayer",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ReserveDataUpdated",
    inputs: [
      {
        name: "reserve",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "liquidityRate",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "stableBorrowRate",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "variableBorrowRate",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "liquidityIndex",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "variableBorrowIndex",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ReserveUsedAsCollateralDisabled",
    inputs: [
      {
        name: "reserve",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ReserveUsedAsCollateralEnabled",
    inputs: [
      {
        name: "reserve",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Swap",
    inputs: [
      {
        name: "reserve",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "rateMode",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Unpaused",
    inputs: [],
    anonymous: false
  },
  {
    type: "event",
    name: "Withdraw",
    inputs: [
      {
        name: "reserve",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ILendingPool_ABI
});
//# sourceMappingURL=ILendingPool.js.map