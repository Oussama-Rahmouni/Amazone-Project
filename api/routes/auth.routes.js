import express from 'express';
import { body } from 'express-validator';
import { register, login, logout, forgotPassword, resetPassword, getUser } from '../controllers/auth.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', [
    body('username').not().isEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], register);

router.post('/login', [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').not().isEmpty().withMessage('Password is required')
], login);

router.post('/logout', logout);

router.post('/forgot-password', [
    body('email').isEmail().withMessage('Valid email is required')
], forgotPassword);

router.post('/reset-password', [
    body('resetToken').not().isEmpty().withMessage('Reset token is required'),
    body('newPassword').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], resetPassword);

router.get('/user', authMiddleware, getUser);

export default router;
