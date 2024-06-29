import express from 'express';
import { createOrder, updateOrder, deleteOrder, getOrder, getUserOrders } from '../controllers/order.js';

const router = express.Router();

router.post('/', createOrder);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);
router.get('/:id', getOrder);
router.get('/user/:userId', getUserOrders);

export default router;
