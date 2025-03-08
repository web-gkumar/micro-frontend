const mongoose = require('mongoose');
const { formcontrolSchema } = require('../models/formcontrol_schema');

const createForm = async (req, res) => {
  const moduleItem = new formcontrolSchema(req.body);
  try {
    await moduleItem.save();
    res.status(201).json({ message: 'Form Successful Created', data: moduleItem });
  } catch (error) {
    res.status(400).send(error);
  }
}

const getForms = async (req, res) => {
  try {
    const moduleItem = await formcontrolSchema.find({});
    res.status(200).json({ message: 'Success', data: moduleItem });
  } catch (error) {
    res.status(500).send(error);
  }
}

const getFormbyId = async (req, res) => {
  try {
    const formItem = await formcontrolSchema.findById(req.params.id);
    if (!formItem) return res.status(404).json({ message: 'Form not found' });
    formItem['isFormCreations'] = false;
    res.status(200).json({ message: 'Success', data: formItem });
  } catch (error) {
    res.status(500).send(error);
  }
}



const getSingleForm = async (req, res) => {
  try {
    const formItem = await formcontrolSchema.findOne({ formName: req.params.formName});
    if (!formItem) return res.status(404).json({ message: 'Form not found' });
    formItem['isFormCreations'] = false;
    res.status(200).json({ message: 'Success', data: formItem });
  } catch (error) {
    res.status(500).send(error);
  }
}


const updatForm = async (req, res) => {
  try {
    const moduleItem = await formcontrolSchema.findByIdAndUpdate(req.params.id, req.body);
    if (!moduleItem) {
      return res.status(404).json({ message: 'Data Id not Match' });
    }
    res.status(200).json({ message: 'Update Successfull', data: moduleItem });
  } catch (error) {
    res.status(400).send(error);
  }
}

const deleteForm = async (req, res) => {
  try {
    const moduleItem = await formcontrolSchema.findByIdAndDelete(req.params.id);
    if (!moduleItem) {
      return res.status(404).json({ message: 'Data Id not Match'});
    }
    res.status(200).json({ message: 'Data Successfull Deleted' });
  } catch (error) {
    res.status(500).send(error);
  }
}




module.exports = { createForm, getForms, getSingleForm, getFormbyId, updatForm, deleteForm }