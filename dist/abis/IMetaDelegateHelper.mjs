// src/ts/abis/IMetaDelegateHelper.ts
var IMetaDelegateHelper_ABI = [
  {
    type: "function",
    name: "batchMetaDelegate",
    inputs: [
      {
        name: "delegateParams",
        type: "tuple[]",
        internalType: "struct IMetaDelegateHelper.MetaDelegateParams[]",
        components: [
          {
            name: "underlyingAsset",
            type: "address",
            internalType: "contract IGovernancePowerDelegationToken"
          },
          {
            name: "delegationType",
            type: "uint8",
            internalType: "enum IMetaDelegateHelper.DelegationType"
          },
          {
            name: "delegator",
            type: "address",
            internalType: "address"
          },
          {
            name: "delegatee",
            type: "address",
            internalType: "address"
          },
          {
            name: "deadline",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "v",
            type: "uint8",
            internalType: "uint8"
          },
          {
            name: "r",
            type: "bytes32",
            internalType: "bytes32"
          },
          {
            name: "s",
            type: "bytes32",
            internalType: "bytes32"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  }
];
export {
  IMetaDelegateHelper_ABI
};
//# sourceMappingURL=IMetaDelegateHelper.mjs.map