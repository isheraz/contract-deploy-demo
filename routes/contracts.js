const express = require("express");
const router = express.Router();
const Web3 = require("web3");
const ganache = require("ganache");

/* GET users listing. */
router.get("/wallets", async (req, res, next) => {
  const options = {address: 'http://127.0.0.1:7545'};
  const provider = ganache.provider(options);
  const accounts = await provider.request({
    method: "eth_accounts",
    params: [],
  });

  res.json({ accounts });
});

module.exports = router;
