import express from 'express';
import { processPayment, saveRecordToDB } from '../controllers/payment.controller.js';
import authMiddleware from '../middlewares/authenticate.js';

const router = express.Router();

router.post('/create-payment-link',authMiddleware, processPayment);
router.post('/addRecord',authMiddleware, saveRecordToDB);

export default router;
