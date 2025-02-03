const mongoose = require('mongoose')

const productSheama= new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    productsDescription:{
        type:String,
        required:true
    },
    productImage:{
        type:String,
        required:true
    },
},
{
    timestamps:true
}
)
const product = mongoose.model('products',productSheama)
module.exports= product