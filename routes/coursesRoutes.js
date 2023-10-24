const express = require('express')
//definir ruteador de bootcamp
const router = express.Router()

router.get('/',(req, res)=>{
    return res.json({
        success:true,
        msg: "Seleccionando todos los cursos"
    })
})

//Seleccionar el curso cuyo id se pase por parametro 
router.get('/:id',(req, res)=>{
    curseId = req.params.id
    return res.json({
        success:true,
        msg: `Seleccionando curso cuyo id es: ${curseId}`
    })
})

//Crear curse
router.post('/',(req, res)=>{
    return res.json({
        success:true,
        msg: "Crear curse"
    })
})

// Actualizar curse por ID
router.put('/:id',(req, res)=>{
 curseId = req.params.id
    return res.json({
        success:true,
        msg: `Actualizando curse cuyo id es: ${curseId}`
    })
})

// Eliminar curse por ID
router.delete(':id',(req, res)=>{
 curseId = req.params.id
    return res.json({
        success:true,
        msg: `Eliminado curse cuyo id es: ${curseId}`
    })
})
module.exports = router