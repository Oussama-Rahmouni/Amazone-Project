import express from 'express';
import { getProduct, getProducts, getProductCategories } from '../controllers/product.js';

const router = express.Router();

router.get('/:id', getProduct);
router.get('/', getProducts);
router.get('/categories', getProductCategories);

export default router;
