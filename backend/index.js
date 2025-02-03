require('dotenv').config()
const express = require('express')
const dbconn = require('./config/dbconn')
const productRouter = require('./router/productRouter')


const app = express()
app.use(express.json())
app.use("/api/v1/products",productRouter)


dbconn().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server http://localhost:${process.env.PORT}/`)
    })
}).catch((err)=>{
    console.log(err.message)
})