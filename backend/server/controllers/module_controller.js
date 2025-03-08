const {moduleSchema} = require('../models/module_schema');


const createModule = async (req, res) => {
    const moduleItem = new moduleSchema(req.body);
    try {
      await moduleItem.save();
      res.status(201).json({message: 'Success', data:moduleItem});
    } catch (error) {
      res.status(400).send(error);
    }
  }


const getModules = async (req, res) => {
    try {
      const moduleItem = await moduleSchema.find({});
      res.status(200).json({message: 'Success', data:moduleItem});
    } catch (error) {
      res.status(500).send(error);
    }
}

const getCurrentModule = async (req, res) => {
  try {
    const formItem = await moduleSchema.findOne({ moduleName: req.params.moduleName});
    if (!formItem) return res.status(404).json({ message: 'Form not found' });
    formItem['isFormCreations'] = false;
    res.status(200).json({ message: 'Success', data: formItem });
  } catch (error) {
    res.status(500).send(error);
  }
}


const updatModule = async (req, res) => {
    try {
      const moduleItem = await moduleSchema.findByIdAndUpdate(req.params.id, req.body);
      if (!moduleItem) {
        return res.status(404).json({message: 'Data Id not Match'});
      }
      res.status(200).json({message: 'Update Successfull', data:moduleItem});
    } catch (error) {
      res.status(400).send(error);
    }
  }

const deleteModule = async (req, res) => {
    try {
      const moduleItem = await moduleSchema.findByIdAndDelete(req.params.id);
      if (!moduleItem) {
        return res.status(404).json({message: 'Data Id not Match'});
      }
      res.status(200).json({message: 'Data Successfull Deleted'});
    } catch (error) {
      res.status(500).send(error);
    }
  }




module.exports = {createModule, getModules, getCurrentModule, updatModule, deleteModule}