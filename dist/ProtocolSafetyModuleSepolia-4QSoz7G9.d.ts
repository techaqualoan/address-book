declare const STK_AAVE = "0x234753D2Cc86a6Ee8d895caEA93A89c048d987Eb";
declare const CHAIN_ID = 11155111;

declare const ProtocolSafetyModuleSepolia_CHAIN_ID: typeof CHAIN_ID;
declare const ProtocolSafetyModuleSepolia_STK_AAVE: typeof STK_AAVE;
declare namespace ProtocolSafetyModuleSepolia {
  export { ProtocolSafetyModuleSepolia_CHAIN_ID as CHAIN_ID, ProtocolSafetyModuleSepolia_STK_AAVE as STK_AAVE };
}

export { CHAIN_ID as C, ProtocolSafetyModuleSepolia as P, STK_AAVE as S };
