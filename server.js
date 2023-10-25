
//import 
const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")

//object
const app = express()

//middleware 
app.use(express())
app.use(express.json())
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({extended:false}))


//Server route
app.get("/", (req, res)=>{
    res.send("<h1>Welcome to server<h1/>")
})

app.post("/contact-form",(req, res)=>{
    const {inputData} = req.body
    res.json({
        success: true,
        message: `Welcome to ${inputData}`
    })
})


//listen 
PORT = 3000

app.listen(PORT,()=>{
    console.log(`Server is Running on http://localhost:${PORT}`);
})
