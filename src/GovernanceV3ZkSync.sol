// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

// AUTOGENERATED - MANUALLY CHANGES WILL BE REVERTED BY THE GENERATOR
import {IGovernanceCore, IPayloadsControllerCore, IDataWarehouse, IVotingStrategy} from './GovernanceV3.sol';

library GovernanceV3ZkSync {
  // https://era.zksync.network/address/0x800813f4714BC7A0a95310e3fB9e4f18872CA92C
  address internal constant CROSS_CHAIN_CONTROLLER = 0x800813f4714BC7A0a95310e3fB9e4f18872CA92C;

  // https://era.zksync.network/address/0x2E79349c3F5e4751E87b966812C9E65E805996F1
  IPayloadsControllerCore internal constant PAYLOADS_CONTROLLER =
    IPayloadsControllerCore(0x2E79349c3F5e4751E87b966812C9E65E805996F1);

  // https://era.zksync.network/address/0xe28A3235DCF1Acb8397B546bd588bAAFD7081505
  address internal constant PC_DATA_HELPER = 0xe28A3235DCF1Acb8397B546bd588bAAFD7081505;

  // https://era.zksync.network/address/0xe0e23196D42b54F262a3DE952e6B34B197D1A228
  address internal constant GRANULAR_GUARDIAN = 0xe0e23196D42b54F262a3DE952e6B34B197D1A228;

  // https://era.zksync.network/address/0x4257bf0746D783f0D962913d7d8AFA408B62547E
  address internal constant GOVERNANCE_GUARDIAN = 0x4257bf0746D783f0D962913d7d8AFA408B62547E;

  // https://era.zksync.network/address/0x04cE39789e11a49595cD0ECEf6f4Bd54ABF4d020
  address internal constant EXECUTOR_LVL_1 = 0x04cE39789e11a49595cD0ECEf6f4Bd54ABF4d020;
}
