const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tabSchema = new Schema({
    tabName : {type : String},
    tabIcon  : {type : String},
    tabFormName: {type : String},
})



const menuSchema = new Schema({
    menuName : {type : String},
    menuIcon  : {type : String},
    menuFormName: {type : String},
    tablist: [tabSchema]
})


const setModuleSchema = new Schema({
    moduleName : { type : String, required : true},
    moduleIcon: { type: String},
    moduleform: { type: String},
    menulist: [menuSchema]
}, { strict: false}, {timestamps: true}
);







const moduleSchema = mongoose.model('app_modules', setModuleSchema)
module.exports = {moduleSchema};