var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('c0c0c0c0'),
  addressVersion: 0x2F,
  privKeyVersion: 176,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('3864908c81344692075f051b011c762e195ccdb1003673ffbf5132b53058feed'),
    merkle_root: hex('165a1f0aa819fa4612ff950e1f062a1ad7371d83bf66b334c2d706867a5ca8d2'),
    height: 0,
    nonce: 2151022,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1388528588,
    bits: 486604799,
  },
  dnsSeeds: [
    'dnsseed.pesetacoin.info'
  ],
  defaultClientPort: 16638
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
  ],
  defaultClientPort: 1111
};
