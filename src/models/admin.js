const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {JWT_ADMIN} = require("../../config/app-config")
const {appConstant} = require("../../config/app-constants/constants")
const { appConstants } = require("../../config/app-constant/constant")
const {errors:{dbErrors, errorMessage}} = appConstants
const adminSchema = new mongoose.Schema({
      userName:{
          type:String,
          trim:true,
          required:true,
          minlength:5,
          maxLength:50
      },
      email:{
          type:String,
          required:true,
          unique:true,
          trim:true,
          validate(value){
              if(!validator.isEmail(value)){
                        throw new error(errorMesage.invalidEmail)
              }
          }
      },
      password:{
          type:String,
          required:true,
          trim:true,
          minlength:8
      },
      //here adding role for admin
      role:{
          type:String,
          maxlength:13,
          validate(value){
              if(value !== "admin-solace" && value !=="admin")throw new Error("Role is Invalid")
          }
      }
})

const Admin = mongoose.model("admin" , adminSchema)
module.exports = Admin