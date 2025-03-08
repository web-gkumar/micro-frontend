const UserModel = require("../models/auth_schema");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const registerUser = async (req,res) => {
  const userModel = new UserModel(req.body);
  userModel.password = await bcrypt.hash(req.body.password, 10);
  try {
      const { email } = req.body;
      const existingUser = await UserModel.findOne({email});
      if (existingUser) {
        return res.status(400).json({ message: 'User already registered with this email.' });
      }else {
        const response = await userModel.save();
        response.password = undefined;
        return res.status(201).json({message: 'Registation Success'})
      }
  } catch (error) {
    return res.status(500).json({message: 'error', error})
  }
}

const loginUser = async (req,res) => {
  try {
    const { email } = req.body;
    const user = await UserModel.findOne({email});
    if (!user) {
      return res.status(401).json({ message: 'Invalid username/password' })
    }
    const ispassEquel = await bcrypt.compare(req.body.password, user.password)
    if(!ispassEquel){
      return res.status(401).json({ message: 'Invalid username/password' })
    }
    const loginUser = {
      _id: user.id,
      fullName: user.fullName,
      email: user.email
    }
    const jwtoken = jwt.sign(loginUser, process.env.SECRET, {expiresIn: '2d'});
    return res.status(200).json({jwtoken});

  } catch (error) {
    return res.status(500).json({ message: 'error', error });
  }
}


const getUsers  = async(req,res) => {
  try {
    const users = await UserModel.find({},{password: 0});
    return res.status(200).json({data : users});

  } catch (error) {
    return res.status(500).json({message: 'error', error})
  }
}





module.exports = { registerUser, loginUser, getUsers}