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
  age: {
    notEmpty: {
      errorMessage: "age must not be empty",
    },
  },
};
