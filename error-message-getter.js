module.exports.ErrorMessageGetter = class ErrorMessageGetter extends Error {
  constructor(message) {
    super();
    this.name = this.constructor.name;

    this._message = message;
  }

  get message() {
    return "Error message is: " + this._message;
  }
};
