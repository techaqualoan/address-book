// src/ts/abis/IAaveV3ConfigEngine.ts
var IAaveV3ConfigEngine_ABI = [
  {
    type: "function",
    name: "ATOKEN_IMPL",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "BORROW_ENGINE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "CAPS_ENGINE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "COLLATERAL_ENGINE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "COLLECTOR",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "DEFAULT_INTEREST_RATE_STRATEGY",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "EMODE_ENGINE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "LISTING_ENGINE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "ORACLE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IAaveOracle"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "POOL",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IPool"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "POOL_CONFIGURATOR",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IPoolConfigurator"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "PRICE_FEED_ENGINE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "RATE_ENGINE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "REWARDS_CONTROLLER",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "VTOKEN_IMPL",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "listAssets",
    inputs: [
      {
        name: "context",
        type: "tuple",
        internalType: "struct IAaveV3ConfigEngine.PoolContext",
        components: [
          {
            name: "networkName",
            type: "string",
            internalType: "string"
          },
          {
            name: "networkAbbreviation",
            type: "string",
            internalType: "string"
          }
        ]
      },
      {
        name: "listings",
        type: "tuple[]",
        internalType: "struct IAaveV3ConfigEngine.Listing[]",
        components: [
          {
            name: "asset",
            type: "address",
            internalType: "address"
          },
          {
            name: "assetSymbol",
            type: "string",
            internalType: "string"
          },
          {
            name: "priceFeed",
            type: "address",
            internalType: "address"
          },
          {
            name: "rateStrategyParams",
            type: "tuple",
            internalType: "struct IAaveV3ConfigEngine.InterestRateInputData",
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
          },
          {
            name: "enabledToBorrow",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "borrowableInIsolation",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "withSiloedBorrowing",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "flashloanable",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "ltv",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "liqThreshold",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "liqBonus",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "reserveFactor",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "supplyCap",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "borrowCap",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "debtCeiling",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "liqProtocolFee",
            type: "uint256",
            internalType: "uint256"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "listAssetsCustom",
    inputs: [
      {
        name: "context",
        type: "tuple",
        internalType: "struct IAaveV3ConfigEngine.PoolContext",
        components: [
          {
            name: "networkName",
            type: "string",
            internalType: "string"
          },
          {
            name: "networkAbbreviation",
            type: "string",
            internalType: "string"
          }
        ]
      },
      {
        name: "listings",
        type: "tuple[]",
        internalType: "struct IAaveV3ConfigEngine.ListingWithCustomImpl[]",
        components: [
          {
            name: "base",
            type: "tuple",
            internalType: "struct IAaveV3ConfigEngine.Listing",
            components: [
              {
                name: "asset",
                type: "address",
                internalType: "address"
              },
              {
                name: "assetSymbol",
                type: "string",
                internalType: "string"
              },
              {
                name: "priceFeed",
                type: "address",
                internalType: "address"
              },
              {
                name: "rateStrategyParams",
                type: "tuple",
                internalType: "struct IAaveV3ConfigEngine.InterestRateInputData",
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
              },
              {
                name: "enabledToBorrow",
                type: "uint256",
                internalType: "uint256"
              },
              {
                name: "borrowableInIsolation",
                type: "uint256",
                internalType: "uint256"
              },
              {
                name: "withSiloedBorrowing",
                type: "uint256",
                internalType: "uint256"
              },
              {
                name: "flashloanable",
                type: "uint256",
                internalType: "uint256"
              },
              {
                name: "ltv",
                type: "uint256",
                internalType: "uint256"
              },
              {
                name: "liqThreshold",
                type: "uint256",
                internalType: "uint256"
              },
              {
                name: "liqBonus",
                type: "uint256",
                internalType: "uint256"
              },
              {
                name: "reserveFactor",
                type: "uint256",
                internalType: "uint256"
              },
              {
                name: "supplyCap",
                type: "uint256",
                internalType: "uint256"
              },
              {
                name: "borrowCap",
                type: "uint256",
                internalType: "uint256"
              },
              {
                name: "debtCeiling",
                type: "uint256",
                internalType: "uint256"
              },
              {
                name: "liqProtocolFee",
                type: "uint256",
                internalType: "uint256"
              }
            ]
          },
          {
            name: "implementations",
            type: "tuple",
            internalType: "struct IAaveV3ConfigEngine.TokenImplementations",
            components: [
              {
                name: "aToken",
                type: "address",
                internalType: "address"
              },
              {
                name: "vToken",
                type: "address",
                internalType: "address"
              }
            ]
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "updateAssetsEMode",
    inputs: [
      {
        name: "updates",
        type: "tuple[]",
        internalType: "struct IAaveV3ConfigEngine.AssetEModeUpdate[]",
        components: [
          {
            name: "asset",
            type: "address",
            internalType: "address"
          },
          {
            name: "eModeCategory",
            type: "uint8",
            internalType: "uint8"
          },
          {
            name: "borrowable",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "collateral",
            type: "uint256",
            internalType: "uint256"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "updateBorrowSide",
    inputs: [
      {
        name: "updates",
        type: "tuple[]",
        internalType: "struct IAaveV3ConfigEngine.BorrowUpdate[]",
        components: [
          {
            name: "asset",
            type: "address",
            internalType: "address"
          },
          {
            name: "enabledToBorrow",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "flashloanable",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "borrowableInIsolation",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "withSiloedBorrowing",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "reserveFactor",
            type: "uint256",
            internalType: "uint256"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "updateCaps",
    inputs: [
      {
        name: "updates",
        type: "tuple[]",
        internalType: "struct IAaveV3ConfigEngine.CapsUpdate[]",
        components: [
          {
            name: "asset",
            type: "address",
            internalType: "address"
          },
          {
            name: "supplyCap",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "borrowCap",
            type: "uint256",
            internalType: "uint256"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "updateCollateralSide",
    inputs: [
      {
        name: "updates",
        type: "tuple[]",
        internalType: "struct IAaveV3ConfigEngine.CollateralUpdate[]",
        components: [
          {
            name: "asset",
            type: "address",
            internalType: "address"
          },
          {
            name: "ltv",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "liqThreshold",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "liqBonus",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "debtCeiling",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "liqProtocolFee",
            type: "uint256",
            internalType: "uint256"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "updateEModeCategories",
    inputs: [
      {
        name: "updates",
        type: "tuple[]",
        internalType: "struct IAaveV3ConfigEngine.EModeCategoryUpdate[]",
        components: [
          {
            name: "eModeCategory",
            type: "uint8",
            internalType: "uint8"
          },
          {
            name: "ltv",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "liqThreshold",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "liqBonus",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "label",
            type: "string",
            internalType: "string"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "updatePriceFeeds",
    inputs: [
      {
        name: "updates",
        type: "tuple[]",
        internalType: "struct IAaveV3ConfigEngine.PriceFeedUpdate[]",
        components: [
          {
            name: "asset",
            type: "address",
            internalType: "address"
          },
          {
            name: "priceFeed",
            type: "address",
            internalType: "address"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "updateRateStrategies",
    inputs: [
      {
        name: "updates",
        type: "tuple[]",
        internalType: "struct IAaveV3ConfigEngine.RateStrategyUpdate[]",
        components: [
          {
            name: "asset",
            type: "address",
            internalType: "address"
          },
          {
            name: "params",
            type: "tuple",
            internalType: "struct IAaveV3ConfigEngine.InterestRateInputData",
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
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  }
];
export {
  IAaveV3ConfigEngine_ABI
};
//# sourceMappingURL=IAaveV3ConfigEngine.mjs.map