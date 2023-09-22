const express = require('express')
const mongoose=require('mongoose')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const app = express()
dotenv.config();
let port=process.env.port
let url=process.env.url
mongoose.connect(url)
const con= mongoose.connection
con.on('open',()=>{
    console.log('connected...')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

app.use(express.json())
const userRouter=require("./router/userRouter")
app.use('/',userRouter)