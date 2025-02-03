const express = require("express")
const productsController =require("../controller/productController")
const upload = require('../middleware/fileUpload')

const router = express.Router()


router.route("/addproduct").post(upload.single("productImage"),productsController.addProductController)
module.exports=router