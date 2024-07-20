import express from 'express';
import { body } from 'express-validator';
import { addRowsIds, createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from '../controllers/product.controllers.js';
import authenticate from '../middlewares/authenticate.js'
import authorize from '../middlewares/authorize.js'

const router = express.Router();

// Only admin users should be able to create, update, and delete products
const adminRole = ['admin'];

router.post('/submit', addRowsIds);

router.post('/',
    authenticate,
    authorize(adminRole),
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

router.put("/:id",authenticate,
    authorize(adminRole),
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
    authenticate,
    authorize(adminRole),
    deleteProduct
);

export default router;
