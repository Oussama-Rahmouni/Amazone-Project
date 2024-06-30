import express from 'express';
import { body, param } from 'express-validator';
import { getAllUsers, getUserById, updateUserRole, deleteUser, getAllOrders, updateOrderStatus, deleteOrder } from '../controllers/admin.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import authorizeMiddleware from '../middlewares/authorizeMiddleware.js';

const router = express.Router();

// Get all users
router.get('/users',
    authMiddleware,
    authorizeMiddleware(['admin']),
    getAllUsers
);

// Get a single user by ID
router.get('/users/:id',
    authMiddleware,
    authorizeMiddleware(['admin']),
    [
        param('id').isInt({ gt: 0 }).withMessage('Valid user ID is required')
    ],
    getUserById
);

// Update user role
router.put('/users/:id/role',
    authMiddleware,
    authorizeMiddleware(['admin']),
    [
        param('id').isInt({ gt: 0 }).withMessage('Valid user ID is required'),
        body('role').notEmpty().withMessage('Role is required')
    ],
    updateUserRole
);

// Delete a user
router.delete('/users/:id',
    authMiddleware,
    authorizeMiddleware(['admin']),
    [
        param('id').isInt({ gt: 0 }).withMessage('Valid user ID is required')
    ],
    deleteUser
);

// Get all orders
router.get('/orders',
    authMiddleware,
    authorizeMiddleware(['admin']),
    getAllOrders
);

// Update order status
router.put('/orders/:id/status',
    authMiddleware,
    authorizeMiddleware(['admin']),
    [
        param('id').isInt({ gt: 0 }).withMessage('Valid order ID is required'),
        body('status').notEmpty().withMessage('Status is required')
    ],
    updateOrderStatus
);

// Delete an order
router.delete('/orders/:id',
    authMiddleware,
    authorizeMiddleware(['admin']),
    [
        param('id').isInt({ gt: 0 }).withMessage('Valid order ID is required')
    ],
    deleteOrder
);

export default router;
