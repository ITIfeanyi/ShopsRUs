const express = require("express");

const router = express.Router();

const {
  getAllCustomer,
  createNewCustomer,
  findOneCustomerById,
  findOneCustomerByName,
} = require("../Controllers/customerController");

router.get("/getall/customer", getAllCustomer);

router.get("/findcustomers/byid/:id", findOneCustomerById);

router.get("/findcustomers/byname/:name", findOneCustomerByName);

router.post("/createcustomers", createNewCustomer);

module.exports = router;
