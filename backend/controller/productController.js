const {addProductServices} = require('../services/productsServices')
const addProductController =async (req,res)=>{
    if(req.body){
        const productData = {
           productName:req.body.productName,
           productPrice:req.body.productPrice,
           productsDescription:req.body.productsDescription,
           productImage:`/uploads/${req.file.filename}` // Store image path in the database
        };
       
            const {data,success,message} = await addProductServices(productData)
            console.log("my daat",data)
            if(success){
                res.status(201).json({message:message,success:true,data:data})
            }else{
                res.status(500).json({message:message,success:false,data:data})
            }
    }else{
        return res.status(400).json({message:"Invalid Request",success:false})
    }
}
module.exports={addProductController}