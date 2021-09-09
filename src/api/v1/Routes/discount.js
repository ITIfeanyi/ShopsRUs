const express = require("express");

const router = express.Router();

const {
  getAllDiscount,
  createDiscount,
  specificPercentage,
} = require("../Controllers/discountController");

router.get("/getall/discount", getAllDiscount);

router.post("/creatediscount", createDiscount);

router.get("/specificpercentage/:type", specificPercentage);

module.exports = router;
