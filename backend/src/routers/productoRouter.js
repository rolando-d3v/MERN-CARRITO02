const {Router} = require('express');

//MIDDLEWARE
const upload = require('../middlewares/multer')

//ROUTERS
const {getProductos, getProducto, createProducto, deleteProducto, buscarProducto} = require('../controllers/productoController')
const router = Router()

router.get('/productos' , getProductos)
router.get('/productos/:idProducto' , getProducto)
router.post('/productos', upload.single('photo') , createProducto)
router.delete('/productos/:idProducto' , deleteProducto)

//busqueda
router.get('/productos/buscar/:name' , buscarProducto)
module.exports = router