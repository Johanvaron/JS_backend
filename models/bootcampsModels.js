const mongoose= require('mongoose')

const BootcampSchema = mongoose.Schema({
    name:{
        type: String,
        require: [ true ,"No has agregado un nombre"],
        unique:[true,"el nombre del bootcamp debe de ser unico"],
        maxlength: [50, "el nombre del bootcamp no debe de superar los 50 caracteres"]


    },
    phone:{
        type:Number,
        require: [ true ,"No has agregado el numero telefonico"],
        maxlength: [10, "el numero no debe de superar los 10 numeros"]

    },
    address:{
        type:String,
        maxlength: [100, "la direccion del bootcamp no debe de superar los 100 caracteres"],
        require: [ true ,"No has agregado la direccion"]

    },
    topics:{
        type:[ String ],
        require: [ true ,"No has agregado los temas"],
        enum:["Frontend","BackEnd","IA","DevOps"]
    },
    averageRating:Number,
    createdAt:Date



})


module.exports = mongoose.model('Bootcamp',BootcampSchema)