'use strict'
const Producto = require('../models/producto')

function getProducto(req, res) {
    let productoid = req.params.productId

    Producto.findById(productoid, (err, product) => {
        if (err) return res.status(500).send({ message: `error al realizar la peticion: ${err}` })
        if (!product) return res.status(404).send({ message: `el producto no existe ` })

        res.status(200).send({ product: product })
    })
}

function getProductos(req, res) {

    Producto.find({}, (err, productos) => {
        if (err) return res.status(500).send({ message: `error al realizar la peticion: ${err}` })
        if (!productos) return res.status(404).send({ message: ' no existen productos' })

        res.send(200, { productos })
    })
}

function saveProduct(req, res) {
    console.log(req.body)

    console.log('POST /api/product')
    let producto = new Producto()
    producto.nombre = req.body.nombre
    producto.precio = req.body.precio
    producto.category = req.body.categoria

    producto.save((err, producStorage) => {
        if (err) res.status(500).send({ message: `error al guardar la data` })
        res.status(200).send({ product: producStorage })
    })
}

function updateProducto(req, res) {
    let productId = req.params.productoId
    let update = req.body;

    Producto.findByIdAndUpdate(productId, update, (err, productoUpdate) => {
        if (err) res.status(500).send({ message: `error al borrar  el producto: ${err}` })

        res.status(200).send({ producto: productoUpdate })

    })
}
function deleteProducto(req, res) {

    let productId = req.params.productoId

    Producto.findById(productId, (err, producto) => {
        if (err) res.status(500).send({ message: `error al borrar  el producto: ${err}` })

        producto.remove(err => {
            if (err) res.status(500).send({ message: `error al borrar  el producto: ${err}` })
            res.status(200).send({ message: 'El producto a sido eliminado' })
        })

    })
}

module.exports = {
    getProducto,
    getProductos,
    saveProduct,
    updateProducto,
    deleteProducto

}