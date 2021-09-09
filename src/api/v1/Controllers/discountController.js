const Discount = require("../Models/Discount");
const { handleDiscountTypeError } = require("../utils/handleDiscountError");
const { handleError } = require("../utils/handleError500");
module.exports = {
  getAllDiscount: async (req, res) => {
    try {
      const allDiscount = await Discount.find({});
      return res.status(200).json({
        ok: true,
        allDiscount,
      });
    } catch (error) {
      return handleError(res, error);
    }
  },
  createDiscount: async (req, res) => {
    try {
      const { discountType, discountPercentage } = req.body;

      if (!discountType || !discountPercentage) {
        return handleError(
          res,
          error,
          400,
          "All fields are required to create a discount type"
        );
      }
      const newDiscount = new Discount({
        discountType,
        discountPercentage,
      });

      await newDiscount.save();
      return res.status(201).json({
        ok: true,
        newDiscount,
      });
    } catch (error) {
      const err = handleDiscountTypeError(error);
      return handleError(res, err, 400);
    }
  },
  specificPercentage: async (req, res) => {
    try {
      const type = req.params.type;
      const findTypeofDiscount = await Discount.findOne({ discountType: type });

      if (!findTypeofDiscount) {
        return handleError(res, "No such discount type exist", 404);
      }

      return res.status(200).json({
        ok: true,
        discountType: findTypeofDiscount,
      });
    } catch (error) {
      return handleError(res, error, 500);
    }
  },
};
