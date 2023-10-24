const router = require("./bootcampsRoutes")

//Selecionar todos los review
router.get('/',(req, res)=>{
    return res.json({
        success:true,
        msg: "Seleccionando todos los review"
    })
})

//Seleccionar el review cuyo id se pase por parametro 
router.get('/:id',(req, res)=>{
    reviewId = req.params.id
    return res.json({
        success:true,
        msg: `Seleccionando review cuyo id es: ${reviewId}`
    })
})

//Crear review
router.post('/',(req, res)=>{
    return res.json({
        success:true,
        msg: "Crear review"
    })
})

// Actualizar review por ID
router.put('/:id',(req, res)=>{
 reviewId = req.params.id
    return res.json({
        success:true,
        msg: `Actualizando review cuyo id es: ${reviewId}`
    })
})

// Eliminar review por ID
router.delete('/:id',(req, res)=>{
 reviewId = req.params.id
    return res.json({
        success:true,
        msg: `Eliminado review cuyo id es: ${reviewId}`
    })
})
module.exports = router