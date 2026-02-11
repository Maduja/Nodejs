export const createUserValidationSchema = {
    user_name:{
        notEmpty:{
            errorMessage:"username must not be empty"
        }
    }
}