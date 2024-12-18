declare const POOL_ADDRESSES_PROVIDER = "0x7c8D27Bc0581033DdC33D26470B212Ee20c5327b";
declare const POOL = "0x5aebD160b702fb4efbaDcedf55673a96366fa594";
declare const POOL_CONFIGURATOR = "0xd1a7c962B1ec936ed37d6065142AFf78e24978bE";
declare const ORACLE = "0xE27E5C9102922b41E3fF2541012f41BED7A2F16a";
declare const ACL_ADMIN = "0x084126414188735846e4f1851cB3d01D829Fa15b";
declare const ACL_MANAGER = "0xee6334FAE1C6a64BCA58b2B15Fe0C7a2705E8f05";
declare const AAVE_PROTOCOL_DATA_PROVIDER = "0x4719499CD6832EB47d9073884579d66f8bb43407";
declare const POOL_IMPL = "0xdD666Dbcb0635E06806C6C19Fc9442cb0F202308";
declare const POOL_CONFIGURATOR_IMPL = "0x61b3506fAe8726d8de1890abD2b6abB3006A2013";
declare const DEFAULT_INCENTIVES_CONTROLLER = "0xD1AC9db961bF41E52847DE85E811c26c63f59bB6";
declare const EMISSION_MANAGER = "0x71cE5b1e07483cc59FFA329828dec8a98a3d2E1D";
declare const COLLECTOR = "0x5577B156C3ad7beC2A11BBe29009B330ac5C9bF5";
declare const DEFAULT_A_TOKEN_IMPL_REV_1 = "0xf6fAb4510DF36E263F2b451054f427c6C128b41D";
declare const DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 = "0xaCC554dd20DEBcdA9d5633a0a664957860eBF3cF";
declare const CAPS_PLUS_RISK_STEWARD = "0x82dcCF206Ae2Ab46E2099e663F70DeE77caE7778";
declare const RISK_STEWARD = "0x7C7143f4bE189928A6a98D8686c5e84c893c59c7";
declare const FREEZING_STEWARD = "0x2eE68ACb6A1319de1b49DC139894644E424fefD6";
declare const DEBT_SWAP_ADAPTER = "0xd7852E139a7097E119623de0751AE53a61efb442";
declare const CONFIG_ENGINE = "0xA8e351C7Ab1b75A2134A418701919c462932DF79";
declare const POOL_ADDRESSES_PROVIDER_REGISTRY = "0xC172E77E96E06b7243f62996D218A9e0b013a478";
declare const STATIC_A_TOKEN_FACTORY = "0x411D79b8cC43384FDE66CaBf9b6a17180c842511";
declare const REPAY_WITH_COLLATERAL_ADAPTER = "0xa7aD3209558042AE0E2D8ec326c7D24b3c13FeA7";
declare const SWAP_COLLATERAL_ADAPTER = "0xad150b97be2E19FCae53f98938eEEFb2B400be00";
declare const UI_INCENTIVE_DATA_PROVIDER = "0x8D43bd5be0eFA0496F5C797ee2196b5C791717e0";
declare const UI_POOL_DATA_PROVIDER = "0x36F9bc47E06Cd4eEAD1E740c0c44E74895a459D5";
declare const WALLET_BALANCE_PROVIDER = "0x4Fdb06226d0F39000CC6D4c2A8cdFbD1513b8B94";
declare const WETH_GATEWAY = "0xf6311E010C17e10f1258E5e67346d9f615D467f1";
declare const WITHDRAW_SWAP_ADAPTER = "0xbd546A644409e9259C489Dae318A5F3291CB1567";
declare const DELEGATION_AWARE_A_TOKEN_IMPL_REV_1 = "0xc4D386d294f9b08AF4DC102a6E43dDd3Dd566df8";
declare const CHAIN_ID = 1;
declare const ASSETS: {
    readonly DAI: {
        readonly decimals: 18;
        readonly id: 0;
        readonly UNDERLYING: "0x6B175474E89094C44Da98b954EedeAC495271d0F";
        readonly A_TOKEN: "0x15DD569996679a766E6f96f97Bf2f94336f85906";
        readonly V_TOKEN: "0x8E9359Ee5eF03be33943DBf44C8efA35586d5b25";
        readonly INTEREST_RATE_STRATEGY: "0x5F64941e9C7433AA778D057Ad3aB01102709dA9F";
        readonly ORACLE: "0xAed0c38402a5d19df6E4c03F4E2DceD6e29c1ee9";
        readonly STATIC_A_TOKEN: "0xaf270C38fF895EA3f95Ed488CEACe2386F038249";
    };
    readonly LINK: {
        readonly decimals: 18;
        readonly id: 1;
        readonly UNDERLYING: "0x514910771AF9Ca656af840dff83E8264EcF986CA";
        readonly A_TOKEN: "0x4a6901617a028a29c421DE4a995b0147030DcA0c";
        readonly V_TOKEN: "0x4E531932FEf0DE2BC9514C20654cf10D686B9598";
        readonly INTEREST_RATE_STRATEGY: "0x5971A1b65f2bB666a2ebE697c342b7eFD6f7FE6C";
        readonly ORACLE: "0x2c1d072e956AFFC0D435Cb7AC38EF18d24d9127c";
        readonly STATIC_A_TOKEN: "0x57bd8C73838d1781b4f6E0d5Cf89eb676488d3df";
    };
    readonly USDC: {
        readonly decimals: 6;
        readonly id: 2;
        readonly UNDERLYING: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
        readonly A_TOKEN: "0xBF559FF3ED3e6E669c288D76a914100695AF69F4";
        readonly V_TOKEN: "0x3E282F120DBC78839EC0A1084810c33dF201D33D";
        readonly INTEREST_RATE_STRATEGY: "0x4F67001f5AC4e83373C68F80111BD266f66eB027";
        readonly ORACLE: "0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6";
        readonly STATIC_A_TOKEN: "0x73edDFa87C71ADdC275c2b9890f5c3a8480bC9E6";
    };
    readonly WBTC: {
        readonly decimals: 8;
        readonly id: 3;
        readonly UNDERLYING: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
        readonly A_TOKEN: "0xf0684fb9539D0268BdFc47050f24153921FD7ebb";
        readonly V_TOKEN: "0xb0c9998260F7d72d79fEC7A4AE775031c31090D1";
        readonly INTEREST_RATE_STRATEGY: "0x5971A1b65f2bB666a2ebE697c342b7eFD6f7FE6C";
        readonly ORACLE: "0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c";
        readonly STATIC_A_TOKEN: "0xB07E357cc262E92eee03D8B81464D596B258eA7a";
    };
    readonly WETH: {
        readonly decimals: 18;
        readonly id: 4;
        readonly UNDERLYING: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
        readonly A_TOKEN: "0x8C829396A0Adc89c17274c0AfC7dA705D7E4e1D9";
        readonly V_TOKEN: "0x30Ed3C528f824D894eE060a426D7Bc48CC55d863";
        readonly INTEREST_RATE_STRATEGY: "0x5971A1b65f2bB666a2ebE697c342b7eFD6f7FE6C";
        readonly ORACLE: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419";
        readonly STATIC_A_TOKEN: "0x252231882FB38481497f3C767469106297c8d93b";
    };
    readonly USDT: {
        readonly decimals: 6;
        readonly id: 5;
        readonly UNDERLYING: "0xdAC17F958D2ee523a2206206994597C13D831ec7";
        readonly A_TOKEN: "0xBE4399DaB4fF2E7B2eBE50a45CC330FF4Bc95f64";
        readonly V_TOKEN: "0xd7cb4dF4df26DCD6b70f710194a2BF13ebf2c020";
        readonly INTEREST_RATE_STRATEGY: "0x4F67001f5AC4e83373C68F80111BD266f66eB027";
        readonly ORACLE: "0x3E7d1eAB13ad0104d2750B8863b489D65364e32D";
        readonly STATIC_A_TOKEN: "0x862c57d48becB45583AEbA3f489696D22466Ca1b";
    };
    readonly AAVE: {
        readonly decimals: 18;
        readonly id: 6;
        readonly UNDERLYING: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9";
        readonly A_TOKEN: "0x0e4dD12D36dBc5A251057AdB7bBC3a6C44d36a3a";
        readonly V_TOKEN: "0x4450FC0eB292CaD008Cb7CBC7d3d2dfC5ACEFf99";
        readonly INTEREST_RATE_STRATEGY: "0x5971A1b65f2bB666a2ebE697c342b7eFD6f7FE6C";
        readonly ORACLE: "0x547a514d5e3769680Ce22B2361c10Ea13619e8a9";
        readonly STATIC_A_TOKEN: "0xFEB859A50f92C6D5ad7C9eF7C2c060D164B3280f";
    };
};

