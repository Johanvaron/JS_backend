const express = require('express')
const Bootcamp = require('../models/bootcampsModels')

//definir ruteador de bootcamp
const router = express.Router()

//utilizar el reteador
//para crear las rutas

//URIS BOOTCAMPS
//Selecionar todos los bootcamp
router.get('/',
        async(req, res)=>{
            //traer los bootcamps
            const bootcamps = await Bootcamp.find()
        return res.json({
               success:true,
               data:bootcamps
        })
})


//Seleccionar el bootcamp cuyo id se pase por parametro 
router.get('/:id',
async (req, res)=>{
    bootcampId = req.params.id
    //traer  bootcamps pi id
    const bootcamps = await Bootcamp.find(bootcampId)
        return res.json({
        success:true,
        data:bootcamps
    })
})


//Crear bootcamp
router.post(('/'),
    async (req, res) => {
    // Guardar bootcamp body
    const newBootcamp = await Bootcamp.create(req.body)
    return res.json({
        success:true,
        data: newBootcamp
        })
})


// Actualizar bootcamp por ID
router.put('/:id',(req, res)=>{
    bootcampId = req.params.id
    return res.json({
        success:true,
        msg: `Actualizando bootcamp cuyo id es: ${bootcampId}`
    })
})

// Eliminar bootcamp por ID
router.delete('/:id',(req, res)=>{
    bootcampId = req.params.id
    return res.json({
        success:true,
        msg: `Eliminado bootcamp cuyo id es: ${bootcampId}`
    })
})


module.exports = router

