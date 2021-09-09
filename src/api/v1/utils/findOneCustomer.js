const Customer = require("../Models/Customers");

module.exports = {
  findOneCustomer: async (customer_id) => {
    const customer = await Customer.findById(customer_id);
    if (!customer) {
      return null;
    }
    return customer;
  },
};
