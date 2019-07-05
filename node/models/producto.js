'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductoShema = Schema({
    nombe: String,
    precio: { type: Number, default: 0 },
    categoria: { type: String }
})
module.exports = mongoose.model('productos', ProductoShema)