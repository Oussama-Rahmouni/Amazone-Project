import express from 'express';
import authRoutes from './auth.routes.js';
import productRoutes from './product.routes.js';
import adminRoutes from './admin.routes.js';
import cartRoutes from './cart.routes.js';
import orderRoutes from './order.routes.js';
import clientRoutes from './client.routes.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/product', productRoutes);
router.use('/admin', adminRoutes);
router.use('/cart', cartRoutes);
router.use('/order', orderRoutes);
router.use('/client', clientRoutes);


export default router;
