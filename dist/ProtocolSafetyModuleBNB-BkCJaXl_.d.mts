declare const STK_AAVE = "0x4da27a545c0c5B758a6BA100e3a049001de870f5";
declare const CHAIN_ID = 56;

declare const ProtocolSafetyModuleBNB_CHAIN_ID: typeof CHAIN_ID;
declare const ProtocolSafetyModuleBNB_STK_AAVE: typeof STK_AAVE;
declare namespace ProtocolSafetyModuleBNB {
  export { ProtocolSafetyModuleBNB_CHAIN_ID as CHAIN_ID, ProtocolSafetyModuleBNB_STK_AAVE as STK_AAVE };
}

export { CHAIN_ID as C, ProtocolSafetyModuleBNB as P, STK_AAVE as S };
