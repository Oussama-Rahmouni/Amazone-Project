import express from 'express';
import { getCart, addItemToCart, removeItemFromCart, updateCartItemQuantity, clearCart } from '../controllers/cart.js';

const router = express.Router();

router.get('/', getCart);
router.post('/add', addItemToCart);
router.delete('/remove/:id', removeItemFromCart);
router.put('/update/:id', updateCartItemQuantity);
router.delete('/clear', clearCart);

export default router;
