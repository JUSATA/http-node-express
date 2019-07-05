'use strict'

const express = require('express')
const productCtrl = require('../controller/producto')

const userCtrl = require('../controller/user')
const auth =require('../middlewares/auth')
const api = express.Router()


api.get('/productos', productCtrl.getProductos)
api.get('/producto/:productId', productCtrl.getProducto)
api.delete('/producto/:productoId', productCtrl.deleteProducto)
api.post('/producto', productCtrl.saveProduct)
api.put('/producto/:productoId', productCtrl.updateProducto)

api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/private', auth, (req, res) => {
    res.status(200).send({ message: 'Tienes acceso' })
  })
module.exports = api