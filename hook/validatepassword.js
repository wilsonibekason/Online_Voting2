function validatePassword(password) {
  const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regex.test(password);
}

module.exports = validatePassword;
