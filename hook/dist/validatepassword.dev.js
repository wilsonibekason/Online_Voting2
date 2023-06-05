"use strict";

function validatePassword(password) {
  var regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regex.test(password);
}

module.exports = validatePassword;