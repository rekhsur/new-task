const mongoose = require("mongoose")
const {DB_URL} = require("../app-config")

mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    autoIndex:false
},(error)=>{
    if(error){
        console.log(error.message)
    }
})
