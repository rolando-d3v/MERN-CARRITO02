const productoModel = require('../models/productoModel');


exports.getProductos = async (req, res) => {
    res.json({ok: true})
}


exports.createProducto = async (req, res) => {
  try {
    const producto = new productoModel()
    producto.name = req.body.name
    producto.precioUnitario = req.body.precioUnitario
    producto.description = req.body.description
    producto.filename = req.file.filename
    producto.size = req.file.size
    producto.path =  '/upload/' + req.file.filename
    await producto.save();
  } catch (error) {
    res.send(error);
  }
};