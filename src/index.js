const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
require("../config/db/setup")
const {PORT} = require("../config/app-config")
const adminRouter = require("./routes/admin/admin")
const port = PORT
const app = express()

app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(adminRouter)

app.get("/", (req, res) => {
    res.send("server is runing")
})
app.listen(port, () => {
    console.log(`server is runing at http://127.0.0.1:${port}`)
})