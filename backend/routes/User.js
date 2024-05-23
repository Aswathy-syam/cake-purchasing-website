import express from 'express';
import { deleteUser, getAllUsers, getById } from '../controllers/user.controller.js';



const router=express.Router();

//get all
router.get('/get-user',getAllUsers);

//get by id
router.get('/:id',getById);

//delete user

router.delete('/delete/:id',deleteUser);

export default router;