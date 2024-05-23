import mongoose from "mongoose";



const productSchema=new mongoose.Schema({

Id:{
    type:String,
    required:true,
    unique:true
    
},
image:{
    type:String,
    required:true
},
productName:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true
},
category:{
     type:String,
     required:true
},
description:{
    type:String,
    required:true
}


});

const Products=mongoose.model('products',productSchema)

export default Products
