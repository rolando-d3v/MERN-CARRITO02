const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

//ENDPOINT PARA CREATED USERS
exports.createUser = async (req, res) => {
  try {
    const user = new userModel({
      email: req.body.email,
      name: req.body.name,
      password: await bcrypt.hash(req.body.password, 10)
    });
    await user.save();
    console.log(user);
    res.json({ ok: true, message: "producto created successfully" });
  } catch (error) {
    if (error.code === 11000) {
      res.json({ message: "el email debe ser unico" });
    }
    res.send(error);
  }
};

//ENDPOINT PARA OBTENER ALL USERS
exports.getUsers = async (req, res) => {
    try {
        const user = await userModel.paginate({})
        res.json(user)
    } catch (error) {
        res.send(error)
    }
}


//ENDPOINT PARA OBTENER A USER
exports.getUser = async (req, res) => {
    try {
        const user = await userModel.findById({_id: req.params.idUser}, {password: 0})
        if(!user) {
            res.json({
                ok: false,
                message: 'user no encontrado'
            })
        }
        res.json(user)
    } catch (error) {
        res.send(error)
    }
}