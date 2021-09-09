const Discount = require("../Models/Discount");
const Invoice = require("../Models/Invoice");

const {
  calculateTotalAmountAndDiscount,
} = require("../utils/calculateDiscount_totalAmount");
const { calculate$100OnBill } = require("../utils/every$100OnBill");
const { findOneCustomer } = require("../utils/findOneCustomer");
const {
  userCreatedTwoYearsAndAbove,
} = require("../utils/userCreatedTwoYearsAndAbove");
const { handleError } = require("../utils/handleError500");

module.exports = {
  createNewInvoice: async (req, res) => {
    try {
      const { bill, customer_id } = req.body;

      //checks if user exist at all
      const found_customer = await findOneCustomer(customer_id);
      if (!found_customer) {
        return handleError(res, "No customer with such id exist", 404);
      }

      //check the year of the found_customer.createdAt
      const userCreatedTwoYear = userCreatedTwoYearsAndAbove(
        found_customer.createdAt
      );

      // user is an affiliate of the store, user gets a 10% discount
      if (found_customer.is_affiliated) {
        //get discount from db
        const { discountPercentage } = await Discount.findOne({
          discountType: "affiliate of the store",
        });

        const { totalAmountBeforeDiscount, discountValue } =
          calculateTotalAmountAndDiscount(bill, discountPercentage / 100);

        if (totalAmountBeforeDiscount <= 0) {
          return handleError(res, "total amount less than zero", 400);
        }

        const newInvoice = await new Invoice({
          bill,
          customer_id,
          totalAmountBeforeDiscount,
          discount: discountValue,
          totalAmountAfterDiscount: totalAmountBeforeDiscount - discountValue,
        });
        await newInvoice.save();

        found_customer.invoiceId.push(newInvoice._id);

        await found_customer.save();

        return res.status(200).json({
          ok: true,
          invoice: bill,
          totalAmountBeforeDiscount,
          discountValue,
          totalAmountAfterDiscountSubracted:
            totalAmountBeforeDiscount - discountValue,
          user_isAffliated: true,
          discountValue,
          user: found_customer,
        });
      } else if (found_customer.is_employee) {
        //user is an employee of the store, user gets a 30% discount

        //get discount from db
        const { discountPercentage } = await Discount.findOne({
          discountType: "employee of the store",
        });

        const { totalAmountBeforeDiscount, discountValue } =
          calculateTotalAmountAndDiscount(bill, discountPercentage / 100);

        if (totalAmountBeforeDiscount <= 0) {
          return res.status(400).json({
            ok: false,
            message: "total amount less than zero",
          });
        }

        const newInvoice = await new Invoice({
          bill,
          customer_id,
          totalAmountBeforeDiscount,
          discount: discountValue,
          totalAmountAfterDiscount: totalAmountBeforeDiscount - discountValue,
        });
        await newInvoice.save();

        found_customer.invoiceId.push(newInvoice._id);

        await found_customer.save();

        return res.status(200).json({
          ok: true,
          invoice: bill,
          totalAmountBeforeDiscount,
          discountValue,
          totalAmountAfterDiscountSubracted:
            totalAmountBeforeDiscount - discountValue,
          user_isEmployee: true,
          discountValue,
          user: found_customer,
        });
      } else if (userCreatedTwoYear) {
        //user has been a customer for over 2 years, user gets a 5% discount

        const { discountPercentage } = await Discount.findOne({
          discountType: "customer for over 2 years",
        });

        const { totalAmountBeforeDiscount, discountValue } =
          calculateTotalAmountAndDiscount(bill, discountPercentage / 100);

        if (totalAmountBeforeDiscount <= 0) {
          return handleError(res, "total amount less than zero", 400);
        }

        const newInvoice = await new Invoice({
          bill,
          customer_id,
          totalAmountBeforeDiscount,
          discount: discountValue,
          totalAmountAfterDiscount: totalAmountBeforeDiscount - discountValue,
        });
        await newInvoice.save();

        found_customer.invoiceId.push(newInvoice._id);

        await found_customer.save();

        return res.status(200).json({
          ok: true,
          invoice: bill,
          totalAmountBeforeDiscount,
          discountValue,
          totalAmountAfterDiscountSubracted:
            totalAmountBeforeDiscount - discountValue,
          user_iscreatedOverTwoYear: true,
          discountValue,
          user: found_customer,
        });
      } else {
        //For every $100 on the bill, there would be a $5 discount (e.g. for $990, you get $45 as a discount)

        const { discountPercentage } = await Discount.findOne({
          discountType: "For every $100 on the bill",
        });

        const { totalAmountBeforeDiscount, discountValue } =
          calculate$100OnBill(bill, discountPercentage);

        if (totalAmountBeforeDiscount <= 0) {
          return handleError(res, "total amount less than zero", 400);
        }

        const newInvoice = await new Invoice({
          bill,
          customer_id,
          totalAmountBeforeDiscount,
          discount: discountValue,
          totalAmountAfterDiscount: totalAmountBeforeDiscount - discountValue,
        });
        await newInvoice.save();

        found_customer.invoiceId.push(newInvoice._id);

        await found_customer.save();

        return res.status(200).json({
          ok: true,
          invoice: bill,
          totalAmountBeforeDiscount,
          discountValue,
          totalAmountAfterDiscountSubracted:
            totalAmountBeforeDiscount - discountValue,
          over$100Bill: discountValue > 0 ? true : false,
          discountValue,
          user: found_customer,
        });
      }
    } catch (error) {
      return handleError(res, error, 500);
    }
  },
};