declare const ProtocolV3Ethereum_AAVE_PROTOCOL_DATA_PROVIDER: typeof AAVE_PROTOCOL_DATA_PROVIDER;
declare const ProtocolV3Ethereum_ACL_ADMIN: typeof ACL_ADMIN;
declare const ProtocolV3Ethereum_ACL_MANAGER: typeof ACL_MANAGER;
declare const ProtocolV3Ethereum_ASSETS: typeof ASSETS;
declare const ProtocolV3Ethereum_CAPS_PLUS_RISK_STEWARD: typeof CAPS_PLUS_RISK_STEWARD;
declare const ProtocolV3Ethereum_CHAIN_ID: typeof CHAIN_ID;
declare const ProtocolV3Ethereum_COLLECTOR: typeof COLLECTOR;
declare const ProtocolV3Ethereum_CONFIG_ENGINE: typeof CONFIG_ENGINE;
declare const ProtocolV3Ethereum_DEBT_SWAP_ADAPTER: typeof DEBT_SWAP_ADAPTER;
declare const ProtocolV3Ethereum_DEFAULT_A_TOKEN_IMPL_REV_1: typeof DEFAULT_A_TOKEN_IMPL_REV_1;
declare const ProtocolV3Ethereum_DEFAULT_INCENTIVES_CONTROLLER: typeof DEFAULT_INCENTIVES_CONTROLLER;
declare const ProtocolV3Ethereum_DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1: typeof DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1;
declare const ProtocolV3Ethereum_DELEGATION_AWARE_A_TOKEN_IMPL_REV_1: typeof DELEGATION_AWARE_A_TOKEN_IMPL_REV_1;
declare const ProtocolV3Ethereum_EMISSION_MANAGER: typeof EMISSION_MANAGER;
declare const ProtocolV3Ethereum_FREEZING_STEWARD: typeof FREEZING_STEWARD;
declare const ProtocolV3Ethereum_ORACLE: typeof ORACLE;
declare const ProtocolV3Ethereum_POOL: typeof POOL;
declare const ProtocolV3Ethereum_POOL_ADDRESSES_PROVIDER: typeof POOL_ADDRESSES_PROVIDER;
declare const ProtocolV3Ethereum_POOL_ADDRESSES_PROVIDER_REGISTRY: typeof POOL_ADDRESSES_PROVIDER_REGISTRY;
declare const ProtocolV3Ethereum_POOL_CONFIGURATOR: typeof POOL_CONFIGURATOR;
declare const ProtocolV3Ethereum_POOL_CONFIGURATOR_IMPL: typeof POOL_CONFIGURATOR_IMPL;
declare const ProtocolV3Ethereum_POOL_IMPL: typeof POOL_IMPL;
declare const ProtocolV3Ethereum_REPAY_WITH_COLLATERAL_ADAPTER: typeof REPAY_WITH_COLLATERAL_ADAPTER;
declare const ProtocolV3Ethereum_RISK_STEWARD: typeof RISK_STEWARD;
declare const ProtocolV3Ethereum_STATIC_A_TOKEN_FACTORY: typeof STATIC_A_TOKEN_FACTORY;
declare const ProtocolV3Ethereum_SWAP_COLLATERAL_ADAPTER: typeof SWAP_COLLATERAL_ADAPTER;
declare const ProtocolV3Ethereum_UI_INCENTIVE_DATA_PROVIDER: typeof UI_INCENTIVE_DATA_PROVIDER;
declare const ProtocolV3Ethereum_UI_POOL_DATA_PROVIDER: typeof UI_POOL_DATA_PROVIDER;
declare const ProtocolV3Ethereum_WALLET_BALANCE_PROVIDER: typeof WALLET_BALANCE_PROVIDER;
declare const ProtocolV3Ethereum_WETH_GATEWAY: typeof WETH_GATEWAY;
declare const ProtocolV3Ethereum_WITHDRAW_SWAP_ADAPTER: typeof WITHDRAW_SWAP_ADAPTER;
declare namespace ProtocolV3Ethereum {
  export { ProtocolV3Ethereum_AAVE_PROTOCOL_DATA_PROVIDER as AAVE_PROTOCOL_DATA_PROVIDER, ProtocolV3Ethereum_ACL_ADMIN as ACL_ADMIN, ProtocolV3Ethereum_ACL_MANAGER as ACL_MANAGER, ProtocolV3Ethereum_ASSETS as ASSETS, ProtocolV3Ethereum_CAPS_PLUS_RISK_STEWARD as CAPS_PLUS_RISK_STEWARD, ProtocolV3Ethereum_CHAIN_ID as CHAIN_ID, ProtocolV3Ethereum_COLLECTOR as COLLECTOR, ProtocolV3Ethereum_CONFIG_ENGINE as CONFIG_ENGINE, ProtocolV3Ethereum_DEBT_SWAP_ADAPTER as DEBT_SWAP_ADAPTER, ProtocolV3Ethereum_DEFAULT_A_TOKEN_IMPL_REV_1 as DEFAULT_A_TOKEN_IMPL_REV_1, ProtocolV3Ethereum_DEFAULT_INCENTIVES_CONTROLLER as DEFAULT_INCENTIVES_CONTROLLER, ProtocolV3Ethereum_DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 as DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1, ProtocolV3Ethereum_DELEGATION_AWARE_A_TOKEN_IMPL_REV_1 as DELEGATION_AWARE_A_TOKEN_IMPL_REV_1, ProtocolV3Ethereum_EMISSION_MANAGER as EMISSION_MANAGER, ProtocolV3Ethereum_FREEZING_STEWARD as FREEZING_STEWARD, ProtocolV3Ethereum_ORACLE as ORACLE, ProtocolV3Ethereum_POOL as POOL, ProtocolV3Ethereum_POOL_ADDRESSES_PROVIDER as POOL_ADDRESSES_PROVIDER, ProtocolV3Ethereum_POOL_ADDRESSES_PROVIDER_REGISTRY as POOL_ADDRESSES_PROVIDER_REGISTRY, ProtocolV3Ethereum_POOL_CONFIGURATOR as POOL_CONFIGURATOR, ProtocolV3Ethereum_POOL_CONFIGURATOR_IMPL as POOL_CONFIGURATOR_IMPL, ProtocolV3Ethereum_POOL_IMPL as POOL_IMPL, ProtocolV3Ethereum_REPAY_WITH_COLLATERAL_ADAPTER as REPAY_WITH_COLLATERAL_ADAPTER, ProtocolV3Ethereum_RISK_STEWARD as RISK_STEWARD, ProtocolV3Ethereum_STATIC_A_TOKEN_FACTORY as STATIC_A_TOKEN_FACTORY, ProtocolV3Ethereum_SWAP_COLLATERAL_ADAPTER as SWAP_COLLATERAL_ADAPTER, ProtocolV3Ethereum_UI_INCENTIVE_DATA_PROVIDER as UI_INCENTIVE_DATA_PROVIDER, ProtocolV3Ethereum_UI_POOL_DATA_PROVIDER as UI_POOL_DATA_PROVIDER, ProtocolV3Ethereum_WALLET_BALANCE_PROVIDER as WALLET_BALANCE_PROVIDER, ProtocolV3Ethereum_WETH_GATEWAY as WETH_GATEWAY, ProtocolV3Ethereum_WITHDRAW_SWAP_ADAPTER as WITHDRAW_SWAP_ADAPTER };
}

