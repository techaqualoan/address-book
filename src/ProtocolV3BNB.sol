// AUTOGENERATED - MANUALLY CHANGES WILL BE REVERTED BY THE GENERATOR
// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

import {IPoolAddressesProvider, IPool, IPoolConfigurator, IAaveOracle, IPoolDataProvider, IACLManager} from './ProtocolV3.sol';
import {ICollector} from './common/ICollector.sol';
library ProtocolV3BNB {
  // https://bscscan.com/address/0xA9aD669442f9ABEd99b6B4a803BDae0746FEa220
  IPoolAddressesProvider internal constant POOL_ADDRESSES_PROVIDER =
    IPoolAddressesProvider(0xA9aD669442f9ABEd99b6B4a803BDae0746FEa220);

  // https://bscscan.com/address/0x751107834436ad0d08a4c6D9Cc82031D5088999C
  IPool internal constant POOL = IPool(0x751107834436ad0d08a4c6D9Cc82031D5088999C);

  // https://bscscan.com/address/0x85615611FFD1Ee407A8a28Aab36babf675840cDd
  IPoolConfigurator internal constant POOL_CONFIGURATOR =
    IPoolConfigurator(0x85615611FFD1Ee407A8a28Aab36babf675840cDd);

  // https://bscscan.com/address/0x1866ff4f9c9A4EFBBccD3D4b5db4d98aB3Bf785d
  IAaveOracle internal constant ORACLE = IAaveOracle(0x1866ff4f9c9A4EFBBccD3D4b5db4d98aB3Bf785d);

  // https://bscscan.com/address/0x084126414188735846e4f1851cB3d01D829Fa15b
  address internal constant ACL_ADMIN = 0x084126414188735846e4f1851cB3d01D829Fa15b;

  // https://bscscan.com/address/0xf8e3E5AEcd836372E472781f0f0f9671069E4f1e
  IACLManager internal constant ACL_MANAGER =
    IACLManager(0xf8e3E5AEcd836372E472781f0f0f9671069E4f1e);

  // https://bscscan.com/address/0xDc33eAA50B8707f791478Cec324e451E20FDa7ed
  IPoolDataProvider internal constant AAVE_PROTOCOL_DATA_PROVIDER =
    IPoolDataProvider(0xDc33eAA50B8707f791478Cec324e451E20FDa7ed);

  // https://bscscan.com/address/0x0821D7834773Dc3A324959ebcc4B74A2b2A9C1e4
  address internal constant POOL_IMPL = 0x0821D7834773Dc3A324959ebcc4B74A2b2A9C1e4;

  // https://bscscan.com/address/0x7468D731a151c2161A0E01ad1b2f22C183f4dF98
  address internal constant POOL_CONFIGURATOR_IMPL = 0x7468D731a151c2161A0E01ad1b2f22C183f4dF98;

  // https://bscscan.com/address/0xe84d523A9d51f2c6DcDE41A7C91cC2c6B3B6Bc70
  address internal constant DEFAULT_INCENTIVES_CONTROLLER =
    0xe84d523A9d51f2c6DcDE41A7C91cC2c6B3B6Bc70;

  // https://bscscan.com/address/0xC3Af6c84A950538b228025744039458AE456d39b
  address internal constant EMISSION_MANAGER = 0xC3Af6c84A950538b228025744039458AE456d39b;

  // https://bscscan.com/address/0x918737Bd3fDCDDb2ae30De41e3e89806fC8228bf
  ICollector internal constant COLLECTOR = ICollector(0x918737Bd3fDCDDb2ae30De41e3e89806fC8228bf);

  // https://bscscan.com/address/0x4d0cd4b74A4f09B33AFfF69B7667a3376534EB55
  address internal constant DEFAULT_A_TOKEN_IMPL_REV_1 = 0x4d0cd4b74A4f09B33AFfF69B7667a3376534EB55;

  // https://bscscan.com/address/0x4E928E9F8809929DA4501Af3bc68B57b1e79cFf7
  address internal constant DEFAULT_VARIABLE_DEBT_TOKEN_IMPL_REV_1 =
    0x4E928E9F8809929DA4501Af3bc68B57b1e79cFf7;

  // https://bscscan.com/address/0x971F1C94b139AdEdedA729DA636e2B0C433Ff595
  address internal constant CAPS_PLUS_RISK_STEWARD = 0x971F1C94b139AdEdedA729DA636e2B0C433Ff595;

  // https://bscscan.com/address/0xbe7998712402B6A63975515A532Ce503437998b7
  address internal constant RISK_STEWARD = 0xbe7998712402B6A63975515A532Ce503437998b7;

  // https://bscscan.com/address/0x83f15Bc50d1A212576B202f80489502a7cc10412
  address internal constant FREEZING_STEWARD = 0x83f15Bc50d1A212576B202f80489502a7cc10412;

  // https://bscscan.com/address/0x5d4D4007A4c6336550DdAa2a7c0d5e7972eebd16
  address internal constant DEBT_SWAP_ADAPTER = 0x5d4D4007A4c6336550DdAa2a7c0d5e7972eebd16;

  // https://bscscan.com/address/0x249396a890F89D47F89326d7EE116b1d374Fb3A9
  address internal constant CONFIG_ENGINE = 0x249396a890F89D47F89326d7EE116b1d374Fb3A9;

  // https://bscscan.com/address/0x117684358D990E42Eb1649E7e8C4691951dc1E71
  address internal constant POOL_ADDRESSES_PROVIDER_REGISTRY =
    0x117684358D990E42Eb1649E7e8C4691951dc1E71;

  // https://bscscan.com/address/0xe7f3aC8A56FA20303820a54bC46C8ce6ae7aF9f8
  address internal constant REPAY_WITH_COLLATERAL_ADAPTER =
    0xe7f3aC8A56FA20303820a54bC46C8ce6ae7aF9f8;

  // https://bscscan.com/address/0x321510f3BaeD4D6D30726d3C463Fc2746c7cB9A8
  address internal constant SWAP_COLLATERAL_ADAPTER = 0x321510f3BaeD4D6D30726d3C463Fc2746c7cB9A8;

  // https://bscscan.com/address/0x78Dff54DB07Cd25Acd79Ff04e3c38Fc1B84900f8
  address internal constant WITHDRAW_SWAP_ADAPTER = 0x78Dff54DB07Cd25Acd79Ff04e3c38Fc1B84900f8;

  // https://bscscan.com/address/0x2E15627381392816b5B55Ac64dE77746bD558479
  address internal constant UI_INCENTIVE_DATA_PROVIDER = 0x2E15627381392816b5B55Ac64dE77746bD558479;

  // https://bscscan.com/address/0x1B4776a1d5d77f5fBBfc334DCF0346ed6c84432a
  address internal constant UI_POOL_DATA_PROVIDER = 0x1B4776a1d5d77f5fBBfc334DCF0346ed6c84432a;

  // https://bscscan.com/address/0x6AcE9EC5ACCe1210700E7126176351dF1b7bd4e9
  address internal constant WALLET_BALANCE_PROVIDER = 0x6AcE9EC5ACCe1210700E7126176351dF1b7bd4e9;

  // https://bscscan.com/address/0x33620e485Bb2278D9B25551bf078c2cEEE159c16
  address internal constant WETH_GATEWAY = 0x33620e485Bb2278D9B25551bf078c2cEEE159c16;

  // https://bscscan.com/address/0x326aB0868bD279382Be2DF5E228Cb8AF38649AB4
  address internal constant STATIC_A_TOKEN_FACTORY = 0x326aB0868bD279382Be2DF5E228Cb8AF38649AB4;
}
library ProtocolV3BNBAssets {
  // https://bscscan.com/address/0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3
  address internal constant DAI_UNDERLYING = 0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3;

  uint8 internal constant DAI_DECIMALS = 18;

  // https://bscscan.com/address/0x3116a040165CD5D10a58F630594e571E766cc8E4
  address internal constant DAI_A_TOKEN = 0x3116a040165CD5D10a58F630594e571E766cc8E4;

  // https://bscscan.com/address/0x5C990a434e1D6474aFD41835af80E847a293C2d1
  address internal constant DAI_V_TOKEN = 0x5C990a434e1D6474aFD41835af80E847a293C2d1;

  // https://bscscan.com/address/0x132d3C0B1D2cEa0BC552588063bdBb210FDeecfA
  address internal constant DAI_ORACLE = 0x132d3C0B1D2cEa0BC552588063bdBb210FDeecfA;

  // https://bscscan.com/address/0x4FCCf8b93441F3a861efFf44382B2200dD76467E
  address internal constant DAI_INTEREST_RATE_STRATEGY = 0x4FCCf8b93441F3a861efFf44382B2200dD76467E;

  // https://bscscan.com/address/0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD
  address internal constant LINK_UNDERLYING = 0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD;

  uint8 internal constant LINK_DECIMALS = 18;

  // https://bscscan.com/address/0xDBF5Aa22233E108a1705697fA93bf0cC8a32AB38
  address internal constant LINK_A_TOKEN = 0xDBF5Aa22233E108a1705697fA93bf0cC8a32AB38;

  // https://bscscan.com/address/0xbC390F6983F6E43f3fD3D232b1475d7493fd5a01
  address internal constant LINK_V_TOKEN = 0xbC390F6983F6E43f3fD3D232b1475d7493fd5a01;

  // https://bscscan.com/address/0xca236E327F629f9Fc2c30A4E95775EbF0B89fac8
  address internal constant LINK_ORACLE = 0xca236E327F629f9Fc2c30A4E95775EbF0B89fac8;

  // https://bscscan.com/address/0xaBA569AB96B12F18e556B470277dFd14c24496bF
  address internal constant LINK_INTEREST_RATE_STRATEGY =
    0xaBA569AB96B12F18e556B470277dFd14c24496bF;

  // https://bscscan.com/address/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d
  address internal constant USDC_UNDERLYING = 0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d;

  uint8 internal constant USDC_DECIMALS = 18;

  // https://bscscan.com/address/0xBdDF93290Fa22898Ac9fD87858E94760Fb23242d
  address internal constant USDC_A_TOKEN = 0xBdDF93290Fa22898Ac9fD87858E94760Fb23242d;

  // https://bscscan.com/address/0xCD34892d4Ad0c1eCD5952145fBdD1e4c53b10fAc
  address internal constant USDC_V_TOKEN = 0xCD34892d4Ad0c1eCD5952145fBdD1e4c53b10fAc;

  // https://bscscan.com/address/0x51597f405303C4377E36123cBc172b13269EA163
  address internal constant USDC_ORACLE = 0x51597f405303C4377E36123cBc172b13269EA163;

  // https://bscscan.com/address/0x7373b3472CAA3f465b908c8876de772374728C1E
  address internal constant USDC_INTEREST_RATE_STRATEGY =
    0x7373b3472CAA3f465b908c8876de772374728C1E;

  // https://bscscan.com/address/0x3906cDdfb781f02B21f21BD81ed7Fd8DC37075E1
  address internal constant USDC_STATIC_A_TOKEN = 0x3906cDdfb781f02B21f21BD81ed7Fd8DC37075E1;

  // https://bscscan.com/address/0x0555E30da8f98308EdB960aa94C0Db47230d2B9c
  address internal constant WBTC_UNDERLYING = 0x0555E30da8f98308EdB960aa94C0Db47230d2B9c;

  uint8 internal constant WBTC_DECIMALS = 8;

  // https://bscscan.com/address/0x302132C7C45FB8f990867E0d0e315B1AE4bd8b15
  address internal constant WBTC_A_TOKEN = 0x302132C7C45FB8f990867E0d0e315B1AE4bd8b15;

  // https://bscscan.com/address/0xd737db32E93a920CF022De34B2Ef4E643684080C
  address internal constant WBTC_V_TOKEN = 0xd737db32E93a920CF022De34B2Ef4E643684080C;

  // https://bscscan.com/address/0x264990fbd0A4796A3E3d8E37C4d5F87a3aCa5Ebf
  address internal constant WBTC_ORACLE = 0x264990fbd0A4796A3E3d8E37C4d5F87a3aCa5Ebf;

  // https://bscscan.com/address/0xaBA569AB96B12F18e556B470277dFd14c24496bF
  address internal constant WBTC_INTEREST_RATE_STRATEGY =
    0xaBA569AB96B12F18e556B470277dFd14c24496bF;

  // https://bscscan.com/address/0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE
  address internal constant XRP_UNDERLYING = 0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE;

  uint8 internal constant XRP_DECIMALS = 18;

  // https://bscscan.com/address/0xc37205b69d4367919973589dCED31555FfF03cb2
  address internal constant XRP_A_TOKEN = 0xc37205b69d4367919973589dCED31555FfF03cb2;

  // https://bscscan.com/address/0x47a64351128Ee9db70bdbf248549E5eCcC2E9D8d
  address internal constant XRP_V_TOKEN = 0x47a64351128Ee9db70bdbf248549E5eCcC2E9D8d;

  // https://bscscan.com/address/0x93A67D414896A280bF8FFB3b389fE3686E014fda
  address internal constant XRP_ORACLE = 0x93A67D414896A280bF8FFB3b389fE3686E014fda;

  // https://bscscan.com/address/0xF29C644596d4708CAA54a41766BeE63039ef8f4D
  address internal constant XRP_INTEREST_RATE_STRATEGY = 0xF29C644596d4708CAA54a41766BeE63039ef8f4D;

  // https://bscscan.com/address/0x55d398326f99059fF775485246999027B3197955
  address internal constant USDT_UNDERLYING = 0x55d398326f99059fF775485246999027B3197955;

  uint8 internal constant USDT_DECIMALS = 18;

  // https://bscscan.com/address/0xE8a2F7a16Fe345A66E42fe0b5C3cf3d8EA001875
  address internal constant USDT_A_TOKEN = 0xE8a2F7a16Fe345A66E42fe0b5C3cf3d8EA001875;

  // https://bscscan.com/address/0x8eFE4dA0cf3c929D0aA13a623f11a164Fe833408
  address internal constant USDT_V_TOKEN = 0x8eFE4dA0cf3c929D0aA13a623f11a164Fe833408;

  // https://bscscan.com/address/0xB97Ad0E74fa7d920791E90258A6E2085088b4320
  address internal constant USDT_ORACLE = 0xB97Ad0E74fa7d920791E90258A6E2085088b4320;

  // https://bscscan.com/address/0x7373b3472CAA3f465b908c8876de772374728C1E
  address internal constant USDT_INTEREST_RATE_STRATEGY =
    0x7373b3472CAA3f465b908c8876de772374728C1E;

  // https://bscscan.com/address/0x0471D185cc7Be61E154277cAB2396cD397663da6
  address internal constant USDT_STATIC_A_TOKEN = 0x0471D185cc7Be61E154277cAB2396cD397663da6;

  // https://bscscan.com/address/0xfb6115445Bff7b52FeB98650C87f44907E58f802
  address internal constant AAVE_UNDERLYING = 0xfb6115445Bff7b52FeB98650C87f44907E58f802;

  uint8 internal constant AAVE_DECIMALS = 18;

  // https://bscscan.com/address/0x5FCCaCE44c3e6F6CE16815B1b1D1c9399f0aFF1C
  address internal constant AAVE_A_TOKEN = 0x5FCCaCE44c3e6F6CE16815B1b1D1c9399f0aFF1C;

  // https://bscscan.com/address/0x53c7D555262a85A5a33A8aa5EE0529901c4Bc8a5
  address internal constant AAVE_V_TOKEN = 0x53c7D555262a85A5a33A8aa5EE0529901c4Bc8a5;

  // https://bscscan.com/address/0xA8357BF572460fC40f4B0aCacbB2a6A61c89f475
  address internal constant AAVE_ORACLE = 0xA8357BF572460fC40f4B0aCacbB2a6A61c89f475;

  // https://bscscan.com/address/0xaBA569AB96B12F18e556B470277dFd14c24496bF
  address internal constant AAVE_INTEREST_RATE_STRATEGY =
    0xaBA569AB96B12F18e556B470277dFd14c24496bF;

  // https://bscscan.com/address/0xbA2aE424d960c26247Dd6c32edC70B295c744C43
  address internal constant DOGE_UNDERLYING = 0xbA2aE424d960c26247Dd6c32edC70B295c744C43;

  uint8 internal constant DOGE_DECIMALS = 8;

  // https://bscscan.com/address/0x4aA9B6f2eAB5015d55Ff5556E389f5a0407C1835
  address internal constant DOGE_A_TOKEN = 0x4aA9B6f2eAB5015d55Ff5556E389f5a0407C1835;

  // https://bscscan.com/address/0x550499f0d5CAde7D10e6EA898a6D40Bd457ada40
  address internal constant DOGE_V_TOKEN = 0x550499f0d5CAde7D10e6EA898a6D40Bd457ada40;

  // https://bscscan.com/address/0x3AB0A0d137D4F946fBB19eecc6e92E64660231C8
  address internal constant DOGE_ORACLE = 0x3AB0A0d137D4F946fBB19eecc6e92E64660231C8;

  // https://bscscan.com/address/0xF29C644596d4708CAA54a41766BeE63039ef8f4D
  address internal constant DOGE_INTEREST_RATE_STRATEGY =
    0xF29C644596d4708CAA54a41766BeE63039ef8f4D;

  // https://bscscan.com/address/0x2170Ed0880ac9A755fd29B2688956BD959F933F8
  address internal constant ETH_UNDERLYING = 0x2170Ed0880ac9A755fd29B2688956BD959F933F8;

  uint8 internal constant ETH_DECIMALS = 18;

  // https://bscscan.com/address/0xCc52B2db0c021677C7C9A8C4bE0fC184481E1564
  address internal constant ETH_A_TOKEN = 0xCc52B2db0c021677C7C9A8C4bE0fC184481E1564;

  // https://bscscan.com/address/0x998969e2Dc98B8489851B1392b605211AD8C263C
  address internal constant ETH_V_TOKEN = 0x998969e2Dc98B8489851B1392b605211AD8C263C;

  // https://bscscan.com/address/0x9ef1B8c0E4F7dc8bF5719Ea496883DC6401d5b2e
  address internal constant ETH_ORACLE = 0x9ef1B8c0E4F7dc8bF5719Ea496883DC6401d5b2e;

  // https://bscscan.com/address/0xaBA569AB96B12F18e556B470277dFd14c24496bF
  address internal constant ETH_INTEREST_RATE_STRATEGY = 0xaBA569AB96B12F18e556B470277dFd14c24496bF;

  // https://bscscan.com/address/0x52077433fB7053D747E2846aD0C18ff5015C368E
  address internal constant ETH_STATIC_A_TOKEN = 0x52077433fB7053D747E2846aD0C18ff5015C368E;

  // https://bscscan.com/address/0xc5f0f7b66764F6ec8C8Dff7BA683102295E16409
  address internal constant FDUSD_UNDERLYING = 0xc5f0f7b66764F6ec8C8Dff7BA683102295E16409;

  uint8 internal constant FDUSD_DECIMALS = 18;

  // https://bscscan.com/address/0x23dcb2647c58650f3C00F761c7D31eE98C8ed86E
  address internal constant FDUSD_A_TOKEN = 0x23dcb2647c58650f3C00F761c7D31eE98C8ed86E;

  // https://bscscan.com/address/0x523b3469681fC90d27a2B9365f139fE7FC33DB62
  address internal constant FDUSD_V_TOKEN = 0x523b3469681fC90d27a2B9365f139fE7FC33DB62;

  // https://bscscan.com/address/0x390180e80058A8499930F0c13963AD3E0d86Bfc9
  address internal constant FDUSD_ORACLE = 0x390180e80058A8499930F0c13963AD3E0d86Bfc9;

  // https://bscscan.com/address/0x7373b3472CAA3f465b908c8876de772374728C1E
  address internal constant FDUSD_INTEREST_RATE_STRATEGY =
    0x7373b3472CAA3f465b908c8876de772374728C1E;

  // https://bscscan.com/address/0x4d074aAa0821073dA827f7bf6a02cF905b394ed0
  address internal constant FDUSD_STATIC_A_TOKEN = 0x4d074aAa0821073dA827f7bf6a02cF905b394ed0;

  // https://bscscan.com/address/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c
  address internal constant WBNB_UNDERLYING = 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c;

  uint8 internal constant WBNB_DECIMALS = 18;

  // https://bscscan.com/address/0x2ED671186a86eEF55E7573466a10Da684bA1ca63
  address internal constant WBNB_A_TOKEN = 0x2ED671186a86eEF55E7573466a10Da684bA1ca63;

  // https://bscscan.com/address/0xEEbf5807fa2BB6Ed78e507c9c0214d2E8af9e727
  address internal constant WBNB_V_TOKEN = 0xEEbf5807fa2BB6Ed78e507c9c0214d2E8af9e727;

  // https://bscscan.com/address/0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE
  address internal constant WBNB_ORACLE = 0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE;

  // https://bscscan.com/address/0xaBA569AB96B12F18e556B470277dFd14c24496bF
  address internal constant WBNB_INTEREST_RATE_STRATEGY =
    0xaBA569AB96B12F18e556B470277dFd14c24496bF;

  // https://bscscan.com/address/0x436baCb4C66583de4Cb16e13a1A0D9A3075DE425
  address internal constant WBNB_STATIC_A_TOKEN = 0x436baCb4C66583de4Cb16e13a1A0D9A3075DE425;
}
