import express from 'express';
import { getProduct, homProducts, getProducts, searchProducts, filterProducts, getCategories, getItemIdsForHomePage } from '../controllers/client.controllers.js';

const router = express.Router();

router.get('/product/:id', getProduct);
router.get('/products', getProducts);
router.get('/search', searchProducts);
router.get('/filter', filterProducts);

router.get('/getit', getItemIdsForHomePage);
router.get('/categories', getCategories);
router.get('/home-products', homProducts);


export default router;
