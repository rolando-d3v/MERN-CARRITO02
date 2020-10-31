const {Router} = require('express');

const router = Router()
const {createUser, getUsers} = require('../controllers/userController')

router.post('/user', createUser)
router.get('/user', getUsers)

module.exports = router