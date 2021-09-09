const moment = require("moment");

function userCreatedTwoYearsAndAbove(createdAt) {
  const created = moment(createdAt);
  const now = moment(new Date());
  const upToTwoYears = now.diff(created, "years");

  return upToTwoYears;
}

module.exports = {
  userCreatedTwoYearsAndAbove,
};
