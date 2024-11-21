declare const STK_AAVE = "0x5F281bdaD2E6d4af7354054f48609273e874366f";
declare const CHAIN_ID = 56;

declare const ProtocolSafetyModuleBNB_CHAIN_ID: typeof CHAIN_ID;
declare const ProtocolSafetyModuleBNB_STK_AAVE: typeof STK_AAVE;
declare namespace ProtocolSafetyModuleBNB {
  export { ProtocolSafetyModuleBNB_CHAIN_ID as CHAIN_ID, ProtocolSafetyModuleBNB_STK_AAVE as STK_AAVE };
}

export { CHAIN_ID as C, ProtocolSafetyModuleBNB as P, STK_AAVE as S };
