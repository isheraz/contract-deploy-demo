const express = require("express");
const router = express.Router();
const Web3 = require("web3");
const ganache = require("ganache");

/* GET users listing. */
router.get("/wallets", async (req, res, next) => {
  const rpcURL = "http://127.0.0.1:7545";
  var web3 = new Web3(rpcURL);

  accounts = await Promise.all(
    (
      await web3.eth.personal.getAccounts()
    ).map(async (wallet) => ({
      wallet,
      balance: `${web3.utils.fromWei(
        await web3.eth.getBalance(wallet)
      )} ethers`,
    }))
  );
  res.json(accounts);
});

module.exports = router;
