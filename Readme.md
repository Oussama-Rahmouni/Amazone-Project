# Amazon Clone Project

## Introduction
Welcome to the Amazon Clone Project! This document provides an overview of the features, functionalities, and workflow process for the website. This project aims to replicate core functionalities of the Amazon platform, tailored to meet your specific requirements.

## Table of Contents
- [Project Overview](#project-overview)
- [Features and Functionalities](#features-and-functionalities)
- [Workflow Process](#workflow-process)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Additional Information](#additional-information)

## Project Overview
This project is designed to provide a comprehensive e-commerce platform with functionalities such as user authentication, product management, cart and order handling, payment processing, and an admin dashboard. It is built using modern web development technologies, ensuring a robust and scalable solution.

## Features and Functionalities
### Home Page
- **Carousels and Cards**: Display categories and products in a user-friendly manner.
- **Dynamic Content Management**: Admin can manage the content displayed on the home page.

### Product Management
- **Categories and Products**: View categories, each containing multiple product cards.
- **Product Details Page**: Detailed view of each product with an option to add to the cart.

### Cart and Orders
- **Cart Management**: Add, remove, and view items in the cart.
- **Order Creation**: Convert cart items into orders.
- **Order Management**: View, delete, and manage orders.

### User Authentication
- **Register and Login**: User registration and login functionality.
- **Forgot and Reset Password**: Password recovery features.
- **Profile Management**: View and manage user profile details.

### Search and Filter
- **Search**: Search for products using keywords.
- **Filter**: Filter products based on various criteria.

### Payment Processing
- **Secure Payments**: Handle payment processing for orders.
- **Variable Shipping Costs**: Calculate shipping costs based on distance.

### Admin Dashboard
- **Product CRUD**: Create, read, update, and delete products.
- **Category CRUD**: Create, read, update, and delete categories.
- **Content Management**: Manage content on the home page.

## Workflow Process
### User Workflow
1. **Browse Products**: Users can browse products on the home page, categorized and displayed in carousels and cards.
2. **View Product Details**: Clicking on a product card takes the user to the product details page.
3. **Add to Cart**: Users can add products to their cart from the product details page.
4. **User Authentication**: To proceed with an order, users must register or log in.
5. **Manage Cart**: Users can view and manage items in their cart.
6. **Create Order**: Users can convert their cart items into an order and proceed to payment.
7. **Payment**: Users complete the order by making a payment.
8. **Order Management**: Users can view, delete, and manage their orders.

### Admin Workflow
1. **Login**: Admins log in to access the admin dashboard.
2. **Manage Products**: Admins can create, update, and delete products.
3. **Manage Categories**: Admins can create, update, and delete categories.
4. **Manage Home Page**: Admins can manage the content displayed on the home page.

## Installation and Setup
Provide instructions on how to install and set up the project locally.

## Usage
Include instructions on how to use the project once it's set up.

## API Endpoints
### Auth
- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Log in a user.
- **POST /api/auth/logout**: Log out a user.
- **POST /api/auth/forgot-password**: Initiate password recovery.
- **POST /api/auth/reset-password**: Reset password.
- **GET /api/auth/user**: Get user profile details.

### Admin
- **POST /api/admin/product**: Create a new product.
- **PUT /api/admin/product/:id**: Update a product.
- **DELETE /api/admin/product/:id**: Delete a product.
- **GET /api/admin/product/:id**: Get a product by ID.
- **POST /api/admin/category**: Create a new category.
- **PUT /api/admin/category/:id**: Update a category.
- **DELETE /api/admin/category/:id**: Delete a category.
- **GET /api/admin/category/:id**: Get a category by ID.
- **POST /api/admin/home**: Manage homepage content.

### Client
- **GET /api/client/product/:id**: Get a product by ID.
- **GET /api/client/products**: Get all products.
- **GET /api/client/search**: Search for products.
- **GET /api/client/filter**: Filter products.
- **GET /api/client/categories**: Get all categories.

### Cart
- **POST /api/cart**: Add an item to the cart.
- **DELETE /api/cart/:id**: Remove an item from the cart.
- **GET /api/cart**: Get cart contents.

### Order
- **POST /api/order**: Create a new order.
- **PUT /api/order/:id**: Update an order.
- **DELETE /api/order/:id**: Delete an order.
- **GET /api/order/:id**: Get an order by ID.
- **GET /api/order/user/:userId**: Get orders for a specific user.

### Payment
- **POST /api/payment/process**: Process a payment.

## Additional Information
- **Security**: The application uses secure methods for user authentication and payment processing.
- **Scalability**: Built with modern web technologies, the project is designed to be scalable and maintainable.
- **User Experience**: Focused on providing a seamless user experience with easy navigation and quick access to features.


/amazon_clone_project
|-- /config
|   |-- db.js                # Database connection setup
|-- /controllers
|   |-- auth.controllers.js  # Authentication-related functions
|   |-- client.controllers.js # Client-facing functionalities (products, categories)
|   |-- order.controllers.js  # Order management functions
|   |-- user.controllers.js   # User management functions
|-- /db
|   |-- setup.sql            # SQL queries to create and manage database tables
|-- /middlewares
|   |-- authenticate.js      # Middleware to handle authentication
|   |-- authorize.js         # Middleware to handle authorization
|-- /models
|   |-- (Optional models if using ORM)
|-- /routes
|   |-- auth.routes.js       # Routes for authentication (login, register)
|   |-- client.routes.js     # Routes for client operations (products, categories)
|   |-- order.routes.js      # Routes for order operations
|   |-- user.routes.js       # Routes for user management
|   |-- routesCenter.js      # Central file to manage and link all routes
|-- /utils
|   |-- handleError.js       # Utility to handle errors globally
|   |-- sendEmail.js         # Utility for sending emails
|-- .env                     # Environment variables
|-- .gitignore               # Specifies intentionally untracked files to ignore
|-- app.js                   # Main application file to setup middleware and routes
|-- Dockerfile               # Dockerfile for containerizing the application
|-- docker-compose.yml       # Docker compose file to setup the application stack
|-- package.json             # NPM dependencies and scripts
|-- README.md                # Project documentation



/amazon_clone_frontend
|-- /src
    |-- /assets
    |   |-- /images             # Static images like logos and icons
    |   |-- /styles             # Global styles and themes, consider using CSS modules or styled-components
    |-- /components
    |   |-- /common             # Reusable components like buttons, input fields, etc.
    |   |-- /layout
    |       |-- Navbar.js       # Navigation bar component
    |       |-- Footer.js       # Footer component
    |-- /hooks
    |   |-- useAuth.js          # Custom hook for authentication logic
    |   |-- useFetch.js         # Custom hook to encapsulate fetching logic
    |-- /pages
    |   |-- Home.js             # Homepage
    |   |-- Login.js            # Login page
    |   |-- Register.js         # Registration page
    |   |-- Profile.js          # User profile page
    |   |-- Products.js         # Page displaying all products
    |   |-- ProductDetail.js    # Individual product detail page
    |   |-- Cart.js             # Shopping cart page
    |   |-- Checkout.js         # Checkout page
    |   |-- OrderSummary.js     # Order summary page
    |-- /redux
    |   |-- /store.js           # Setup and configure the Redux store
    |   |-- /slices             # Redux slices
    |       |-- userSlice.js    # User state management
    |       |-- productSlice.js # Product-related state management
    |-- /services
    |   |-- api.js              # Setup Axios instance and API methods
    |   |-- authService.js      # Authentication related API calls
    |   |-- productService.js   # Product-related API calls
    |-- /AppRouter
    |   |-- index.js            # Setup and manage routes
    |-- App.js                  # Main application component, setup routing and global providers
    |-- main.js                 # Entry point, render the React app
    |-- index.css               # Global styles
|-- .env                        # Environment variables
|-- package.json                # Project dependencies and scripts
|-- README.md                   # Project documentation



Explanation of Each Part
Assets: Contains images and global styles. Using CSS modules or a CSS-in-JS library can be introduced here for component-level styling.
Components: Organized into common for reusable UI components and layout for structural components like navigation and footers.
Hooks: Custom hooks to manage authentication and data fetching, showcasing advanced React patterns.
Pages: Each page corresponds to a route; this setup helps the student understand the role of each page and its functionality.
Redux: Manages global state, demonstrating modern state management with Redux Toolkit.
Services: Abstracts API interaction, a critical aspect of connecting frontend to backend.
AppRouter: Manages all routes in the application, a crucial part for SPA development.
s