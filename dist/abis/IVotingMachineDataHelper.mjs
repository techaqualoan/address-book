// src/ts/abis/IVotingMachineDataHelper.ts
var IVotingMachineDataHelper_ABI = [
  {
    type: "function",
    name: "getProposalsData",
    inputs: [
      {
        name: "votingMachine",
        type: "address",
        internalType: "contract IVotingMachineWithProofs"
      },
      {
        name: "initialProposals",
        type: "tuple[]",
        internalType: "struct IVotingMachineDataHelper.InitialProposal[]",
        components: [
          {
            name: "id",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "snapshotBlockHash",
            type: "bytes32",
            internalType: "bytes32"
          }
        ]
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
        type: "tuple[]",
        internalType: "struct IVotingMachineDataHelper.Proposal[]",
        components: [
          {
            name: "proposalData",
            type: "tuple",
            internalType: "struct IVotingMachineWithProofs.ProposalWithoutVotes",
            components: [
              {
                name: "id",
                type: "uint256",
                internalType: "uint256"
              },
              {
                name: "sentToGovernance",
                type: "bool",
                internalType: "bool"
              },
              {
                name: "startTime",
                type: "uint40",
                internalType: "uint40"
              },
              {
                name: "endTime",
                type: "uint40",
                internalType: "uint40"
              },
              {
                name: "votingClosedAndSentTimestamp",
                type: "uint40",
                internalType: "uint40"
              },
              {
                name: "forVotes",
                type: "uint128",
                internalType: "uint128"
              },
              {
                name: "againstVotes",
                type: "uint128",
                internalType: "uint128"
              },
              {
                name: "creationBlockNumber",
                type: "uint256",
                internalType: "uint256"
              },
              {
                name: "votingClosedAndSentBlockNumber",
                type: "uint256",
                internalType: "uint256"
              }
            ]
          },
          {
            name: "votedInfo",
            type: "tuple",
            internalType: "struct IVotingMachineDataHelper.VotedInfo",
            components: [
              {
                name: "support",
                type: "bool",
                internalType: "bool"
              },
              {
                name: "votingPower",
                type: "uint248",
                internalType: "uint248"
              }
            ]
          },
          {
            name: "strategy",
            type: "address",
            internalType: "contract IVotingStrategy"
          },
          {
            name: "dataWarehouse",
            type: "address",
            internalType: "contract IDataWarehouse"
          },
          {
            name: "votingAssets",
            type: "address[]",
            internalType: "address[]"
          },
          {
            name: "hasRequiredRoots",
            type: "bool",
            internalType: "bool"
          },
          {
            name: "voteConfig",
            type: "tuple",
            internalType: "struct IVotingMachineWithProofs.ProposalVoteConfiguration",
            components: [
              {
                name: "votingDuration",
                type: "uint24",
                internalType: "uint24"
              },
              {
                name: "l1ProposalBlockHash",
                type: "bytes32",
                internalType: "bytes32"
              }
            ]
          },
          {
            name: "state",
            type: "uint8",
            internalType: "enum IVotingMachineWithProofs.ProposalState"
          }
        ]
      }
    ],
    stateMutability: "view"
  }
];
export {
  IVotingMachineDataHelper_ABI
};
//# sourceMappingURL=IVotingMachineDataHelper.mjs.map