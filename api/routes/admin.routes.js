import express from 'express';
import { body, param } from 'express-validator';
import { getAllUsers, getUserById, updateUserRole, deleteUser, getAllOrders, updateOrderStatus, deleteOrder } from '../controllers/admin.controllers.js';
import authenticate from '../middlewares/authenticate.js';
import authorize from '../middlewares/authorize.js';

const router = express.Router();

// Get all users
router.get('/users',
    authenticate,
    authorize(['admin']),
    getAllUsers
);

// Get a single user by ID
router.get('/users/:id',
    authenticate,
    authorize(['admin']),
    [
        param('id').isInt({ gt: 0 }).withMessage('Valid user ID is required')
    ],
    getUserById
);

// Update user role
router.put('/users/:id/role',
    authenticate,
    authorize(['admin']),
    [
        param('id').isInt({ gt: 0 }).withMessage('Valid user ID is required'),
        body('role').notEmpty().withMessage('Role is required')
    ],
    updateUserRole
);

// Delete a user
router.delete('/users/:id',
    authenticate,
    authorize(['admin']),
    [
        param('id').isInt({ gt: 0 }).withMessage('Valid user ID is required')
    ],
    deleteUser
);

// Get all orders
router.get('/orders',
    authenticate,
    authorize(['admin']),
    getAllOrders
);

// Update order status
router.put('/orders/:id/status',
    authenticate,
    authorize(['admin']),
    [
        param('id').isInt({ gt: 0 }).withMessage('Valid order ID is required'),
        body('status').notEmpty().withMessage('Status is required')
    ],
    updateOrderStatus
);

// Delete an order
router.delete('/orders/:id',
    authenticate,
    authorize(['admin']),
    [
        param('id').isInt({ gt: 0 }).withMessage('Valid order ID is required')
    ],
    deleteOrder
);



export default router;
