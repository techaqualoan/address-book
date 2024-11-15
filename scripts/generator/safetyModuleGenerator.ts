import fs from 'fs';
import {
  generateJsConstants,
  generateSolidityConstants,
  prefixWithGeneratedWarning,
  prefixWithPragma,
  wrapIntoSolidityLibrary,
} from './utils';
import { ChainId } from '@bgd-labs/rpc-env';

export const SAFETY_MODULE_ADDRESSES = {
  [ChainId.mainnet]: {
    STK_AAVE: '0x4da27a545c0c5B758a6BA100e3a049001de870f5',
    // STK_ABPT: '0xa1116930326D21fB917d5A27F1E9943A9595fb47',
    // STK_ABPT_ORACLE: '0x209Ad99bd808221293d03827B86cC544bcA0023b',
    // STK_ABPT_STK_AAVE_WSTETH_BPTV2_MIGRATOR: '0xecD4bd3121F9FD604ffaC631bF6d41ec12f1fafb',
    // STK_GHO: '0x1a88Df1cFe15Af22B3c4c783D4e6F7F9e0C1885d',
    // STK_AAVE_WSTETH_BPTV2: '0x9eDA81C21C273a82BE9Bbc19B6A6182212068101',
    // STK_AAVE_WSTETH_BPTV2_ORACLE: '0xADf86b537eF08591c2777E144322E8b0Ca7E82a7',
  },
  [ChainId.sepolia]: {
    STK_AAVE: '0x234753D2Cc86a6Ee8d895caEA93A89c048d987Eb',
  },
} as const;

export function generateSafetyModule() {
  const chains = [
    {
      chainId: ChainId.mainnet,
      nameSuffix: '',
      addresses: SAFETY_MODULE_ADDRESSES[ChainId.mainnet],
    },
    {
      chainId: ChainId.sepolia,
      nameSuffix: 'Sepolia',
      addresses: SAFETY_MODULE_ADDRESSES[ChainId.sepolia],
    },
  ];

  const results = {
    js: [] as string[],
    solidity: [] as string[],
  };

  chains.forEach(({ chainId, nameSuffix, addresses }) => {
    const name = `ProtocolSafetyModule${nameSuffix}`;

    fs.writeFileSync(
      `./src/${name}.sol`,
      prefixWithGeneratedWarning(
        prefixWithPragma(
          wrapIntoSolidityLibrary(
            generateSolidityConstants({ chainId, addresses }),
            name,
          ),
        ),
      ),
    );

    fs.writeFileSync(
      `./src/ts/${name}.ts`,
      prefixWithGeneratedWarning(
        generateJsConstants({
          chainId,
          addresses: {
            ...addresses,
            CHAIN_ID: { value: chainId, type: 'uint256' },
          },
        }).join('\n'),
      ),
    );

    results.js.push(`export * as ${name} from './${name}';`);
    results.solidity.push(`import {${name}} from './${name}.sol';`);
  });

  return results;
}
