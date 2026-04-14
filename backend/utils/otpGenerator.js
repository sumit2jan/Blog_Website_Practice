const otpGeneration = require("otp-generator");

const generateOTP = (length = 6) => {
  otpGeneration.generate(length, {
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false,
    numbers: true,
  });
};

module.exports = { generateOTP };
