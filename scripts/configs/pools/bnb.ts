import {ChainId} from '@bgd-labs/rpc-env';
import {PoolConfig} from '../types';

export const bnbProtoV3: PoolConfig = {
  name: 'BNB',
  chainId: ChainId.bnb,
  POOL_ADDRESSES_PROVIDER: '0xA9aD669442f9ABEd99b6B4a803BDae0746FEa220',
  additionalAddresses: {
    CAPS_PLUS_RISK_STEWARD: '0x971F1C94b139AdEdedA729DA636e2B0C433Ff595',
    RISK_STEWARD: '0xbe7998712402b6a63975515a532ce503437998b7',
    FREEZING_STEWARD: '0x83f15Bc50d1A212576B202f80489502a7cc10412',
    DEBT_SWAP_ADAPTER: '0x5d4D4007A4c6336550DdAa2a7c0d5e7972eebd16',
    CONFIG_ENGINE: '0x249396a890F89D47F89326d7EE116b1d374Fb3A9',
    POOL_ADDRESSES_PROVIDER_REGISTRY: '0x117684358D990E42Eb1649E7e8C4691951dc1E71',
    REPAY_WITH_COLLATERAL_ADAPTER: '0x5598BbFA2f4fE8151f45bBA0a3edE1b54B51a0a9',
    SWAP_COLLATERAL_ADAPTER: '0x33E0b3fc976DC9C516926BA48CfC0A9E10a2aAA5',
    UI_INCENTIVE_DATA_PROVIDER: '0x2E15627381392816b5B55Ac64dE77746bD558479',
    UI_POOL_DATA_PROVIDER: '0x1B4776a1d5d77f5fBBfc334DCF0346ed6c84432a',
    WALLET_BALANCE_PROVIDER: '0x6AcE9EC5ACCe1210700E7126176351dF1b7bd4e9',
    WETH_GATEWAY: '0x33620e485Bb2278D9B25551bf078c2cEEE159c16',
    WITHDRAW_SWAP_ADAPTER: '0x5E2d083417D12d4B0824E14Ecd48D26831F4Da7D',
    STATIC_A_TOKEN_FACTORY: '0x326aB0868bD279382Be2DF5E228Cb8AF38649AB4',
  },
  initial: {
    COLLECTOR: '0x25Ec457d1778b0E5316e7f38f3c22baF413F1A8C',
    DEFAULT_A_TOKEN_IMPL: '0x6c23bAF050ec192afc0B967a93b83e6c5405df43',
    DEFAULT_VARIABLE_DEBT_TOKEN_IMPL: '0x777fBA024bA1228fDa76149A4ff8B23475ed057D',
    DEFAULT_STABLE_DEBT_TOKEN_IMPL: '0xb172a90A7C238969CE9B27cc19D13b60A91e7F00',
  },
};
