declare const AAVE_ECOSYSTEM_RESERVE_CONTROLLER = "0x2C7E6B153fC1AC0ae903f25BA023D4f2e7B3c38C";
declare const ECOSYSTEM_RESERVE = "0x5577B156C3ad7beC2A11BBe29009B330ac5C9bF5";
declare const EUR_USD_AGGREGATOR = "0xb49f677943BC038e9857d61E7d053CaA2C1734C1";
declare const CHAIN_ID = 1;

declare const MiscEthereum_AAVE_ECOSYSTEM_RESERVE_CONTROLLER: typeof AAVE_ECOSYSTEM_RESERVE_CONTROLLER;
declare const MiscEthereum_CHAIN_ID: typeof CHAIN_ID;
declare const MiscEthereum_ECOSYSTEM_RESERVE: typeof ECOSYSTEM_RESERVE;
declare const MiscEthereum_EUR_USD_AGGREGATOR: typeof EUR_USD_AGGREGATOR;
declare namespace MiscEthereum {
  export { MiscEthereum_AAVE_ECOSYSTEM_RESERVE_CONTROLLER as AAVE_ECOSYSTEM_RESERVE_CONTROLLER, MiscEthereum_CHAIN_ID as CHAIN_ID, MiscEthereum_ECOSYSTEM_RESERVE as ECOSYSTEM_RESERVE, MiscEthereum_EUR_USD_AGGREGATOR as EUR_USD_AGGREGATOR };
}

export { AAVE_ECOSYSTEM_RESERVE_CONTROLLER as A, CHAIN_ID as C, ECOSYSTEM_RESERVE as E, MiscEthereum as M, EUR_USD_AGGREGATOR as a };