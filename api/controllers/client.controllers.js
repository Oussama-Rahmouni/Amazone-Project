import db from '../config/db.js';
import handleError from '../utils/handleError.js'

// Get product by ID
export const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const [product] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
        if (product.length === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product[0]);
    } catch (error) {
        handleError(error)
    }
};

// Get all products
export const getProducts = async (req, res) => {
    try {
        const [products] = await db.query('SELECT * FROM products');
        res.json(products);
    } catch (error) {
        handleError(error)
    }
};

// Search products
export const searchProducts = async (req, res) => {
    const { query } = req.query;
    try {
        const [products] = await db.query('SELECT * FROM products WHERE name LIKE ?', [`%${query}%`]);
        res.json(products);
    } catch (error) {
        handleError(error)
    }
};

// Filter products by category
export const filterProducts = async (req, res) => {
    const { category } = req.query;
    try {
        const [products] = await db.query('SELECT * FROM products WHERE category_id = (SELECT id FROM categories WHERE name = ?)', [category]);
        res.json(products);
    } catch (error) {
        handleError(error)
    }
};

// Get all categories
export const getCategories = async (req, res) => {
    try {
        const [categories] = await db.query('SELECT * FROM categories');        
        res.json(categories);
    } catch (error) {
        handleError(error)
    }
};

export const getItemIdsForHomePage = async (req, res) => {
    try {
        const q = 'SELECT id, ids FROM itemsids';
        const [result] = await db.execute(q);
        if (result.length === 0) {
            return res.status(404).json({ message: 'No data found' });
        }
        res.status(200).json(result);
    } catch (error) {
        handleError(error)
        console.log(er)
        
    }
}

export const getHomProducts = async (req, res) => {
    try {
        // Parse the ids from the query string and convert them into integers
        const ids = req.query.ids.split(',').map(id => parseInt(id));
        const placeholders = ids.map(_ => '?').join(','); // Create placeholders for parameterized query

        // SQL query to fetch products with given ids
        const query = `SELECT * FROM products WHERE id IN (${placeholders})`;
        const products = await db.query(query, ids); // Execute the parameterized query        
        res.json(products);
    } catch (error) {
        handleError(error)
        console.log("err ", error)
    }
};
