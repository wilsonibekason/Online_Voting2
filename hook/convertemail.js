function convertEmail(email) {
  const emailParts = email.split("@");
  const username = emailParts[0];
  const domain = emailParts[1];

  const usernameRegex = /(?<=.).(?=.*@)/g; // Matches all characters except the first and last character
  const maskedUsername = username.replace(usernameRegex, "*");

  return `${maskedUsername}@${domain}`;
}

module.exports = convertEmail;
