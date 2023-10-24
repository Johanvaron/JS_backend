const express = require('express')
const dotenv = require('dotenv') 
const connectDB = require ('./config/db')
const bootcampsRoute = require ('./routes/bootcampsRoutes')
const courseRoute = require('./routes/coursesRoutes')
const reviewsRoute = require('./routes/reviewsRoutes')
const userswsRoute = require('./routes/usersRouters')

//establecer  config
dotenv.config({
    path:'./config/.env'

})




//ejecutar bd
connectDB()

//establecer  config
dotenv.config({
    path:'./config/.env'
})


//Objeto
const app = express()

//Dependendia de formateo JSON
app.use(express.json())
//URL prueba
app.get('/prueba',(req, res)=>{
    //EJEMPLO RESPONSE
    res.send("Hola Brou")
})


//URIS BOOTCAMPS
app.use('/bootcamps',bootcampsRoute)
//URIS CURSES
//app.use('/bootcamps',courseRoute)
//URIS REVIEWS
//app.use('/bootcamps',reviewsRoute)
//URIS USERS
//app.use('/bootcamps',userswsRoute)


//Puerto Server
const PUERTO = process.env.PUERTO
//Servidor
app.listen(PUERTO, 
            console.log(`Server ejecutando en puerto: ${PUERTO}`))