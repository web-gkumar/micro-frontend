const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const fileUpload = new mongoose.Schema({
    filename: { type: String},
}, { strict: false });


module.exports = {
    fileUpload
}


