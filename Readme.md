Amazon Clone Project
Introduction
Welcome to the Amazon Clone Project! This document provides an overview of the features, functionalities, and workflow process for the website. This project aims to replicate core functionalities of the Amazon platform, tailored to meet your specific requirements.

Table of Contents
Project Overview
Features and Functionalities
Workflow Process
Project Structure
Installation and Setup
Usage
API Endpoints
Additional Information
Project Overview
This project is designed to provide a comprehensive e-commerce platform with functionalities such as user authentication, product management, cart and order handling, payment processing, and an admin dashboard. It is built using modern web development technologies, ensuring a robust and scalable solution.

Features and Functionalities
Home Page
Carousels and Cards: Display categories and products in a user-friendly manner.
Dynamic Content Management: Admin can manage the content displayed on the home page.
Product Management
Categories and Products: View categories, each containing multiple product cards.
Product Details Page: Detailed view of each product with an option to add to the cart.
Cart and Orders
Cart Management: Add, remove, and view items in the cart.
Order Creation: Convert cart items into orders.
Order Management: View, delete, and manage orders.
User Authentication
Register and Login: User registration and login functionality.
Forgot and Reset Password: Password recovery features.
Profile Management: View and manage user profile details.
Search and Filter
Search: Search for products using keywords.
Filter: Filter products based on various criteria.
Payment Processing
Secure Payments: Handle payment processing for orders.
Variable Shipping Costs: Calculate shipping costs based on distance.
Admin Dashboard
Product CRUD: Create, read, update, and delete products.
Category CRUD: Create, read, update, and delete categories.
Content Management: Manage content on the home page.
Workflow Process
User Workflow
Browse Products: Users can browse products on the home page, categorized and displayed in carousels and cards.
View Product Details: Clicking on a product card takes the user to the product details page.
Add to Cart: Users can add products to their cart from the product details page.
User Authentication: To proceed with an order, users must register or log in.
Manage Cart: Users can view and manage items in their cart.
Create Order: Users can convert their cart items into an order and proceed to payment.
Payment: Users complete the order by making a payment.
Order Management: Users can view, delete, and manage their orders.
Admin Workflow
Login: Admins log in to access the admin dashboard.
Manage Products: Admins can create, update, and delete products.
Manage Categories: Admins can create, update, and delete categories.
Manage Home Page: Admins can manage the content displayed on the home page.

Usage
Access the Home Page: http://localhost:5000
Admin Dashboard: http://localhost:5000/admin
API Endpoints
Auth
POST /api/auth/register: Register a new user.
POST /api/auth/login: Log in a user.
POST /api/auth/logout: Log out a user.
POST /api/auth/forgot-password: Initiate password recovery.
POST /api/auth/reset-password: Reset password.
GET /api/auth/user: Get user profile details.
Admin
POST /api/admin/product: Create a new product.
PUT /api/admin/product/:id: Update a product.
DELETE /api/admin/product/:id: Delete a product.
GET /api/admin/product/:id: Get a product by ID.
POST /api/admin/category: Create a new category.
PUT /api/admin/category/:id: Update a category.
DELETE /api/admin/category/:id: Delete a category.
GET /api/admin/category/:id: Get a category by ID.
POST /api/admin/home: Manage homepage content.
Client
GET /api/client/product/:id: Get a product by ID.
GET /api/client/products: Get all products.
GET /api/client/search: Search for products.
GET /api/client/filter: Filter products.
GET /api/client/categories: Get all categories.
Cart
POST /api/cart: Add an item to the cart.
DELETE /api/cart/:id: Remove an item from the cart.
GET /api/cart: Get cart contents.
Order
POST /api/order: Create a new order.
PUT /api/order/:id: Update an order.
DELETE /api/order/:id: Delete an order.
GET /api/order/:id: Get an order by ID.
GET /api/order/user/:userId: Get orders for a specific user.
Payment
POST /api/payment/process: Process a payment.
Additional Information
Security: The application uses secure methods for user authentication and payment processing.
Scalability: Built with modern web technologies, the project is designed to be scalable and maintainable.
User Experience: Focused on providing a seamless user experience with easy navigation and quick access to features.