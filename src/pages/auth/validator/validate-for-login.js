import Joi from 'joi'

const loginSchema = Joi.object({
    userName: Joi.string().required().messages({
        'string.empty' :' Username is required'

    }),

    password: Joi.string().required().messages({
        'string.empty' :' Password is required'
        
    }) 
})

export default input => {
    const {error} = loginSchema.validate(input,{abortEarly:false});
    if (error) {
        return error.details.reduce((acc,el) => {
        acc[el.path[0]] = el.message
        return acc
         }, {})
   
    }


}