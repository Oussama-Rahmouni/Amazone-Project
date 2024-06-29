import express from 'express';
import authRoutes from './auth.js';
import adminRoutes from './admin.js';
import cartRoutes from './cart.js';
import clientRoutes from './client.js';
import orderRoutes from './order.js';
import productRoutes from './product.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/admin', adminRoutes);
router.use('/cart', cartRoutes);
router.use('/client', clientRoutes);
router.use('/order', orderRoutes);
router.use('/product', productRoutes);

export default router;
