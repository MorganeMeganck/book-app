const yup = require("yup");

const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).+$/;
const pwdRegexMsg = "Your password is too weak :o";

const registerValidator = yup.object().shape({
  email: yup.string().trim().lowercase().required().email().max(255),
  password: yup
    .string()
    .required()
    .min(8)
    .max(64)
    .matches(pwdRegex, pwdRegexMsg),
});

const loginValidator = yup.object().shape({
  email: yup.string().trim().required(),
  password: yup.string().required(),
});

module.exports = {
  registerValidator,
  loginValidator,
};
