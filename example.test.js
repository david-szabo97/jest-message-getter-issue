const { ErrorMessageGetter } = require("./error-message-getter");

it("should return the error message", () => {
  const errorMessageGetter = new ErrorMessageGetter("Error message");
  expect(errorMessageGetter.message).toBe("Error message is: Error message");
});
