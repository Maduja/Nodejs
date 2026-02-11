export const createUserValidationSchema = {
  user_name: {
    notEmpty: {
      errorMessage: "username must not be empty",
    },
    isLength: {
      options: { min: 3, max: 12 },
      errorMessage: "user name requirements not met",
    },
  },
  password: {
    notEmpty: {
      errorMessage: "password must not be empty",
    },
  },
};
