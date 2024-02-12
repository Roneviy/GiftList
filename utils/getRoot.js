const niceList = require('./niceList.json');
const MerkleTree = require('./MerkleTree');

const merkleTree = new MerkleTree(niceList);
const root = merkleTree.getRoot();
console.log(root);