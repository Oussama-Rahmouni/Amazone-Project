import express from 'express';
import { body, param } from 'express-validator';
import { addItemToCart, getCartItems, updateCartItemQuantity, removeCartItem, addShippingAdress, addItemsToCart } from '../controllers/cart.controllers.js';
import authenticate from '../middlewares/authenticate.js';

const router = express.Router();

router.post('/',
    authenticate,
    [
        body('id').isInt({ gt: 0 }).withMessage('Valid product ID is required'),
        body('quantity').isInt({ gt: 0 }).withMessage('Quantity must be greater than zero')
    ],
    addItemToCart
);

router.get('/',
    authenticate,
    getCartItems
);

router.put('/:id',
    authenticate,
    [
        param('id').isInt({ gt: 0 }).withMessage('Valid cart item ID is required'),
        body('quantity').isInt({ gt: 0 }).withMessage('Quantity must be greater than zero')
    ],
    updateCartItemQuantity
);

router.delete('/:id',
    authenticate,
    [
        param('id').isInt({ gt: 0 }).withMessage('Valid cart item ID is required')
    ],
    removeCartItem
);

router.post('/shipping', authenticate, addShippingAdress)
router.post('/add', authenticate, addItemsToCart)

export default router;
