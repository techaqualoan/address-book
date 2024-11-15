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
