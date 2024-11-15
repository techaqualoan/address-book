declare const STK_AAVE = "0x4da27a545c0c5B758a6BA100e3a049001de870f5";
declare const CHAIN_ID = 1;

declare const ProtocolSafetyModule_CHAIN_ID: typeof CHAIN_ID;
declare const ProtocolSafetyModule_STK_AAVE: typeof STK_AAVE;
declare namespace ProtocolSafetyModule {
  export { ProtocolSafetyModule_CHAIN_ID as CHAIN_ID, ProtocolSafetyModule_STK_AAVE as STK_AAVE };
}

export { CHAIN_ID as C, ProtocolSafetyModule as P, STK_AAVE as S };
