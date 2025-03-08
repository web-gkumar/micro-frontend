const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName : { type : String, required : true},
    email: { type: String, required: true, unique: true},
    mobile: { type: Number, required: true},
    password: { type: String, required: true},
    createdAt: { type: Date, default: Date.now}
});






const userModel = mongoose.model('app_users', userSchema)
module.exports = userModel;