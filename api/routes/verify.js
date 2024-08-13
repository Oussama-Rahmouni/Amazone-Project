import express from 'express';
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
import handleError from '../utils/handleError.js'

const router = express.Router();
dotenv.config()

router.get('/', async (req, res) =>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message:"user Not authenticated"})

    }
     try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
         res.status(200).json({decoded})
     } catch (error) {
        handleError(error)
     }
} );


export default router;
