import Products from "../models/product.js";
import { CreateError } from "../utils/error.js";
import { CreateSuccess } from "../utils/success.js";

//add product

export const addProduct = async (req, res, next) => {
    const { Id,image,productName,price,category,description } = req.body;
  
    try {
      const newProduct = new Products({
        Id,
        image,
        productName,
        price,
        category,
        description,
      });
  
      await newProduct.save();
      return next(CreateSuccess(200, "Product created Successfully", newProduct));
    } catch (error) {
        return next(CreateError(500, "internal error"));
    }
  };



    //view product

    export const  getAllProduct=async (req,res,next)=>{
        try {
            const viewProduct=await Products.find();
            return next(CreateSuccess(200,"successfully viewed",viewProduct))
        } catch (error) {
            return next(CreateError(500,"internal server error"))
        }
    }


    //update product

    export const updateProduct=async(req,res,next)=>{
        const{id}=req.params
        const {Id,image,productName,price,category,description}=req.body;
        try {
            const editProduct=await Products.findByIdAndUpdate(
             
                {_id:id},
                {Id,image,productName,price,category,description},
                 {new:true}
            )

            await editProduct.save();
            return next(CreateSuccess(200,"product updated successfully",editProduct))
        } catch (error) {
            return next(CreateError(500,"internal server error"))
        }
    }


    //delete product

    export const deleteProducts=async(req,res,next)=>{
        const{id}=req.params
        try {
            const deleteProduct=await Products.findByIdAndDelete({_id:id})
            return next(CreateSuccess(200,"product removed successfully",deleteProduct))
        } catch (error) {
            return next(CreateError(500,"internal server error"))
        }
    }

    //view in single product

    export const getProduct=async(req,res,next)=>{

        const{id}=req.params
        try {
            const viewSingle=await Products.findOne({_id:id})
            return next(CreateSuccess(200,"single product",viewSingle))
        } catch (error) {
            return next(CreateError(500,"internal server error"))
        }
    }


    // export const addProduct=async(req,res,next)=>{
    //     const {Id,image,productName,price,category,description}=req.body;
        
    //     try {
    //         const newProduct=new Products({
    //             Id,
    //             image,
    //             productName,
    //             price,
    //             category,
    //             description,
    //         });
    //         await newProduct.save();
    //         return next(CreateSuccess(200," product created successffully",newProduct))
    //     } catch (error) {
    //         return next(CreateError(500,"internal server error"))
    //     }
        
        
    //     }