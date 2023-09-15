const express = require('express')
const mongoose=require('mongoose')
const app = express()
const port=3000
const url = 'mongodb://localhost:27017/nodeproject'
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