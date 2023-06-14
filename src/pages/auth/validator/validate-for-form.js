import Joi from 'joi';

const formSchema = Joi.object({
    firstName: Joi.string()
    .min(3)
    .max(30)
    .trim()
    .required()
    .messages({'string.empty':' Firstname is required'}),
    lastName: Joi.string()
    .min(3)
    .max(30)
    .trim()
    .required()
    .messages({'string.empty':' Lastname is required'}),
    petName: Joi.string()
    .min(3)
    .max(30)
    .trim()
    .required()
    .messages({'string.empty':' Petname is required'}),
    doctorName: Joi.string()
    .min(6)
    .max(30)
    .trim()
    .required()
    .messages({'string.empty':' Doctor name is required'}),


})

const validateForm = input => {
    const {error} = formSchema.validate(input,{abortEarly: false})
    if (error) {   
    return error.details.reduce((acc,el) => {
     acc[el.path[0]] = el.message;
     return acc;
    }, {});
}
}

export default validateForm;
