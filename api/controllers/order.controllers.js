import db from '../config/db.js';
import handleError from '../utils/handleError.js';
import { validationResult } from 'express-validator';

// Create an order
export const createOrder = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { product_id, quantity, total_price, status } = req.body;
        const user_id = req.user.id;

        const query = 'INSERT INTO orders (user_id, product_id, quantity, total_price, status) VALUES (?, ?, ?, ?, ?)';
        const values = [user_id, product_id, quantity, total_price, status];

        const [result] = await db.execute(query, values);
        const [order] = await db.execute('SELECT * FROM orders WHERE id = ?', [result.insertId]);

        res.status(201).json(order[0]);
    } catch (error) {
        handleError(error, req, res);
    }
};

// Get all orders for a user
export const getAllOrdersForUser = async (req, res) => {
    try {
        const user_id = req.user.id;
        const [orders] = await db.execute('SELECT * FROM orders WHERE user_id = ?', [user_id]);

        res.status(200).json(orders);
    } catch (error) {
        handleError(error, req, res);
    }
};

// Get a single order by ID
export const getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const [orders] = await db.execute('SELECT * FROM orders WHERE id = ? AND user_id = ?', [id, req.user.id]);

        if (orders.length === 0) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json(orders[0]);
    } catch (error) {
        handleError(error, req, res);
    }
};

// Update an order
export const updateOrder = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;
        const { quantity, total_price, status } = req.body;

        const query = 'UPDATE orders SET quantity = ?, total_price = ?, status = ? WHERE id = ? AND user_id = ?';
        const values = [quantity, total_price, status, id, req.user.id];

        const [result] = await db.execute(query, values);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Order not found or not authorized' });
        }

        const [updatedOrder] = await db.execute('SELECT * FROM orders WHERE id = ?', [id]);

        res.status(200).json(updatedOrder[0]);
    } catch (error) {
        handleError(error, req, res);
    }
};

// Delete an order
export const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await db.execute('DELETE FROM orders WHERE id = ? AND user_id = ?', [id, req.user.id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Order not found or not authorized' });
        }

        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        handleError(error, req, res);
    }
};
