const Joi = require("joi")

const validator = (schema) => (payload) => {
    return schema.validate(payload , {abortEarly:false})
}

const dataSchema = Joi.object({
    name : Joi.string().required(),
    rating : Joi.number().required(),
    timing : Joi.string().required(),
    location : Joi.string().required(),
    imageUrl : Joi.string().required(),
    direction : Joi.string().required()
})
let validateData = validator(dataSchema)

module.exports = {validateData}