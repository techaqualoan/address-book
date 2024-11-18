declare const TRANSPARENT_PROXY_FACTORY = "0x47aAdaAE1F05C978E6aBb7568d11B7F6e0FC4d6A";
declare const PROTOCOL_GUARDIAN = "0xCb45E82419baeBCC9bA8b1e5c7858e48A3B26Ea6";
declare const PARASWAP_FEE_CLAIMER = "0xAe940e61E9863178b71500c9B5faE2a04Da361a1";
declare const PROXY_ADMIN = "0x39EBFfc7679c62Dfcc4A3E2c09Bcb0be255Ae63c";
declare const CREATE_3_FACTORY = "0x3b56998Ec06477704622ca8e2eA1b4db134cec32";
declare const AAVE_CL_ROBOT_OPERATOR = "0x51Bd3d6011Dd0BD88Ee1bEA1a67be799A6A09D79";
declare const CHAIN_ID = 56;

declare const MiscBNB_AAVE_CL_ROBOT_OPERATOR: typeof AAVE_CL_ROBOT_OPERATOR;
declare const MiscBNB_CHAIN_ID: typeof CHAIN_ID;
declare const MiscBNB_CREATE_3_FACTORY: typeof CREATE_3_FACTORY;
declare const MiscBNB_PARASWAP_FEE_CLAIMER: typeof PARASWAP_FEE_CLAIMER;
declare const MiscBNB_PROTOCOL_GUARDIAN: typeof PROTOCOL_GUARDIAN;
declare const MiscBNB_PROXY_ADMIN: typeof PROXY_ADMIN;
declare const MiscBNB_TRANSPARENT_PROXY_FACTORY: typeof TRANSPARENT_PROXY_FACTORY;
declare namespace MiscBNB {
  export { MiscBNB_AAVE_CL_ROBOT_OPERATOR as AAVE_CL_ROBOT_OPERATOR, MiscBNB_CHAIN_ID as CHAIN_ID, MiscBNB_CREATE_3_FACTORY as CREATE_3_FACTORY, MiscBNB_PARASWAP_FEE_CLAIMER as PARASWAP_FEE_CLAIMER, MiscBNB_PROTOCOL_GUARDIAN as PROTOCOL_GUARDIAN, MiscBNB_PROXY_ADMIN as PROXY_ADMIN, MiscBNB_TRANSPARENT_PROXY_FACTORY as TRANSPARENT_PROXY_FACTORY };
}

export { AAVE_CL_ROBOT_OPERATOR as A, CREATE_3_FACTORY as C, MiscBNB as M, PROTOCOL_GUARDIAN as P, TRANSPARENT_PROXY_FACTORY as T, PARASWAP_FEE_CLAIMER as a, PROXY_ADMIN as b, CHAIN_ID as c };