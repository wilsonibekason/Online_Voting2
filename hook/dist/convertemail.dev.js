"use strict";

function convertEmail(email) {
  var emailParts = email.split("@");
  var username = emailParts[0];
  var domain = emailParts[1];
  var usernameRegex = /(?<=.).(?=.*@)/g; // Matches all characters except the first and last character

  var maskedUsername = username.replace(usernameRegex, "*");
  return "".concat(maskedUsername, "@").concat(domain);
}

module.exports = convertEmail;