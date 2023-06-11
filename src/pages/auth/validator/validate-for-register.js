import Joi from 'joi';

const registerSchema = Joi.object({
    userName: Joi.string()
    .min(3)
    .max(30)
    .trim()
    .required()
    .messages({'string.empty':'Username is required'}),
    password: Joi.string() .pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).trim()
    .required()
    .messages({'string.empty':'Password is required','string.pattern.base':'Password must be 8 Characters'}),
    userEmail: Joi.string()
    .email({tlds:false})
    .messages({'string.empty':'Email is required'}),
    confirmPassword: Joi.string().valid(Joi.ref('password')).trim()
    .required()
    .messages({'any.only':'Password and Confirm Password does not match','string.empty':'Password is required'}),
})

const validateRegister = input => {
    const {error} = registerSchema.validate(input,{abortEarly: false})
    if (error) {   
    return error.details.reduce((acc,el) => {
     acc[el.path[0]] = el.message;
     return acc;
    }, {});
}
}

export default validateRegister;

