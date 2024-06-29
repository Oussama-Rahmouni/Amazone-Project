import express from 'express';
import { register, login, logout, forgotPassword, resetPassword, getUser } from '../controllers/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.get('/user', getUser); // Fetch user details, typically for session management

export default router;
