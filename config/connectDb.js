const mongoose = require('mongoose');
const colors = require("colors");

const connectDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database connected ${mongoose.connection.host}`.bgYellow.white);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb;