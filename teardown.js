const { ErrorMessageGetter } = require("./error-message-getter");

module.exports = async function () {
  throw new ErrorMessageGetter("We will never see this message :( (teardown)");
};
