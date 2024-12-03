import 'dotenv/config';
import {appendFileSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync} from 'fs';
import { sepoliaProtoV3, mainnetProtoV3Pool } from './configs/pools/ethereum';
import {bnbProtoV3} from './configs/pools/bnb';
import {generateGovernanceLibrary} from './generator/governanceV3Generator';
import {generateProtocolV3Library} from './generator/protocolV3Generator';
import {prefixWithGeneratedWarning, prefixWithPragma} from './generator/utils';
import {generateSafetyModuleAddresses, sepoliaAddressesSafetyModule, bnbAddressesSafetyModule} from './generator/safetyModuleGenerator';
import {generateABIImports} from './generator/abis';
import {governanceConfigBNB} from './configs/governance/bnb';
import {governanceConfigMainnet, governanceConfigSepolia} from './configs/governance/ethereum';
import {generateNetworkAddresses} from './generator/networkGenerator';
import {sepoliaAddresses, ethereumAddresses} from './configs/networks/ethereum';
import {bnbAddresses} from './configs/networks/bnb';
import {generateTokenList} from './generator/generateTokenList';

async function main() {
  // cleanup ts artifacts
  if (existsSync('./src/ts')) {
    const files = readdirSync('./src/ts');
    for (const file of files) {
      if (file !== 'abis') rmSync(`./src/ts/${file}`);
    }
  } else {
    mkdirSync('./src/ts');
  }

  // generate files
  const governanceNames = await Promise.all(
    [
      governanceConfigSepolia,
      governanceConfigBNB,
      governanceConfigMainnet,
    ].map((config) => generateGovernanceLibrary(config)),
  );

  const v3LibraryNames = await Promise.all(
    [
      sepoliaProtoV3,
      bnbProtoV3,
      mainnetProtoV3Pool,
    ].map((config) => generateProtocolV3Library(config)),
  );

  const tokenListImports = await generateTokenList([...v3LibraryNames]);
  console.log('✅ Tokens list generation finished');

  const networkAddresses = [
    bnbAddresses,
    sepoliaAddresses,
    ethereumAddresses,
  ].map((addresses) => generateNetworkAddresses(addresses));

  const smAddresses = [
    bnbAddressesSafetyModule,
    sepoliaAddressesSafetyModule,
  ].map((addresses) => generateSafetyModuleAddresses(addresses))

  const abis = generateABIImports();

  writeFileSync('./src/ts/abis/index.ts', abis.join('\n'));

  const imports = [
    governanceNames,
    v3LibraryNames,
    networkAddresses,
    smAddresses,
    tokenListImports,
  ].flat();

  const jsExports = imports.map((f) => f.js).flat();
  writeFileSync(`./src/ts/AddressBook.ts`, prefixWithGeneratedWarning(''));
  jsExports.map((jsExport) => appendFileSync('./src/ts/AddressBook.ts', `${jsExport}\n`));

  const solidityImports = imports.map((f) => f.solidity).flat();

  writeFileSync(`./src/AddressBook.sol`, prefixWithGeneratedWarning(prefixWithPragma('')));
  solidityImports.map((solExport) => appendFileSync('./src/AddressBook.sol', solExport));

  console.log('✅ Generation finished');
}

main();
