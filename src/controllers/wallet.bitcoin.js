const  { PrivateKey, PublicKey } = require("bitcore-lib");

const { mainnet, testnet } = require("bitcore-lib/lib/networks");
const Mnemonic = require("bitcore-mnemonic");

const createWallet = (network = mainnet) => {

  var privateKey = new PrivateKey();
  var address = privateKey.toAddress(network);
  var publicKey = new PublicKey(privateKey)
  return {
    privateKey: privateKey.toString(),
    address: address.toString(),
    publicKey: publicKey.toString()
  };
};

















/**
A Hierarchical Deterministic (HD) wallet is the term used to describe a wallet which uses a seed to derive public and private keys
**/
/* 
const createHDWallet = (network = testnet) => {
  let passPhrase = new Mnemonic(Mnemonic.Words.SPANISH);
  let xpriv = passPhrase.toHDPrivateKey(passPhrase.toString(), network);

  return {
    xpub: xpriv.xpubkey,
    privateKey: xpriv.privateKey.toString(),
    address: xpriv.publicKey.toAddress().toString(),
    mnemonic: passPhrase.toString(),
  };
}; */

module.exports = {
  createHDWallet,
  createWallet,
};