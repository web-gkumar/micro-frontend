const { string, number } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;




// Define the validator schema
const validatorSchema = new Schema({
    validatorName: String,
    required: Boolean,
    message: String,
    pattern: String,
    minLength: Number,
    maxLength: Number,
  });
  

  // Define form control values schema (for radio and checkbox)
  const controlValueSchema = new Schema({
    isChecked: Boolean,
    value: String
  });
  
  // Define the form controls schema
  const formControlSchema = new Schema({
    fieldIcons: String,
    name: String,
    label: String,
    value: String,
    placeholder: String,
    class: String,
    disabled: Boolean,
    hideGridFields: Boolean,
    isShowIf: Boolean,
    showField: String,
    showFieldItems: String,
    hideFieldOnConditions: Boolean,
    type: String,
    isMandatory: Boolean,
    formate: String,
    validators: [validatorSchema],
    values: [controlValueSchema]
  });
  
  // Define the form button schema
  const buttonSchema = new Schema({
    btnname: String,
    btnicon: String,
    useto: String,
    isdisabled: Boolean
  });


const formcontrol = new Schema({
    formName: String,
    formicon: String,
    isFormCreations: Boolean,
    gridUpdateMode: Boolean,
    pojo: String,
    isPopup: Boolean,
    isImport: Boolean,
    isPDFDownload: Boolean,
    gridButtons: [buttonSchema],
    formsButtons: [buttonSchema],
    formControls: [formControlSchema],
    createdDate: { type: Date, default: Date.now }
}, {strict: false});


const formcontrolSchema = mongoose.model('app_forms', formcontrol)
module.exports = {formcontrolSchema};