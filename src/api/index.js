const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

const customerRoute = require("./v1/Routes/customer");
const discountRoute = require("./v1/Routes/discount");
const invoiceRoute = require("./v1/Routes/invoice");

app.get("/test", (req, res) => {
  res.status(201).json({ msg: "helo" });
});

app.use("/api/v1", customerRoute);
app.use("/api/v1", discountRoute);
app.use("/api/v1", invoiceRoute);

module.exports = app;
