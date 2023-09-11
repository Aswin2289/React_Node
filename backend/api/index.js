const express = require('express')
const mongoose=require('mongoose')
const app = express()
const port=3000
let name="Helo word"
app.get('/helo/',(req,res)=>{
    res.send(name)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })