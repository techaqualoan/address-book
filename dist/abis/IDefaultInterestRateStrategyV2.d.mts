declare const IDefaultInterestRateStrategyV2_ABI: readonly [{
    readonly type: "function";
    readonly name: "ADDRESSES_PROVIDER";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IPoolAddressesProvider";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "MAX_BORROW_RATE";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "MAX_OPTIMAL_POINT";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "MIN_OPTIMAL_POINT";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "calculateInterestRates";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly type: "tuple";
        readonly internalType: "struct DataTypes.CalculateInterestRatesParams";
        readonly components: readonly [{
            readonly name: "unbacked";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "liquidityAdded";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "liquidityTaken";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "totalDebt";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "reserveFactor";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "reserve";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "usingVirtualBalance";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "virtualUnderlyingBalance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getBaseVariableBorrowRate";
    readonly inputs: readonly [{
        readonly name: "reserve";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getInterestRateData";
    readonly inputs: readonly [{
        readonly name: "reserve";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct IDefaultInterestRateStrategyV2.InterestRateDataRay";
        readonly components: readonly [{
            readonly name: "optimalUsageRatio";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "baseVariableBorrowRate";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "variableRateSlope1";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "variableRateSlope2";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getInterestRateDataBps";
    readonly inputs: readonly [{
        readonly name: "reserve";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly internalType: "struct IDefaultInterestRateStrategyV2.InterestRateData";
        readonly components: readonly [{
            readonly name: "optimalUsageRatio";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "baseVariableBorrowRate";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "variableRateSlope1";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "variableRateSlope2";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getMaxVariableBorrowRate";
    readonly inputs: readonly [{
        readonly name: "reserve";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getOptimalUsageRatio";
    readonly inputs: readonly [{
        readonly name: "reserve";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getVariableRateSlope1";
    readonly inputs: readonly [{
        readonly name: "reserve";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getVariableRateSlope2";
    readonly inputs: readonly [{
        readonly name: "reserve";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "setInterestRateParams";
    readonly inputs: readonly [{
        readonly name: "reserve";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "rateData";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setInterestRateParams";
    readonly inputs: readonly [{
        readonly name: "reserve";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "rateData";
        readonly type: "tuple";
        readonly internalType: "struct IDefaultInterestRateStrategyV2.InterestRateData";
        readonly components: readonly [{
            readonly name: "optimalUsageRatio";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "baseVariableBorrowRate";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "variableRateSlope1";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "variableRateSlope2";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly name: "RateDataUpdate";
    readonly inputs: readonly [{
        readonly name: "reserve";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "optimalUsageRatio";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "baseVariableBorrowRate";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "variableRateSlope1";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "variableRateSlope2";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}];

export { IDefaultInterestRateStrategyV2_ABI };
