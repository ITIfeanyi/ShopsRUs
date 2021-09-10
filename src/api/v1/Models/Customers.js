const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Input the name field to complete the registration"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Input the email field to complete the registration"],
  },
  is_affiliated: {
    type: Boolean,
    default: false,
  },
  is_employee: {
    type: Boolean,
    default: false,
  },
  invoiceId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Invoices" }],
  createdAt: { type: Date, default: Date.now },
});

const Customer = mongoose.model("Customers", CustomerSchema);

module.exports = Customer;
