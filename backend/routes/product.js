import express from  'express';
import {  addProduct, deleteProducts, getAllProduct, getProduct, updateProduct } from '../controllers/product.controller.js';


const router=express.Router();
router.post('/add-product',addProduct)
router.get('/view-product',getAllProduct)
router.put('/update-product/:id',updateProduct)
router.delete('/delete-product/:id',deleteProducts)
router.get('/single-product/:id',getProduct)


export default router








