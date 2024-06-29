import express from 'express';
import { createProduct, updateProduct, deleteProduct, getProduct, createCategory, updateCategory, deleteCategory, getCategory, manageHomePage } from '../controllers/admin.js';

const router = express.Router();

// Product management
router.post('/product', createProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);
router.get('/product/:id', getProduct);

// Category management
router.post('/category', createCategory);
router.put('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);
router.get('/category/:id', getCategory);

// Manage homepage carousels and cards
router.post('/home', manageHomePage);

export default router;
