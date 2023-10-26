const mongoose = require("mongoose")

const connectdb = async ()=> {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/express")
        console.log(`Database is mongodb ${conn.connection.host}`);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectdb