const {Router} = require('express');

const router = Router()
const {createUser, getUsers, getUser, deleteUser} = require('../controllers/userController')

router.post('/user', createUser)
router.get('/user', getUsers)
router.get('/user/:idUser', getUser)
router.delete('/user/:idUser', deleteUser)

module.exports = router