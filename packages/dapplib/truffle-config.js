require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'give narrow frown ski story riot pitch essay impulse light army gentle'; 
let testAccounts = [
"0x30b616ad115d5a8d71044618e7347275025bc9f8414480b28b65cb849f94c2f5",
"0x7eab64f0c03a49bf24d18265758aeec6f57c5149848d2e57a337e6b24d893cd3",
"0x2034342b2059ec46af17f6a445554a3fd5ba8b5297bf1ccee88f406fbaf607a1",
"0x7737b6bacbf00e7ea6d41ffc8e238ee055a80d1718b13ea2db065c9188ae60df",
"0x1e5f8eb3ed3b9080f0c0798d2a388505853606e7177c8bf423ed83eaa62dfa73",
"0x66370b1f2fa0ed30a264136b051085421da42c85d04eacb01094f36ad2258681",
"0x464a339a7d68b99720932a812bba873591519b6279fd9f0dc0f159adefdbba9e",
"0x4cb67ee9b7415aba8746da7206f0ad7754bd8563b4f0c80ff99979d91588b1cc",
"0x04bea059758efe77321adc66f42bf732195e1df97fd48ddf1b2cc61d68c4e3ac",
"0x998499ed4cf702d162ef2e9556668a911bdffeebbaf6455e1bb87fba7b61dbbe"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

