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

// src/ts/abis/IVotingMachineWithProofs.ts
var IVotingMachineWithProofs_exports = {};
__export(IVotingMachineWithProofs_exports, {
  IVotingMachineWithProofs_ABI: () => IVotingMachineWithProofs_ABI
});
module.exports = __toCommonJS(IVotingMachineWithProofs_exports);
var IVotingMachineWithProofs_ABI = [
  {
    type: "function",
    name: "BLOCKS_TO_FINALITY",
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
    name: "DOMAIN_TYPEHASH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "NAME",
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
    name: "VOTE_SUBMITTED_TYPEHASH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "closeAndSendVote",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "createVote",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
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
    name: "getBridgedVoteInfo",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "voter",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IVotingMachineWithProofs.BridgedVote",
        components: [
          {
            name: "support",
            type: "bool",
            internalType: "bool"
          },
          {
            name: "votingTokens",
            type: "address[]",
            internalType: "address[]"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getDataWarehouse",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IDataWarehouse"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getProposalById",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IVotingMachineWithProofs.ProposalWithoutVotes",
        components: [
          {
            name: "id",
            type: "uint256",
            internalType: "uint256"
          },
          {
            name: "strategy",
            type: "address",
            internalType: "contract IVotingStrategy"
          },
          {
            name: "sentToGovernance",
            type: "bool",
            internalType: "bool"
          },
          {
            name: "l1BlockHash",
            type: "bytes32",
            internalType: "bytes32"
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
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getProposalState",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "enum IVotingMachineWithProofs.ProposalState"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getProposalVoteConfiguration",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
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
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getProposalsVoteConfigurationIds",
    inputs: [
      {
        name: "skip",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "size",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
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
    name: "getUserProposalVote",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address"
      },
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IVotingMachineWithProofs.Vote",
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
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getVotingStrategy",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IVotingStrategy"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "setDataWarehouse",
    inputs: [
      {
        name: "newDataWarehouse",
        type: "address",
        internalType: "contract IDataWarehouse"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setVotingStrategy",
    inputs: [
      {
        name: "newVotingStrategy",
        type: "address",
        internalType: "contract IVotingStrategy"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "settleVoteFromPortal",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "voter",
        type: "address",
        internalType: "address"
      },
      {
        name: "votingBalanceProofs",
        type: "tuple[]",
        internalType: "struct IVotingMachineWithProofs.VotingBalanceProof[]",
        components: [
          {
            name: "underlyingAsset",
            type: "address",
            internalType: "address"
          },
          {
            name: "slot",
            type: "uint128",
            internalType: "uint128"
          },
          {
            name: "proof",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "submitVote",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "support",
        type: "bool",
        internalType: "bool"
      },
      {
        name: "votingBalanceProofs",
        type: "tuple[]",
        internalType: "struct IVotingMachineWithProofs.VotingBalanceProof[]",
        components: [
          {
            name: "underlyingAsset",
            type: "address",
            internalType: "address"
          },
          {
            name: "slot",
            type: "uint128",
            internalType: "uint128"
          },
          {
            name: "proof",
            type: "bytes",
            internalType: "bytes"
          }
        ]
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "submitVoteBySignature",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "support",
        type: "bool",
        internalType: "bool"
      },
      {
        name: "votingBalanceProofs",
        type: "tuple[]",
        internalType: "struct IVotingMachineWithProofs.VotingBalanceProof[]",
        components: [
          {
            name: "underlyingAsset",
            type: "address",
            internalType: "address"
          },
          {
            name: "slot",
            type: "uint128",
            internalType: "uint128"
          },
          {
            name: "proof",
            type: "bytes",
            internalType: "bytes"
          }
        ]
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
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "DataWarehouseUpdated",
    inputs: [
      {
        name: "newDataWarehouse",
        type: "address",
        indexed: true,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProposalResultsSent",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "forVotes",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "againstVotes",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProposalVoteConfigurationBridged",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "blockHash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32"
      },
      {
        name: "votingDuration",
        type: "uint24",
        indexed: false,
        internalType: "uint24"
      },
      {
        name: "voteCreated",
        type: "bool",
        indexed: true,
        internalType: "bool"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "ProposalVoteCreated",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "l1BlockHash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32"
      },
      {
        name: "startTime",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "endTime",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "strategy",
        type: "address",
        indexed: false,
        internalType: "address"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "VoteBridged",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "voter",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "support",
        type: "bool",
        indexed: true,
        internalType: "bool"
      },
      {
        name: "votingTokens",
        type: "address[]",
        indexed: false,
        internalType: "address[]"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "VoteEmitted",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      },
      {
        name: "voter",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "support",
        type: "bool",
        indexed: true,
        internalType: "bool"
      },
      {
        name: "votingPower",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "VotingStrategyUpdated",
    inputs: [
      {
        name: "newVotingStrategy",
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
  IVotingMachineWithProofs_ABI
});
//# sourceMappingURL=IVotingMachineWithProofs.js.map