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



module.exports = {create, getAll}