const { Router } = require("express")
const router = Router()
const express = require("express")
const app = express ()
app.use(express.json())


const productos = [ {id: 1, title:'prod uno', price: 100, thumbnail:'img'},
                    {id: 2, title:'prod dos', price: 100, thumbnail:'img'},
                    {id: 3, title:'prod tres', price: 100, thumbnail:'img'}]

                    
router.get('/productos', (req, res) => {
    res.json({productos: productos})
})

router.get('/productos/:id', (req, res) => {
    const {id} = req.params
    const idNumber = Number(id)

    const producto = productos.filter(prod => prod.id === idNumber)

    if(isNaN(id)){
        return res.send({error:"El parametro no es un numero"})
    }
    if(id < 1 || id > productos.length){
        return res.send({error: "El id buscado no existe"})
    }
    res.json(producto)
})

router.post('/productos', (req, res) =>{
    const producto = req.body
    productos.push(producto)

    console.log(producto)
    res.json({mensaje: "producto agregado con exito" })
})

//router.put()

router.delete('/productos/:id', (req, res) => {
    const {id} = req.params
    const deletedProd = productos.splice(Number(id)-1, 1)

    res.json({"producto eliminado": deletedProd})
})

module.exports = router