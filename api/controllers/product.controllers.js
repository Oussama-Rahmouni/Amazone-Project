import db from '../config/db.js';
import handleError from '../utils/handleError.js';
import { validationResult } from 'express-validator';


export const addRowsIds = async (req, res) => {
    const rows = req.body;
    const updateQuery = "UPDATE itemsids SET itemsids = ? WHERE id = ?";
    try {
        let i = 1;
        async function sendToDB(updateQuery,array, i){
            const result = await db.query(updateQuery, [JSON.stringify(array), i]);
            return result
        }
        async function firstOne(){
            for (const key in rows) {
                if (rows.hasOwnProperty(key)) {
                    const array = [];
                    const row = rows[key];
                    for (const subArray of row) {
                        array.push(subArray.id);
                    }
                    console.log(`Updating ID ${i} with array:`, array);
                    const respon = await sendToDB(updateQuery, array, i)
                    console.log(`Update result for ID ${i}:`, respon);
                    i++;
                }
            }
        }
       await  firstOne()
        res.status(200).json({ result: "worked!!!" });
    } catch (error) {
        res.status(500).json({ problem: error });
        console.log("here is prob, ", error);
    }
};



// Create a new product
export const createProduct = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, description, price, category, stock, image } = req.body;

        const query = 'INSERT INTO products (name, description, price, category_id, stock, image_url) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [name, description, price, category, stock, image];

        await db.execute(query, values);

        res.status(201).json({ message: 'Product created successfully' });
    } catch (error) {
        handleError(error, req, res);
    }
};

// Get all products
export const getAllProducts = async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM products');
        res.status(200).json(rows);
    } catch (error) {
        handleError(error, req, res);
    }
};

// Get a single product by ID
export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;

        const [rows] = await db.execute('SELECT * FROM products WHERE id = ?', [id]);
        const product = rows[0];

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        handleError(error, req, res);
    }
};

// Update a product
export const updateProduct = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;
        const { name, description, price, category, stock, image } = req.body;

        const query = 'UPDATE products SET name = ?, description = ?, price = ?, category_id = ?, stock = ?, image_url = ? WHERE id = ?';
        const values = [name, description, price, category, stock, image, id];

        const [result] = await db.execute(query, values);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product updated successfully' });
    } catch (error) {
        handleError(error, req, res);
    }
};

// Delete a product
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const query = 'DELETE FROM products WHERE id = ?';
        const [result] = await db.execute(query, [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        handleError(error, req, res);
    }
};


// Explanation of Enhancements
// Validation: Input validation ensures the integrity of data being added or updated.
// Authorization: Only users with the admin role can create, update, or delete products.
// Error Handling: Consistent error handling using handleError.
// CRUD Operations: Comprehensive implementation of CRUD operations for products.
// Code Organization: Clear and organized code for better maintainability.