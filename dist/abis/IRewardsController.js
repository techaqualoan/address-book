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

// src/ts/abis/IRewardsController.ts
var IRewardsController_exports = {};
__export(IRewardsController_exports, {
  IRewardsController_ABI: () => IRewardsController_ABI
});
module.exports = __toCommonJS(IRewardsController_exports);
var IRewardsController_ABI = [
  {
    type: "function",
    name: "EMISSION_MANAGER",
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
    name: "claimAllRewards",
    inputs: [
      {
        name: "assets",
        type: "address[]",
        internalType: "address[]"
      },
      {
        name: "to",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "rewardsList",
        type: "address[]",
        internalType: "address[]"
      },
      {
        name: "claimedAmounts",
        type: "uint256[]",
        internalType: "uint256[]"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "claimAllRewardsOnBehalf",
    inputs: [
      {
        name: "assets",
        type: "address[]",
        internalType: "address[]"
      },
      {
        name: "user",
        type: "address",
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "rewardsList",
        type: "address[]",
        internalType: "address[]"
      },
      {
        name: "claimedAmounts",
        type: "uint256[]",
        internalType: "uint256[]"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "claimAllRewardsToSelf",
    inputs: [
      {
        name: "assets",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    outputs: [
      {
        name: "rewardsList",
        type: "address[]",
        internalType: "address[]"
      },
      {
        name: "claimedAmounts",
        type: "uint256[]",
        internalType: "uint256[]"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "claimRewards",
    inputs: [
      {
        name: "assets",
        type: "address[]",
        internalType: "address[]"
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
      },
      {
        name: "reward",
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
    name: "claimRewardsOnBehalf",
    inputs: [
      {
        name: "assets",
        type: "address[]",
        internalType: "address[]"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "user",
        type: "address",
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        internalType: "address"
      },
      {
        name: "reward",
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
    name: "claimRewardsToSelf",
    inputs: [
      {
        name: "assets",
        type: "address[]",
        internalType: "address[]"
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "reward",
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
    name: "configureAssets",
    inputs: [
      {
        name: "config",
        type: "tuple[]",
        internalType: "struct RewardsDataTypes.RewardsConfigInput[]",
        components: [
          {
            name: "emissionPerSecond",
            type: "uint88",
            internalType: "uint88"
          },
          {
            name: "totalSupply",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "distributionEnd",
            type: "uint32",
            internalType: "uint32"
          },
          {
            name: "asset",
            type: "address",
            internalType: "address"
          },
          {
            name: "reward",
            type: "address",
            internalType: "address"
          },
          {
            name: "transferStrategy",
            type: "address",
            internalType: "contract ITransferStrategyBase"
          },
          {
            name: "rewardOracle",
            type: "address",
            internalType: "contract IEACAggregatorProxy"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "getAllUserRewards",
    inputs: [
      {
        name: "assets",
        type: "address[]",
        internalType: "address[]"
      },
      {
        name: "user",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "address[]",
        internalType: "address[]"
      },
      {
        name: "",
        type: "uint256[]",
        internalType: "uint256[]"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getAssetDecimals",
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
        type: "uint8",
        internalType: "uint8"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getAssetIndex",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      },
      {
        name: "reward",
        type: "address",
        internalType: "address"
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
    name: "getClaimer",
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
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getDistributionEnd",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      },
      {
        name: "reward",
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
    name: "getEmissionManager",
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
    name: "getRewardOracle",
    inputs: [
      {
        name: "reward",
        type: "address",
        internalType: "address"
      }
    ],
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
    name: "getRewardsByAsset",
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
        type: "address[]",
        internalType: "address[]"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getRewardsData",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      },
      {
        name: "reward",
        type: "address",
        internalType: "address"
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
      },
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
    name: "getRewardsList",
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
    name: "getTransferStrategy",
    inputs: [
      {
        name: "reward",
        type: "address",
        internalType: "address"
      }
    ],
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
    name: "getUserAccruedRewards",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      },
      {
        name: "reward",
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
    name: "getUserAssetIndex",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      },
      {
        name: "asset",
        type: "address",
        internalType: "address"
      },
      {
        name: "reward",
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
    name: "getUserRewards",
    inputs: [
      {
        name: "assets",
        type: "address[]",
        internalType: "address[]"
      },
      {
        name: "user",
        type: "address",
        internalType: "address"
      },
      {
        name: "reward",
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
    name: "handleAction",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      },
      {
        name: "totalSupply",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "userBalance",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setClaimer",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      },
      {
        name: "claimer",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setDistributionEnd",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      },
      {
        name: "reward",
        type: "address",
        internalType: "address"
      },
      {
        name: "newDistributionEnd",
        type: "uint32",
        internalType: "uint32"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setEmissionPerSecond",
    inputs: [
      {
        name: "asset",
        type: "address",
        internalType: "address"
      },
      {
        name: "rewards",
        type: "address[]",
        internalType: "address[]"
      },
      {
        name: "newEmissionsPerSecond",
        type: "uint88[]",
        internalType: "uint88[]"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setRewardOracle",
    inputs: [
      {
        name: "reward",
        type: "address",
        internalType: "address"
      },
      {
        name: "rewardOracle",
        type: "address",
        internalType: "contract IEACAggregatorProxy"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setTransferStrategy",
    inputs: [
      {
        name: "reward",
        type: "address",
        internalType: "address"
      },
      {
        name: "transferStrategy",
        type: "address",
        internalType: "contract ITransferStrategyBase"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "Accrued",
    inputs: [
      {
        name: "asset",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "reward",
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
        name: "assetIndex",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "userIndex",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "rewardsAccrued",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "AssetConfigUpdated",
    inputs: [
      {
        name: "asset",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "reward",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "oldEmission",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "newEmission",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "oldDistributionEnd",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "newDistributionEnd",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "assetIndex",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ClaimerSet",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "claimer",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "RewardOracleUpdated",
    inputs: [
      {
        name: "reward",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "rewardOracle",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "RewardsClaimed",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "reward",
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
        name: "claimer",
        type: "address",
        indexed: false,
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
    name: "TransferStrategyInstalled",
    inputs: [
      {
        name: "reward",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "transferStrategy",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IRewardsController_ABI
});
//# sourceMappingURL=IRewardsController.js.map