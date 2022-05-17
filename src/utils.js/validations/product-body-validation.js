const joi = require("joi")

class ProductValidation{
    constructor(){
        this.newProductValidationSchema=joi.object({
            productName:joi.string().required().min(2).max(500),modelNo:joi.String().lowercase().requiresd(),
        })
    }
    }

const productValidationObject = new ProductValidation()
module.exports = productValidationObject