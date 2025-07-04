//responsible for connection
const mongoose = require('mongoose')

//conects to mongodb using mongoose
const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully")
    } catch (error) {
        console.error("MongoDB Connection failed: ", error.message)
        process.exit(1)
    }
}

module.exports = connectDB;