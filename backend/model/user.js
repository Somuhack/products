const mongoose = require('mongoose')

const userSheama = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    },
    userPassword:{
        type:String,
        required:true
    },
    userAddress:{
        type:String,
        required:true
    },
    userPhone:{
        type:Number,
        required:true
    },
    userRole:{
        type:String,
        required:true,
        default:"user"
    },

},
{
    timestamps:true
}

)