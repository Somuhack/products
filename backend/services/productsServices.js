const product = require('../model/products')

const addProductServices = async(products)=>{
       try {
        const productItems = new product(products) 
        const data = await productItems.save()
        return {success:true,data:data,message:"Product Added Succesfully"}
       } catch (error) {
           console.log(error.message)
           return {success:false,message:error.message.split(":")[0]}
       }
       
}
module.exports={addProductServices}