const {Router} = require('express');

//MIDDLEWARE
const {verificaToken} = require('../middlewares/authToken');

const router = Router()
const {createUser, getUsers, getUser, deleteUser} = require('../controllers/userController')

router.post('/user', createUser)
router.get('/user',verificaToken,  getUsers)
router.get('/user/:idUser',verificaToken, getUser)
router.delete('/user/:idUser', deleteUser)

module.exports = router