const mongoose = require ('mongoose') 



//funcion para conectar ala bd
 async function connectDB(){
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log(`Conexion exitosa a mongo: ${conn.connection.host}`)
 }

 module.exports = connectDB