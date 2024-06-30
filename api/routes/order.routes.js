import express from 'express';
import { body, param } from 'express-validator';
import { createOrder, getAllOrdersForUser, getOrderById, updateOrder, deleteOrder } from '../controllers/order.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// Create an order
router.post('/',
    authMiddleware,
    [
        body('product_id').isInt({ gt: 0 }).withMessage('Valid product ID is required'),
        body('quantity').isInt({ gt: 0 }).withMessage('Quantity must be a positive integer'),
        body('total_price').isFloat({ gt: 0 }).withMessage('Total price must be a positive number'),
        body('status').notEmpty().withMessage('Status is required')
    ],
    createOrder
);

// Get all orders for a user
router.get('/',
    authMiddleware,
    getAllOrdersForUser
);

// Get a single order by ID
router.get('/:id',
    authMiddleware,
    [
        param('id').isInt({ gt: 0 }).withMessage('Valid order ID is required')
    ],
    getOrderById
);

// Update an order
router.put('/:id',
    authMiddleware,
    [
        param('id').isInt({ gt: 0 }).withMessage('Valid order ID is required'),
        body('quantity').optional().isInt({ gt: 0 }).withMessage('Quantity must be a positive integer'),
        body('total_price').optional().isFloat({ gt: 0 }).withMessage('Total price must be a positive number'),
        body('status').optional().notEmpty().withMessage('Status is required')
    ],
    updateOrder
);

// Delete an order
router.delete('/:id',
    authMiddleware,
    [
        param('id').isInt({ gt: 0 }).withMessage('Valid order ID is required')
    ],
    deleteOrder
);

export default router;
