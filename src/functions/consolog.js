import log from "./log";

const errorResponse = require("../global/error-response");

let consolog = {
  error: async function (err) {
    let defaultError;

    defaultError = errorResponse.general;

    log(`${defaultError}:`, err);

    return {
      result: true
    };
  },
  done: async function (msg, msg2) {
    let defaultMsg;

    defaultMsg = 'Done!';

    log(`${defaultMsg}:`, msg, msg2 ? msg2 : '');

    return {
      result: true
    };
  }
};

export default consolog;