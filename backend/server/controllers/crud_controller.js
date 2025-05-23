const mongoose = require('mongoose');

const create = async (req, res) => {
  const collectionName = req.body.collectionName;
  if (!collectionName) {
    return res.status(400).json({ message: 'collectionName is required' });
  }
  const dynamicSchema = new mongoose.Schema({}, { strict: false });
  try {
    const DynamicModel = mongoose.models[collectionName] || mongoose.model(collectionName, dynamicSchema, collectionName);
    const document = new DynamicModel(req.body); // Save all data from body
    await document.save();
    res.status(201).json({ message: 'Data saved successfully', data: document });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving data', error: error.message });
  }
};


const getAll = async (req, res) => {
  const { collectionName } = req.body;
  if (!collectionName) {
    return res.status(400).json({ message: 'collectionName is required' });
  }
  try {
    const dynamicSchema = new mongoose.Schema({}, { strict: false });
    const DynamicModel = mongoose.models[collectionName] || mongoose.model(collectionName, dynamicSchema, collectionName);
    const data = await DynamicModel.find({});
    res.status(200).json({ message: 'Success', data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving data', error: error.message });
  }
};


const updateitem = async (req, res) => {
    const { collectionName } = req.body;
    if (!collectionName) {
      return res.status(400).json({ message: 'collectionName is required' });
    }
  try {
    const dynamicSchema = new mongoose.Schema({}, { strict: false });
    const DynamicModel = mongoose.models[collectionName] || mongoose.model(collectionName, dynamicSchema, collectionName);
    const moduleItem = await DynamicModel.findByIdAndUpdate(req.params.id, req.body);
    if (!moduleItem) {
      return res.status(404).json({ message: 'Data Id not Match' });
    }
    res.status(200).json({ message: 'Update Successfull', data: moduleItem });
  } catch (error) {
    res.status(400).send(error);
  }
}



const deleteitem = async (req, res) => {
   const { collectionName } = req.body;
    if (!collectionName) {
      return res.status(400).json({ message: 'collectionName is required' });
    }

  try {
    const dynamicSchema = new mongoose.Schema({}, { strict: false });
    const DynamicModel = mongoose.models[collectionName] || mongoose.model(collectionName, dynamicSchema, collectionName);
    const moduleItem = await DynamicModel.findByIdAndDelete(req.params.id);
    if (!moduleItem) {
      return res.status(404).json({ message: 'Data Id not Match'});
    }
    res.status(200).json({ message: 'Data Successfull Deleted' });
  } catch (error) {
    res.status(500).send(error);
  }
}



module.exports = {create, getAll, updateitem, deleteitem}