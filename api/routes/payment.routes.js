import express from 'express';
import { processPayment } from '../controllers/payment.controller.js';
import authMiddleware from '../middlewares/authenticate.js';

const router = express.Router();

router.post('/create-payment-link',authMiddleware, processPayment);

export default router;
