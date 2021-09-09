const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
require("./config/dbConnection");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const customerRoute = require("./Routes/customer");
const discountRoute = require("./Routes/discount");
const invoiceRoute = require("./Routes/invoice");

app.use("/api/v1", customerRoute);
app.use("/api/v1", discountRoute);
app.use("/api/v1", invoiceRoute);

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => console.log(`App running on PORT ${PORT}`));
}

module.exports = app;
