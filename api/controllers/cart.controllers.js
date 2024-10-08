import db from '../config/db.js';
import handleError from '../utils/handleError.js';
import { validationResult } from 'express-validator';

// Add an item to the cart
export const addItemToCart = async (req, res) => {
    try {
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() });
        // }

        const { id, quantity } = req.body;
        // console.log("req body ", req.body)
        const user_id = req.user.id;

        // Check if the item already exists in the cart
        const [rows] = await db.execute('SELECT * FROM cart_items WHERE user_id = ? AND product_id = ?', [user_id, id]);
        if (rows.length > 0) {
            return res.status(400).json({ message: 'Item already in cart. Update the quantity instead.' });
        }

        const query = 'INSERT INTO cart_items (user_id, product_id, quantity) VALUES (?, ?, ?)';
        const values = [user_id, id, quantity];

        await db.execute(query, values);

        res.status(201).json({ message: 'Item added to cart' });
    } catch (error) {
        handleError(error, req, res);
    }
};

// Get cart items for a user
export const getCartItems = async (req, res) => {
    try {
        const user_id = req.user.id;

        const [rows] = await db.execute('SELECT c.id, p.name, p.description, p.price, c.quantity, p.image_url FROM cart_items c JOIN products p ON c.product_id = p.id WHERE c.user_id = ?', [user_id]);
        
        res.status(200).json(rows);
    } catch (error) {
        handleError(error, req, res);
    }
};

// Update item quantity in the cart
export const updateCartItemQuantity = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;
        const { quantity } = req.body;

        const [result] = await db.execute('UPDATE cart_items SET quantity = ? WHERE id = ?', [quantity, id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Cart item not found' });
        }

        res.status(200).json({ message: 'Cart item quantity updated' });
    } catch (error) {
        handleError(error, req, res);
    }
};

// Remove an item from the cart
export const removeCartItem = async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await db.execute('DELETE FROM cart_items WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Cart item not found' });
        }

        res.status(200).json({ message: 'Cart item removed' });
    } catch (error) {
        handleError(error, req, res);
    }
};


export const addShippingAdress = async (req, res) =>{
    try {
        const {id} = req.user
        const {country, name, phoneNumber, street, addressLine2, city, state, zip} = req.body;
        const sql = "INSERT INTO shipping_address (user_id, country, name, phone_number, street, address_line2, city, state, zip) VALUES (?,?,?,?,?,?,?,?,?)"
        const result = await db.execute(sql, [id,country, name, phoneNumber, street, addressLine2, city, state, zip])
        res.status(201).json({message:"adress addedd succefully", redirect:"/checkout"})
    } catch (error) {
        // handleError(error)
        console.log("haho hna ", error)
    }
} 

export const addItemsToCart = async (req, res) =>{
    const id = req.user.id ;
    const products = req.body.products
    try {
        const q = "INSERT INTO cart_items (user_id, product_id, quantity) VALUES ( ?, ?, ?)"
        products.map(async (item)=>{
            return await db.execute(q, [id, item.id, item.quantity])
        })

        res.status(201).json({message:"items added to cart succeffully", redirect:"/shipping"})

    } catch (error) {
        handleError(error)
    }
}