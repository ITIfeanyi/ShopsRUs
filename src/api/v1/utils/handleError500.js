module.exports = {
  handleError: (res, error = null, code = 500, msg = "An error occured") => {
    return res.status(code).json({
      ok: false,
      message: msg,
      error,
    });
  },
};
