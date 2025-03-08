const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const collectionSchema = new mongoose.Schema({
    pojo: { type: String},
}, { strict: false });


module.exports = {
    collectionSchema
}


