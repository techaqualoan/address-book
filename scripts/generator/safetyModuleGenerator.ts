import fs from 'fs';
import {
  generateJsConstants,
  generateSolidityConstants,
  prefixWithGeneratedWarning,
  prefixWithPragma,
  wrapIntoSolidityLibrary,
} from './utils';
import { ChainId } from '@bgd-labs/rpc-env';

export const bnbAddressesSafetyModule = {
  name: 'BNB',
  chainId: ChainId.bnb,
  addresses: {
    STK_AAVE: '0x4da27a545c0c5B758a6BA100e3a049001de870f5',
  },
};

export const sepoliaAddressesSafetyModule = {
  name: 'Sepolia',
  chainId: ChainId.sepolia,
  addresses: {
    STK_AAVE: '0x234753D2Cc86a6Ee8d895caEA93A89c048d987Eb',
  },
};

export function generateSafetyModuleAddresses(config: any) {
  const name = `ProtocolSafetyModule${config.name}`;

  let solidityLibrary = wrapIntoSolidityLibrary(
    generateSolidityConstants({chainId: config.chainId, addresses: config.addresses}),
    name,
  );

  fs.writeFileSync(
    `./src/${name}.sol`,
    prefixWithGeneratedWarning(prefixWithPragma(solidityLibrary)),
  );
  fs.writeFileSync(
    `./src/ts/${name}.ts`,
    prefixWithGeneratedWarning(
      generateJsConstants({
        chainId: config.chainId,
        addresses: {...config.addresses, CHAIN_ID: {value: config.chainId, type: 'uint256'}},
      }).join('\n'),
    ),
  );
  return {
    js: [`export * as ${name} from './${name}';`],
    solidity: [`import {${name}} from './${name}.sol';`],
  };
}
