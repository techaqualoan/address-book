// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

// AUTOGENERATED - MANUALLY CHANGES WILL BE REVERTED BY THE GENERATOR
import {IGovernanceCore, IPayloadsControllerCore, IDataWarehouse, IVotingStrategy} from './GovernanceV3.sol';

library GovernanceV3Sepolia {
  // https://goerli.etherscan.io/address/0x586207Df62c7D5D1c9dBb8F61EdF77cc30925C4F
  IGovernanceCore internal constant GOVERNANCE =
    IGovernanceCore(0x586207Df62c7D5D1c9dBb8F61EdF77cc30925C4F);

  // https://goerli.etherscan.io/address/0xE8AD5ab6295c16D04257BC6Cd6D447ff4018FF89
  address internal constant VOTING_MACHINE = 0xE8AD5ab6295c16D04257BC6Cd6D447ff4018FF89;

  // https://goerli.etherscan.io/address/0x064361B3761CcDd17300146bf58a79d1E570382E
  IPayloadsControllerCore internal constant PAYLOADS_CONTROLLER =
    IPayloadsControllerCore(0x064361B3761CcDd17300146bf58a79d1E570382E);

  // https://goerli.etherscan.io/address/0xFf376b6db4AF0d87Dba35860B3B87F526d7879cF
  address internal constant VOTING_PORTAL_ETH_ETH = 0xFf376b6db4AF0d87Dba35860B3B87F526d7879cF;

  // https://goerli.etherscan.io/address/0xe10617A1ea760E174E82fBeb38a540d8ACe566f5
  address internal constant VM_DATA_HELPER = 0xe10617A1ea760E174E82fBeb38a540d8ACe566f5;

  // https://goerli.etherscan.io/address/0xbd2db358f3C82F2883132A6584e22F38A979e768
  address internal constant PC_DATA_HELPER = 0xbd2db358f3C82F2883132A6584e22F38A979e768;

  // https://goerli.etherscan.io/address/0x1966133c190475E8385Dc1b4150B5f81c70DC578
  address internal constant META_DELEGATE_HELPER = 0x1966133c190475E8385Dc1b4150B5f81c70DC578;

  // https://goerli.etherscan.io/address/0x160e2d1456B815d6a3d281218538dd6E2e3C841f
  address internal constant GOV_DATA_HELPER = 0x160e2d1456B815d6a3d281218538dd6E2e3C841f;

  // https://goerli.etherscan.io/address/0x1ba21Fb1bDF4234CAe0AD1e02cF6750d7938E358
  address internal constant GOVERNANCE_POWER_STRATEGY = 0x1ba21Fb1bDF4234CAe0AD1e02cF6750d7938E358;

  // https://goerli.etherscan.io/address/0xb7Ea453180e3c7856b341199269c6ca78658c2b2
  address internal constant EXECUTOR_LVL_1 = 0xb7Ea453180e3c7856b341199269c6ca78658c2b2;

  // https://goerli.etherscan.io/address/0x78350567D0598F84091318769c5b66dcbB811524
  address internal constant EXECUTOR_LVL_2 = 0x78350567D0598F84091318769c5b66dcbB811524;

  // https://goerli.etherscan.io/address/0x2e5a80Be4EA93225f0D9bFE1f8aC6470f54acDb9
  IVotingStrategy internal constant VOTING_STRATEGY =
    IVotingStrategy(0x2e5a80Be4EA93225f0D9bFE1f8aC6470f54acDb9);

  // https://goerli.etherscan.io/address/0xC946cc6bb934bAf2A539BaB62c647aff09D2e2D8
  IDataWarehouse internal constant DATA_WAREHOUSE =
    IDataWarehouse(0xC946cc6bb934bAf2A539BaB62c647aff09D2e2D8);
}
