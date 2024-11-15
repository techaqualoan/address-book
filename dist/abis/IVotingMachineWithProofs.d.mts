declare const IVotingMachineWithProofs_ABI: readonly [{
    readonly type: "function";
    readonly name: "BLOCKS_TO_FINALITY";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "DOMAIN_TYPEHASH";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "NAME";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
        readonly internalType: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "VOTE_SUBMITTED_TYPEHASH";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "closeAndSendVote";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "createVote";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "getBridgedVoteInfo";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "voter";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct IVotingMachineWithProofs.BridgedVote";
        readonly components: readonly [{
            readonly name: "support";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "votingTokens";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getDataWarehouse";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IDataWarehouse";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getProposalById";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct IVotingMachineWithProofs.ProposalWithoutVotes";
        readonly components: readonly [{
            readonly name: "id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "strategy";
            readonly type: "address";
            readonly internalType: "contract IVotingStrategy";
        }, {
            readonly name: "sentToGovernance";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "l1BlockHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "startTime";
            readonly type: "uint40";
            readonly internalType: "uint40";
        }, {
            readonly name: "endTime";
            readonly type: "uint40";
            readonly internalType: "uint40";
        }, {
            readonly name: "votingClosedAndSentTimestamp";
            readonly type: "uint40";
            readonly internalType: "uint40";
        }, {
            readonly name: "forVotes";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "againstVotes";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "creationBlockNumber";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "votingClosedAndSentBlockNumber";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getProposalState";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint8";
        readonly internalType: "enum IVotingMachineWithProofs.ProposalState";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getProposalVoteConfiguration";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct IVotingMachineWithProofs.ProposalVoteConfiguration";
        readonly components: readonly [{
            readonly name: "votingDuration";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }, {
            readonly name: "l1ProposalBlockHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getProposalsVoteConfigurationIds";
    readonly inputs: readonly [{
        readonly name: "skip";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "size";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256[]";
        readonly internalType: "uint256[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getUserProposalVote";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct IVotingMachineWithProofs.Vote";
        readonly components: readonly [{
            readonly name: "support";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "votingPower";
            readonly type: "uint248";
            readonly internalType: "uint248";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getVotingStrategy";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IVotingStrategy";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "setDataWarehouse";
    readonly inputs: readonly [{
        readonly name: "newDataWarehouse";
        readonly type: "address";
        readonly internalType: "contract IDataWarehouse";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setVotingStrategy";
    readonly inputs: readonly [{
        readonly name: "newVotingStrategy";
        readonly type: "address";
        readonly internalType: "contract IVotingStrategy";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "settleVoteFromPortal";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "voter";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "votingBalanceProofs";
        readonly type: "tuple[]";
        readonly internalType: "struct IVotingMachineWithProofs.VotingBalanceProof[]";
        readonly components: readonly [{
            readonly name: "underlyingAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "slot";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "proof";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "submitVote";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "support";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "votingBalanceProofs";
        readonly type: "tuple[]";
        readonly internalType: "struct IVotingMachineWithProofs.VotingBalanceProof[]";
        readonly components: readonly [{
            readonly name: "underlyingAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "slot";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "proof";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "submitVoteBySignature";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "support";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "votingBalanceProofs";
        readonly type: "tuple[]";
        readonly internalType: "struct IVotingMachineWithProofs.VotingBalanceProof[]";
        readonly components: readonly [{
            readonly name: "underlyingAsset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "slot";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "proof";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly name: "v";
        readonly type: "uint8";
        readonly internalType: "uint8";
    }, {
        readonly name: "r";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "s";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly name: "DataWarehouseUpdated";
    readonly inputs: readonly [{
        readonly name: "newDataWarehouse";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ProposalResultsSent";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "forVotes";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "againstVotes";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ProposalVoteConfigurationBridged";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "blockHash";
        readonly type: "bytes32";
        readonly indexed: true;
        readonly internalType: "bytes32";
    }, {
        readonly name: "votingDuration";
        readonly type: "uint24";
        readonly indexed: false;
        readonly internalType: "uint24";
    }, {
        readonly name: "voteCreated";
        readonly type: "bool";
        readonly indexed: true;
        readonly internalType: "bool";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ProposalVoteCreated";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "l1BlockHash";
        readonly type: "bytes32";
        readonly indexed: true;
        readonly internalType: "bytes32";
    }, {
        readonly name: "startTime";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "endTime";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "strategy";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "VoteBridged";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "voter";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "support";
        readonly type: "bool";
        readonly indexed: true;
        readonly internalType: "bool";
    }, {
        readonly name: "votingTokens";
        readonly type: "address[]";
        readonly indexed: false;
        readonly internalType: "address[]";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "VoteEmitted";
    readonly inputs: readonly [{
        readonly name: "proposalId";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }, {
        readonly name: "voter";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "support";
        readonly type: "bool";
        readonly indexed: true;
        readonly internalType: "bool";
    }, {
        readonly name: "votingPower";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "VotingStrategyUpdated";
    readonly inputs: readonly [{
        readonly name: "newVotingStrategy";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}];

export { IVotingMachineWithProofs_ABI };
