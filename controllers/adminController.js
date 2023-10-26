const getAdmin = (req, res)=>{
    res.send("<h1>Welcome to Admin Pannel</h2>")
}

const addAdmin = (req, res)=>{
    const {name, role} = req.body
    res.send({
        success: true,
        message : `Hello, ${name}. Your role is ${role}`
    })
}

module.exports = {getAdmin, addAdmin}