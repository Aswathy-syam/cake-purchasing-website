import mongoose, { Schema } from "mongoose";



const UserSchema=mongoose.Schema(
{

    username:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true,
        minlength:10,
        maxlength:10
    },
    email:{
        type:String,
        required:true,
        unique:true
        
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:String,
        default:false
    },

//will add role
roles:{
    type:[Schema.Types.ObjectId],
    required:true,
    ref:"Role"
}



},
{
    timestamps:true
}

);

const User=mongoose.model("User",UserSchema)
export default User