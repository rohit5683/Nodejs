
//import 
const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const userRoute = require("./routes/userRoute")
const adminRoutes = require("./routes/adminRoutes")
const connectdb = require("./config/dbconnect")



//mongodb function call
connectdb()

//object
const app = express()

//middleware
app.use(express.json())
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({extended:false}))



//Route
app.use("/api/v1/user", userRoute)
app.use("/api/v1/admin", adminRoutes)







//listen 
PORT = 3000

app.listen(PORT,()=>{
    console.log(`Server is Running on http://localhost:${PORT}`);
})
