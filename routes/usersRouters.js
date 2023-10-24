const router = require("./bootcampsRoutes")

//Selecionar todos los user
router.get('/',(req, res)=>{
    return res.json({
        success:true,
        msg: "Seleccionando todos los user"
    })
})

//Seleccionar el user cuyo id se pase por parametro 
router.get('/:id',(req, res)=>{
    userId = req.params.id
    return res.json({
        success:true,
        msg: `Seleccionando user cuyo id es: ${userId}`
    })
})

//Crear user
router.post('/',(req, res)=>{
    return res.json({
        success:true,
        msg: "Crear user"
    })
})

// Actualizar user por ID
router.put('/:id',(req, res)=>{
 userId = req.params.id
    return res.json({
        success:true,
        msg: `Actualizando user cuyo id es: ${userId}`
    })
})

// Eliminar user por ID
router.delete('/:id',(req, res)=>{
 reviewId = req.params.id
    return res.json({
        success:true,
        msg: `Eliminando user cuyo id es: ${reviewId}`
    })
})
module.exports = router