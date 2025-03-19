const mongoose = require('mongoose');
const {DATABASE_URL} = process.env;


const connectDB = async () => {
    try {
        
        await mongoose.connect(DATABASE_URL);
        console.log("database Successfull connected...")

        
    } catch (error) {
       console.error("Dababase Not Connected...",error);
       process.exit(0);
    }
}
module.exports = connectDB;