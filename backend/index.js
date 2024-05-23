import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import roleRoute from './routes/role.js';
import authRoute from './routes/auth.js';
import userRoute from './routes/User.js';
import productRoute from './routes/product.js';
import cookieParser from 'cookie-parser';



//server

const app =express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:4200",
    Credentials:true
}))
app.use('/role',roleRoute);
app.use('/auth',authRoute);
app.use('/user',userRoute);
app.use('/product',productRoute)


//response hadler middleware

app.use((obj,req,res,next)=>{
    const statusCode=obj.status || 500;
    const message=obj.message || "something went wrong"
    return res.status(statusCode).json({
        success:[200,201,204].some(a=>a === obj.status) ? true:false,
        status:statusCode,
        message:message,
        data:obj.data
        
    });
})








//db connection

const connectMongodb=async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('connected to database');
    }
    catch(error){
        throw error
    }
}





//port
app.listen(7000,()=>{
    connectMongodb();
    console.log('connected to backend');
})



