
//import 
const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")

//object
const app = express()

//middleware 
app.use(express())
app.use(express.json())


//Server route
app.get("/", (req, res)=>{
    res.send("<h1>Welcome to server<h1/>")
})


//listen 
PORT = 3000

app.listen(PORT,()=>{
    console.log(`Server is Running on http://localhost:${PORT}`);
})
