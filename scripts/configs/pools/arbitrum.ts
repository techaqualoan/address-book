import {ChainId} from '@bgd-labs/js-utils';
import {PoolConfig} from '../types';

export const arbitrumProtoV3: PoolConfig = {
  name: 'Arbitrum',
  chainId: ChainId.arbitrum_one,
  POOL_ADDRESSES_PROVIDER: '0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb',
  additionalAddresses: {
    CAPS_PLUS_RISK_STEWARD: '0xADf86b537eF08591c2777E144322E8b0Ca7E82a7',
    RISK_STEWARD: '0x9EEa1Ba822d204077e9f90a92D30432417184587',
    FREEZING_STEWARD: '0xe59470B3BE3293534603487E00A44C72f2CD466d',
    DEBT_SWAP_ADAPTER: '0x63dfa7c09Dc2Ff4030d6B8Dc2ce6262BF898C8A4',
    L2_ENCODER: '0x9abADECD08572e0eA5aF4d47A9C7984a5AA503dC',
    CONFIG_ENGINE: '0x5EcF74eb2feC38fe80F8f20f7eb302F276635fff',
    POOL_ADDRESSES_PROVIDER_REGISTRY: '0x770ef9f4fe897e59daCc474EF11238303F9552b6',
    RATES_FACTORY: '0xcC47c4Fe1F7f29ff31A8b62197023aC8553C7896',
    REPAY_WITH_COLLATERAL_ADAPTER: '0xE28E2c8d240dd5eBd0adcab86fbD79df7a052034',
    STATIC_A_TOKEN_FACTORY: '0x411D79b8cC43384FDE66CaBf9b6a17180c842511',
    STATIC_A_TOKEN_ORACLE: '0xD61BF98649EA8F8D09e184184777b1867F00E5CB',
    SWAP_COLLATERAL_ADAPTER: '0xF3C3F14dd7BDb7E03e6EBc3bc5Ffc6D66De12251',
    UI_INCENTIVE_DATA_PROVIDER: '0xDA67AF3403555Ce0AE3ffC22fDb7354458277358',
    UI_POOL_DATA_PROVIDER: '0x5d4d4007a4c6336550ddaa2a7c0d5e7972eebd16',
    WALLET_BALANCE_PROVIDER: '0xBc790382B3686abffE4be14A030A96aC6154023a',
    WETH_GATEWAY: '0x5760E34c4003752329bC77790B1De44C2799F8C3',
    WITHDRAW_SWAP_ADAPTER: '0x5598BbFA2f4fE8151f45bBA0a3edE1b54B51a0a9',
  },
};

export const arbitrumSepoliaProtoV3: PoolConfig = {
  name: 'ArbitrumSepolia',
  chainId: ChainId.arbitrum_sepolia,
  POOL_ADDRESSES_PROVIDER: '0xB25a5D144626a0D488e52AE717A051a2E9997076',
  additionalAddresses: {
    L2_ENCODER: '0x2E45e7dCD1e94d8edf1605FfF4602912FDC662bC',
    CONFIG_ENGINE: '0x0a275C06556EeB3c7Ff2b0f0cfD462A7645772EF',
    POOL_ADDRESSES_PROVIDER_REGISTRY: '0xbB7492Cce831eE6F349960a6E2da8eadC4b50cA3',
    UI_INCENTIVE_DATA_PROVIDER: '0xB90fa850a4af6D30feA8b41989eaAecDcA8fd414',
    UI_POOL_DATA_PROVIDER: '0x97Cf44bF6a9A3D2B4F32b05C480dBEdC018F72A9',
    WALLET_BALANCE_PROVIDER: '0x1Be33D186a081eFDf15310e4bdEd81E828C47f9b',
    WETH_GATEWAY: '0x20040a64612555042335926d72B4E5F667a67fA1',
  },
};
