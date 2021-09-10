const Customer = require("../Models/Customers");
const { handleError } = require("../utils/handleError500");
const { handleErrorEmail_Name } = require("../utils/handleErrorName_Email");

module.exports = {
  getAllCustomer: async (req, res) => {
    try {
      const users = await Customer.find({});
      return res.status(200).json({
        ok: true,
        users,
      });
    } catch (error) {
      return handleError(res, error);
    }
  },

  createNewCustomer: async (req, res) => {
    try {
      const { name, email, is_affiliated, is_employee, createdAt } = req.body;
      if (!name || !email) {
        return handleError(
          res,
          "Fields must be completed before registration",
          400
        );
      }

      const newCustomer = new Customer({
        name,
        email,
        is_affiliated,
        is_employee,
        createdAt,
      });

      await newCustomer.save();

      return res.status(201).json({
        ok: true,
        createdUser: newCustomer,
      });
    } catch (error) {
      const err = handleErrorEmail_Name(error);
      return handleError(res, err, 400);
    }
  },

  findOneCustomerById: async (req, res) => {
    try {
      const id = req.params.id;
      const customer = await Customer.findById(id).populate("invoiceId");
      if (!customer) {
        return handleError(res, "No customer exist with such ID", 404);
      }

      return res.status(200).json({ ok: true, customer });
    } catch (error) {
      return handleError(res, error);
    }
  },

  findOneCustomerByName: async (req, res) => {
    try {
      const name = req.params.name;
      const customer = await Customer.findOne({ name }).populate("invoiceId");
      if (!customer) {
        return handleError(res, "No customer exist with such name", 404);
      }
      return res.status(200).json({ ok: true, customer });
    } catch (error) {
      return handleError(res, error);
    }
  },
};
