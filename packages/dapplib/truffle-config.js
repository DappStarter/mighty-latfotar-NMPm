require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope enroll sure trophy name renew magic mimic hunt perfect frame gate'; 
let testAccounts = [
"0xcce14dcc7654da69ae986bdc63a89f1f5d09506bb8b00e7de81224178da3e460",
"0x17493e10c2effa58cee8a18498d124ce27867b01ae4535e5cd373d2d471db358",
"0xc81a0595c60cb89e6ec23add9c16475ccaae084e68b4b72a677e4a82a44cf91c",
"0x2c0f549596755736f2cc1d50231c49f8e476d66bcbe6833bdf8544553f55c08e",
"0xfd35e00094177b141d7686ca70dea2f79e0c4c0ae9139213ffe3c2766edacc87",
"0x71448c253c621c8857864d061174892c31c1ea030abf92bc74844e7a64660024",
"0x88a7d4d23699c2e4a296f35404774e69dec5cb7399f96de61d2c4ed84727be42",
"0x2b6d73e1203307c93bdd84e249807de5e6e3e1f763d5ea805b94c18e0a2b7c00",
"0x9065ead1a7b0b253eb2d5f2a8704617ba031063a6ec3e9775cff5f2195cf4890",
"0x244c08106f6ccbb26b435eb82029d97201987ee2466ed155dd03c7653dc0d7f0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


