const express = require("express")
const app = express ()
const routesProducts = require('./routes/productos')
app.use(express.json())

//empezando servidor
const PORT = 8080
const server = app.listen(PORT, () =>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})


//routes
app.use(express.static(__dirname + "/public"))
app.use('/api', routesProducts)
