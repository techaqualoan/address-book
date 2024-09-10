import {ChainId} from '@bgd-labs/js-utils';
import {PoolConfig} from '../types';

export const zkSyncProtoV3: PoolConfig = {
  name: 'ZkSync',
  chainId: ChainId.zkSync,
  POOL_ADDRESSES_PROVIDER: '0x2A3948BB219D6B2Fa83D64100006391a96bE6cb7',
  additionalAddresses: {
    CONFIG_ENGINE: '0x93E5E329FaCf7d85118b49f0eb250E9c767CA177',
    POOL_ADDRESSES_PROVIDER_REGISTRY: '0x0753E3637ddC6efc40759D9c347251046644F25F',
    UI_INCENTIVE_DATA_PROVIDER: '0x82B3B951Cf43B42324B915Ab651a83D910f29D67',
    UI_POOL_DATA_PROVIDER: '0x43312730DB351Dc099924462A42B442c0993F6B5',
    WALLET_BALANCE_PROVIDER: '0xcb8Dc3C135e59B1252F057da44A8f43EE6B0dAB0',
    WETH_GATEWAY: '0xA72d2e6C79F3e19b5cF51069e5eD1c0177b548EB',
    STATIC_A_TOKEN_FACTORY: '0x1Bc8dbF1f5aF8094Aa166098131116CaAd6B22F9',
    RISK_STEWARD: '0xDeDee21f34eff4e2902B95A106855834a608e19a',
  },
  initial: {
    COLLECTOR: '0xd69Cbda644c6be817AaFb5Fd9174f50C33803B6b',
    DEFAULT_A_TOKEN_IMPL: '0x34be365Fd01ac224F21490aaC6dFd65D25434bbB',
    DEFAULT_VARIABLE_DEBT_TOKEN_IMPL: '0x52E97425D1Fa6885fAaC9260B711fA5047A88d06',
    DEFAULT_STABLE_DEBT_TOKEN_IMPL: '0x4dF950Ff1352B22dA739c33C35C6f0c81B5d9d19',
  },
};
