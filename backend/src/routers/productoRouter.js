const {Router} = require('express');

const {getProductos, createProducto} = require('../controllers/productoController')
const router = Router()

router.get('/productos' , getProductos)
router.post('/productos' , createProducto)

module.exports = router