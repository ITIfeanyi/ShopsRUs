const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
  bill: [
    {
      item: {
        type: String,
      },
      amount: {
        type: Number,
      },
    },
  ],
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customers",
  },
  totalAmountBeforeDiscount: Number,
  discount: Number,
  totalAmountAfterDiscount: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Invoice = mongoose.model("Invoices", InvoiceSchema);

module.exports = Invoice;
