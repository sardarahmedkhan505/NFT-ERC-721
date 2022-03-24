const secrets = require('./secrets.json');
const PrivateKey = secrets.key;
const PublicKey = secrets.Public_Key;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(secrets.url);
const contract = require("./artifacts/contracts/AhmedNft.sol/ahmedNFT.json");
// console.log(JSON.stringify(contract.abi));
const contractAddress = "0xfD1e4b977F3492f02C17f5D1C911E9B2135a99e8";
const nftContract = new web3.eth.Contract(contract.abi,contractAddress);

async function mintNFT(tokenURI) {
    const nonce = await web3.eth.getTransactionCount(PublicKey);
    const tx = {
        from : PublicKey,
        to : contractAddress,
        nonce : nonce,
        gas : 500000,
        data : nftContract.methods.mintAhmedNFT(PublicKey,tokenURI).encodeABI()
    }

    const signPromise = web3.eth.accounts.signTransaction(tx,PrivateKey);
  signPromise
    .then((signedTx) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log(
              "The hash of your transaction is: ",
              hash,
              "\nCheck Alchemy's Mempool to view the status of your transaction!"
            );
          } else {
            console.log(
              "Something went wrong when submitting your transaction:",
              err
            );
          }
        }
      );
    })
    .catch((err) => {
      console.log(" Promise failed:", err);
    });
}
mintNFT("https://gateway.pinata.cloud/ipfs/QmReyYb4AruGA7JvwBa3TpQXKtLdwuHxuHHHrDbaBn6pm1");
//The hash of your transaction is:  0x81aea46284f918aa1868bab40df52f2ffcada88b7838fe509a43a8914a1f0bb2 