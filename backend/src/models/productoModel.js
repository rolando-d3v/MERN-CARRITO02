const { Schema, model } = require("mongoose");

const productoSchema = new Schema(
  {
    name: { type: String, required: true },
    filename: { type: String, required: true },
    size: { type: Number, required: true },
    precioUnitario:{ type: Number, required: true },
    path: String,
    description: String
  },
  { timestamps: true }
);

module.exports = model("Producto", productoSchema);