export { ACL_ADMIN as A, COLLECTOR as C, DEFAULT_INCENTIVES_CONTROLLER as D, EMISSION_MANAGER as E, FREEZING_STEWARD as F, ORACLE as O, ProtocolV3Ethereum as P, RISK_STEWARD as R, STATIC_A_TOKEN_FACTORY as S, UI_INCENTIVE_DATA_PROVIDER as U, WALLET_BALANCE_PROVIDER as W, POOL_ADDRESSES_PROVIDER as a, POOL as b, POOL_CONFIGURATOR as c, ACL_MANAGER as d, AAVE_PROTOCOL_DATA_PROVIDER as e, POOL_IMPL as f, POOL_CONFIGURATOR_IMPL as g, DEFAULT_A_TOKEN_IMPL_REV_1 as h, DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 as i, CAPS_PLUS_RISK_STEWARD as j, DEBT_SWAP_ADAPTER as k, CONFIG_ENGINE as l, POOL_ADDRESSES_PROVIDER_REGISTRY as m, REPAY_WITH_COLLATERAL_ADAPTER as n, SWAP_COLLATERAL_ADAPTER as o, UI_POOL_DATA_PROVIDER as p, WETH_GATEWAY as q, WITHDRAW_SWAP_ADAPTER as r, DELEGATION_AWARE_A_TOKEN_IMPL_REV_1 as s, CHAIN_ID as t, ASSETS as u };
