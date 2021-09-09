function handleErrorEmail_Name(err) {
  let errors = { path: "", message: "" };
  const [email] = Object.keys(err.keyPattern);
  const [name] = Object.keys(err.keyPattern);

  if (email === "email") {
    errors.path = "email";
    errors.message = "Email already in use";
  } else if (name === "name") {
    errors.path = "name";
    errors.message = "Name already in use";
  }

  return errors;
}

module.exports = {
  handleErrorEmail_Name,
};
