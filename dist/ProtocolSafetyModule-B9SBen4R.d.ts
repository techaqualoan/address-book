declare const STK_AAVE = "0x4da27a545c0c5B758a6BA100e3a049001de870f5";
declare const STK_ABPT = "0xa1116930326D21fB917d5A27F1E9943A9595fb47";
declare const STK_ABPT_ORACLE = "0x209Ad99bd808221293d03827B86cC544bcA0023b";
declare const STK_ABPT_STK_AAVE_WSTETH_BPTV2_MIGRATOR = "0xecD4bd3121F9FD604ffaC631bF6d41ec12f1fafb";
declare const STK_GHO = "0x1a88Df1cFe15Af22B3c4c783D4e6F7F9e0C1885d";
declare const STK_AAVE_WSTETH_BPTV2 = "0x9eDA81C21C273a82BE9Bbc19B6A6182212068101";
declare const STK_AAVE_WSTETH_BPTV2_ORACLE = "0xADf86b537eF08591c2777E144322E8b0Ca7E82a7";
declare const CHAIN_ID = 1;

declare const ProtocolSafetyModule_CHAIN_ID: typeof CHAIN_ID;
declare const ProtocolSafetyModule_STK_AAVE: typeof STK_AAVE;
declare const ProtocolSafetyModule_STK_AAVE_WSTETH_BPTV2: typeof STK_AAVE_WSTETH_BPTV2;
declare const ProtocolSafetyModule_STK_AAVE_WSTETH_BPTV2_ORACLE: typeof STK_AAVE_WSTETH_BPTV2_ORACLE;
declare const ProtocolSafetyModule_STK_ABPT: typeof STK_ABPT;
declare const ProtocolSafetyModule_STK_ABPT_ORACLE: typeof STK_ABPT_ORACLE;
declare const ProtocolSafetyModule_STK_ABPT_STK_AAVE_WSTETH_BPTV2_MIGRATOR: typeof STK_ABPT_STK_AAVE_WSTETH_BPTV2_MIGRATOR;
declare const ProtocolSafetyModule_STK_GHO: typeof STK_GHO;
declare namespace ProtocolSafetyModule {
  export { ProtocolSafetyModule_CHAIN_ID as CHAIN_ID, ProtocolSafetyModule_STK_AAVE as STK_AAVE, ProtocolSafetyModule_STK_AAVE_WSTETH_BPTV2 as STK_AAVE_WSTETH_BPTV2, ProtocolSafetyModule_STK_AAVE_WSTETH_BPTV2_ORACLE as STK_AAVE_WSTETH_BPTV2_ORACLE, ProtocolSafetyModule_STK_ABPT as STK_ABPT, ProtocolSafetyModule_STK_ABPT_ORACLE as STK_ABPT_ORACLE, ProtocolSafetyModule_STK_ABPT_STK_AAVE_WSTETH_BPTV2_MIGRATOR as STK_ABPT_STK_AAVE_WSTETH_BPTV2_MIGRATOR, ProtocolSafetyModule_STK_GHO as STK_GHO };
}

export { CHAIN_ID as C, ProtocolSafetyModule as P, STK_AAVE as S, STK_ABPT as a, STK_ABPT_ORACLE as b, STK_ABPT_STK_AAVE_WSTETH_BPTV2_MIGRATOR as c, STK_GHO as d, STK_AAVE_WSTETH_BPTV2 as e, STK_AAVE_WSTETH_BPTV2_ORACLE as f };
