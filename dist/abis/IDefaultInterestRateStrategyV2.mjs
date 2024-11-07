// src/ts/abis/IDefaultInterestRateStrategyV2.ts
var IDefaultInterestRateStrategyV2_ABI = [
  {
    type: "function",
    name: "ADDRESSES_PROVIDER",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IPoolAddressesProvider"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "MAX_BORROW_RATE",
    inputs: [],
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
    name: "MAX_OPTIMAL_POINT",
    inputs: [],
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
    name: "MIN_OPTIMAL_POINT",
    inputs: [],
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
    name: "calculateInterestRates",
    inputs: [
      {
        name: "params",
        type: "tuple",
        internalType: "struct DataTypes.CalculateInterestRatesParams",
        components: [
          {
            name: "unbacked",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "liquidityAdded",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "liquidityTaken",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "totalDebt",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "reserveFactor",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "reserve",
            type: "address",
            internalType: "address"
          },
          {
            name: "usingVirtualBalance",
            type: "bool",
            internalType: "bool"
          },
          {
            name: "virtualUnderlyingBalance",
            type: "uint256",
            internalType: "uint256"
          }
        ]
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      },
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
    name: "getBaseVariableBorrowRate",
    inputs: [
      {
        name: "reserve",
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
    name: "getInterestRateData",
    inputs: [
      {
        name: "reserve",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IDefaultInterestRateStrategyV2.InterestRateDataRay",
        components: [
          {
            name: "optimalUsageRatio",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "baseVariableBorrowRate",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "variableRateSlope1",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "variableRateSlope2",
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
    name: "getInterestRateDataBps",
    inputs: [
      {
        name: "reserve",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IDefaultInterestRateStrategyV2.InterestRateData",
        components: [
          {
            name: "optimalUsageRatio",
            type: "uint16",
            internalType: "uint16"
          },
          {
            name: "baseVariableBorrowRate",
            type: "uint32",
            internalType: "uint32"
          },
          {
            name: "variableRateSlope1",
            type: "uint32",
            internalType: "uint32"
          },
          {
            name: "variableRateSlope2",
            type: "uint32",
            internalType: "uint32"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getMaxVariableBorrowRate",
    inputs: [
      {
        name: "reserve",
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
    name: "getOptimalUsageRatio",
    inputs: [
      {
        name: "reserve",
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
    name: "getVariableRateSlope1",
    inputs: [
      {
        name: "reserve",
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
    name: "getVariableRateSlope2",
    inputs: [
      {
        name: "reserve",
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
    name: "setInterestRateParams",
    inputs: [
      {
        name: "reserve",
        type: "address",
        internalType: "address"
      },
      {
        name: "rateData",
        type: "bytes",
        internalType: "bytes"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setInterestRateParams",
    inputs: [
      {
        name: "reserve",
        type: "address",
        internalType: "address"
      },
      {
        name: "rateData",
        type: "tuple",
        internalType: "struct IDefaultInterestRateStrategyV2.InterestRateData",
        components: [
          {
            name: "optimalUsageRatio",
            type: "uint16",
            internalType: "uint16"
          },
          {
            name: "baseVariableBorrowRate",
            type: "uint32",
            internalType: "uint32"
          },
          {
            name: "variableRateSlope1",
            type: "uint32",
            internalType: "uint32"
          },
          {
            name: "variableRateSlope2",
            type: "uint32",
            internalType: "uint32"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "RateDataUpdate",
    inputs: [
      {
        name: "reserve",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "optimalUsageRatio",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "baseVariableBorrowRate",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "variableRateSlope1",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "variableRateSlope2",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  }
];
export {
  IDefaultInterestRateStrategyV2_ABI
};
//# sourceMappingURL=IDefaultInterestRateStrategyV2.mjs.map