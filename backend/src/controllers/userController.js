const bcrypt = require('bcrypt');

//ENDPOINT PARA CREATED USERS
exports.createUser = (req, res) => {
    res.json({ok: true})
}

//ENDPOINT PARA OBTENER ALL USERS
exports.getUsers = (req, res) => {
    res.json({ok: true})
}