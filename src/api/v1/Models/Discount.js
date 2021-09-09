const mongoose = require("mongoose");

const DiscountSchema = new mongoose.Schema({
  discountType: {
    type: String,
    unique: true,
  },
  discountPercentage: {
    type: Number,
  },
});

const Discount = mongoose.model("Discount", DiscountSchema);

module.exports = Discount;
