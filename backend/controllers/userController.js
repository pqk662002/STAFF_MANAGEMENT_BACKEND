const User = require("../models/User");
const bcrypt = require("bcrypt");

const userController = {
  //GET ALL USER
  getAllUsers: async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET BY ID
  getById: async (req, res) => {
    try {
      console.log(req.params.id)
      const user = await User.findById(req.params.id);
      if(!user) {
        return res.status(404).json("Can't find user!");
      }
      return res.status(200).json(user);
    } catch (err) {
      return  res.status(500).json(err);
    }
  },


  //UPDATE BY ID
  updateById:async (req, res) => {
    try {
      //console.log(req.params.id)
      const user = await User.findById(req.params.id);
      //console.log(user)
      const updatedUser = req.body;

      if(!user) {
        return res.status(404).json("Can't find user!");
      }
      //Update
      if(updatedUser.username){
        user.username = updatedUser.username
      }
      if(updatedUser.email){
        user.email = updatedUser.email
      }
      if(updatedUser.password){
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(updatedUser.password, salt);
        user.password = hashed
      }
      if(updatedUser.avt){
        user.avt = updatedUser.avt
      }
      console.log(user)
      await user.save();
      return res.status(200).json(user);
    } catch (err) {
      return  res.status(500).json(err);
    }
  },

  //DELETE A USER
  deleteUser: async (req, res) => {
    try {
      console.log(req.params.id)
      await User.findByIdAndDelete(req.params.id);
      return res.status(200).json("User deleted");
    } catch (err) {
      return  res.status(500).json(err);
    }
  },
};

module.exports = userController;
