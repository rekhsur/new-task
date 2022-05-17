const adminValidation = require("./admin-validation-schema")
const validation = (validationType,data)=>{
    switch(validationType){
        case "adminSignup"
        : return adminValidation.adminSignupValidationSchema.validateAsync(data,{
            abortEarly:false
        })
    }
}

module.exports = validation