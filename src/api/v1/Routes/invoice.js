const express = require("express");

const router = express.Router();

const { createNewInvoice } = require("../Controllers/invoiceController");

router.post("/invoice", createNewInvoice);
module.exports = router;
