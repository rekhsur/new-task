const express = require("express")
const Controller = require("../../controllers/admin/adminController")
const adminRouter = express.Router()
adminRouter.post("/admin/signup,Controller.signup")

module.exports = adminRouter