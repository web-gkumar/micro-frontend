const mongoose = require('mongoose');
const { fileUpload } = require('../models/fileuplod_schema');




const fileController = async (req, res) => {

    try {

        
        res.status(200).send({succcess:true, msg: error});
      } catch (error) {
        res.status(400).send({succcess:false, msg: error});
      }
    // try {
    //   const dynamicModel = mongoose.model(req.body.pojo, fileUpload);
    //   let moduleItem = new dynamicModel(req.body);
    //   await moduleItem.save();
    //   res.status(201).json({ message: 'Form Successfully Saved', data: moduleItem });
    // } catch (error) {
    //   res.status(400).send(error);
    // }
  }



module.exports = {
    fileController
}