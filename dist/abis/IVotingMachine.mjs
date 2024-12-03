// src/ts/abis/IVotingMachine.ts
var IVotingMachine_ABI = [
  {
    type: "function",
    name: "DATA_WAREHOUSE",
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
    name: "DOMAIN_SEPARATOR",
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
    name: "GOVERNANCE",
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
    name: "REPRESENTATIVES_SLOT",
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
    name: "VOTE_SUBMITTED_BY_REPRESENTATIVE_TYPEHASH",
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
    name: "VOTING_ASSET_WITH_SLOT_RAW",
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
    name: "VOTING_ASSET_WITH_SLOT_TYPEHASH",
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
    name: "VOTING_STRATEGY",
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
        internalType: "struct IVotingMachine.ProposalWithoutVotes",
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
        internalType: "enum IVotingMachine.ProposalState"
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
        internalType: "struct IVotingMachine.ProposalVoteConfiguration",
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
        internalType: "struct IVotingMachine.Vote",
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
    name: "startProposalVote",
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
        internalType: "struct IVotingMachine.VotingBalanceProof[]",
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
    name: "submitVoteAsRepresentative",
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
        name: "voter",
        type: "address",
        internalType: "address"
      },
      {
        name: "proofOfRepresentation",
        type: "bytes",
        internalType: "bytes"
      },
      {
        name: "votingBalanceProofs",
        type: "tuple[]",
        internalType: "struct IVotingMachine.VotingBalanceProof[]",
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
    name: "submitVoteAsRepresentativeBySignature",
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
        name: "representative",
        type: "address",
        internalType: "address"
      },
      {
        name: "support",
        type: "bool",
        internalType: "bool"
      },
      {
        name: "proofOfRepresentation",
        type: "bytes",
        internalType: "bytes"
      },
      {
        name: "votingBalanceProofs",
        type: "tuple[]",
        internalType: "struct IVotingMachine.VotingBalanceProof[]",
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
        name: "signatureParams",
        type: "tuple",
        internalType: "struct IVotingMachine.SignatureParams",
        components: [
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
        name: "voter",
        type: "address",
        internalType: "address"
      },
      {
        name: "support",
        type: "bool",
        internalType: "bool"
      },
      {
        name: "votingBalanceProofs",
        type: "tuple[]",
        internalType: "struct IVotingMachine.VotingBalanceProof[]",
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
    name: "ProposalVoteStarted",
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
  }
];
export {
  IVotingMachine_ABI
};
//# sourceMappingURL=IVotingMachine.mjs.map