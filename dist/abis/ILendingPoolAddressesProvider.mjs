// src/ts/abis/ILendingPoolAddressesProvider.ts
var ILendingPoolAddressesProvider_ABI = [
  {
    type: "function",
    name: "getAddress",
    inputs: [
      {
        name: "id",
        type: "bytes32",
        internalType: "bytes32"
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
    name: "getEmergencyAdmin",
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
    name: "getLendingPool",
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
    name: "getLendingPoolCollateralManager",
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
    name: "getLendingPoolConfigurator",
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
    name: "getLendingRateOracle",
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
    name: "getMarketId",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getPoolAdmin",
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
    name: "getPriceOracle",
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
    name: "setAddress",
    inputs: [
      {
        name: "id",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "newAddress",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setAddressAsProxy",
    inputs: [
      {
        name: "id",
        type: "bytes32",
        internalType: "bytes32"
      },
      {
        name: "impl",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setEmergencyAdmin",
    inputs: [
      {
        name: "admin",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setLendingPoolCollateralManager",
    inputs: [
      {
        name: "manager",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setLendingPoolConfiguratorImpl",
    inputs: [
      {
        name: "configurator",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setLendingPoolImpl",
    inputs: [
      {
        name: "pool",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setLendingRateOracle",
    inputs: [
      {
        name: "lendingRateOracle",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setMarketId",
    inputs: [
      {
        name: "marketId",
        type: "string",
        internalType: "string"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setPoolAdmin",
    inputs: [
      {
        name: "admin",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setPriceOracle",
    inputs: [
      {
        name: "priceOracle",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "AddressSet",
    inputs: [
      {
        name: "id",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32"
      },
      {
        name: "newAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "hasProxy",
        type: "bool",
        indexed: false,
        internalType: "bool"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ConfigurationAdminUpdated",
    inputs: [
      {
        name: "newAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "EmergencyAdminUpdated",
    inputs: [
      {
        name: "newAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "LendingPoolCollateralManagerUpdated",
    inputs: [
      {
        name: "newAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "LendingPoolConfiguratorUpdated",
    inputs: [
      {
        name: "newAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "LendingPoolUpdated",
    inputs: [
      {
        name: "newAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "LendingRateOracleUpdated",
    inputs: [
      {
        name: "newAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "MarketIdSet",
    inputs: [
      {
        name: "newMarketId",
        type: "string",
        indexed: false,
        internalType: "string"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "PriceOracleUpdated",
    inputs: [
      {
        name: "newAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProxyCreated",
    inputs: [
      {
        name: "id",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32"
      },
      {
        name: "newAddress",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  }
];
export {
  ILendingPoolAddressesProvider_ABI
};
//# sourceMappingURL=ILendingPoolAddressesProvider.mjs.map