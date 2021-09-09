function handleDiscountTypeError(err) {
  let errors = { path: "", message: "" };
  const [discountType] = Object.keys(err.keyPattern);

  if (discountType === "discountType") {
    errors.path = "discountType";
    errors.message = "This discount type already exist.";
  }

  return errors;
}

module.exports = {
  handleDiscountTypeError,
};
