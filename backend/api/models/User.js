const mongoose=require('mongoose')

const user=new mongoose.Schema({
    id:{
        type:BigInt,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    status: {
        type : Boolean,
        required : true
    } 

})
module.exports = mongoose.model('User',user)

