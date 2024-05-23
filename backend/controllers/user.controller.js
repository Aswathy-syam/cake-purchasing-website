
import User from "../models/user.js"
import { CreateError } from "../utils/error.js";
import { CreateSuccess } from "../utils/success.js";


//get all users
export const getAllUsers=async(req,res,next)=>{
try {
    const users=await User.find();
    return next(CreateSuccess(200,"all users",users));


} catch (error) {
    return next(CreateError(500,"internal server error"));
}
}



//get all users id
export const getById=async(req,res,next)=>{
try {
    const user=await User.findById(req.params.id);
    if(!user){
        return next(CreateError(404,"user not found"));
    }
    else{
        return next(CreateSuccess(200,"single user",user));
    }
} catch (error) {
    return next(CreateError(500,"internal server error"));
}
}

//delete user


export const deleteUser=async (req,res,next)=>{
    try {
        const userId=req.params.id;
        const user=await User.findById({_id:userId});
        if(user){
            await User.findByIdAndDelete(userId)
            return res.status(200).json("user deleted") 
        }
      else{

        return res.status(404).json("user not found") 
        }

    } catch (error) {
        return res.status(500).json("internal server error") 
    }
 }