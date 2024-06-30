import express from 'express';
import { body } from 'express-validator';
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from '../controllers/product.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import authorizeMiddleware from '../middlewares/authorizeMiddleware.js';

const router = express.Router();

// Only admin users should be able to create, update, and delete products
const adminRole = ['admin'];

router.post('/',
    authMiddleware,
    authorizeMiddleware(adminRole),
    [
        body('name').not().isEmpty().withMessage('Product name is required'),
        body('description').not().isEmpty().withMessage('Product description is required'),
        body('price').isFloat({ gt: 0 }).withMessage('Valid price is required'),
        body('category').not().isEmpty().withMessage('Product category is required'),
        body('stock').isInt({ gt: 0 }).withMessage('Valid stock quantity is required'),
        body('image').not().isEmpty().withMessage('Product image URL is required')
    ],
    createProduct
);

router.get('/', getAllProducts);
router.get('/:id', getProductById);

router.put('/:id',
    authMiddleware,
    authorizeMiddleware(adminRole),
    [
        body('name').not().isEmpty().withMessage('Product name is required'),
        body('description').not().isEmpty().withMessage('Product description is required'),
        body('price').isFloat({ gt: 0 }).withMessage('Valid price is required'),
        body('category').not().isEmpty().withMessage('Product category is required'),
        body('stock').isInt({ gt: 0 }).withMessage('Valid stock quantity is required'),
        body('image').not().isEmpty().withMessage('Product image URL is required')
    ],
    updateProduct
);

router.delete('/:id',
    authMiddleware,
    authorizeMiddleware(adminRole),
    deleteProduct
);

export default router;
