const mongoose=require('mongoose')


const videoTable=new mongoose.Schema({
    title:String,
    description:String,
    videoPath:String,
    thumbnail:String    
})

module.exports=mongoose.model('Video',videoTable)