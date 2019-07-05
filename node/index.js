
const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')


mongoose.connect(config.db, (err, res) => {
    if (err) {
        return console.log(`erro al conectar a la db : ${err}`)
    }
    console.log('conexion a la base de datos establecida')

    app.listen(config.port, () => {
        console.log(`corriendo la api rest por el puerto :${config.port}`);
    })
})