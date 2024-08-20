SHOW DATABASES;
CREATE DABASE amazon_project;

USE amazon_project;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    phone_number VARCHAR(20),
    role ENUM ('admin', 'client') DEFAULT 'client',
    address TEXT,
    city VARCHAR(50),
    state VARCHAR(50),
    country VARCHAR(50),
    zip_code VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INT DEFAULT 0,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    total_amount DECIMAL(10, 2) NOT NULL,
    status ENUM('pending', 'confirmed', 'shipped', 'delivered', 'canceled') DEFAULT 'pending',
    shipping_address TEXT,
    payment_status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);


CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE cart_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    product_id INT,
    quantity INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    payment_method ENUM('credit_card', 'paypal', 'bank_transfer') NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    transaction_id VARCHAR(100) UNIQUE,
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
);


INSERT INTO users (email, password, first_name, last_name, phone_number, role, address, city, state, country, zip_code)
VALUES
('john.doe@example.com', 'hashedpassword1', 'John', 'Doe', '1234567890', 'client', '123 Elm St', 'New York', 'NY', 'USA', '10001'),
('jane.smith@example.com', 'hashedpassword2', 'Jane', 'Smith', '0987654321', 'admin', '456 Oak St', 'Los Angeles', 'CA', 'USA', '90001');

-- Insert Categories
INSERT INTO categories (name, description) VALUES
('Electronics', 'Devices and gadgets'),
('Books', 'Printed and digital books'),
('Clothing', 'Men and women clothing'),
('Home & Kitchen', 'Home appliances and kitchenware'),
('Sports & Outdoors', 'Sporting goods and outdoor equipment'),
('Toys & Games', 'Toys and games for children and adults'),
('Health & Beauty', 'Health and beauty products'),
('Automotive', 'Car parts and accessories'),
('Garden & Outdoors', 'Garden tools and outdoor furniture'),
('Office Supplies', 'Office stationery and supplies'),
('Grocery', 'Food and grocery items'),
('Pet Supplies', 'Products for pets'),
('Music & Movies', 'Music albums and movies'),
('Tools & Hardware', 'Tools and hardware equipment'),
('Jewelry & Watches', 'Jewelry and watches');

-- Insert Products
INSERT INTO products (category_id, name, description, price, stock, image_url) VALUES
(1, 'Smartphone', 'Latest smartphone model', 699.99, 50, 'smartphone.jpg'),
(1, 'Laptop', 'Powerful gaming laptop', 1499.99, 30, 'laptop.jpg'),
(1, 'Tablet', 'High-resolution display tablet', 399.99, 20, 'tablet.jpg'),
(2, 'Fiction Book', 'Best-selling fiction book', 19.99, 100, 'fiction_book.jpg'),
(2, 'Non-fiction Book', 'Inspirational non-fiction book', 24.99, 60, 'nonfiction_book.jpg'),
(2, 'E-Reader', 'E-reader with backlight', 129.99, 40, 'ereader.jpg'),
(3, 'Men T-shirt', 'Cotton T-shirt', 9.99, 150, 'men_tshirt.jpg'),
(3, 'Women Dress', 'Summer dress', 29.99, 70, 'women_dress.jpg'),
(3, 'Jeans', 'Comfortable jeans', 49.99, 80, 'jeans.jpg'),
(4, 'Blender', 'High-speed blender', 89.99, 25, 'blender.jpg'),
(4, 'Microwave', 'Compact microwave oven', 119.99, 30, 'microwave.jpg'),
(4, 'Coffee Maker', 'Programmable coffee maker', 79.99, 40, 'coffee_maker.jpg'),
(5, 'Football', 'Standard size football', 29.99, 90, 'football.jpg'),
(5, 'Yoga Mat', 'Non-slip yoga mat', 19.99, 100, 'yoga_mat.jpg'),
(5, 'Dumbbells', 'Set of 2 dumbbells', 49.99, 60, 'dumbbells.jpg'),
(6, 'Board Game', 'Strategy board game', 39.99, 50, 'board_game.jpg'),
(6, 'Puzzle', '1000-piece puzzle', 14.99, 120, 'puzzle.jpg'),
(6, 'Action Figure', 'Superhero action figure', 24.99, 80, 'action_figure.jpg'),
(7, 'Shampoo', 'Hair strengthening shampoo', 9.99, 200, 'shampoo.jpg'),
(7, 'Face Cream', 'Moisturizing face cream', 29.99, 150, 'face_cream.jpg'),
(7, 'Toothbrush', 'Electric toothbrush', 39.99, 100, 'toothbrush.jpg'),
(8, 'Car Battery', 'Long-lasting car battery', 129.99, 30, 'car_battery.jpg'),
(8, 'Tire Inflator', 'Portable tire inflator', 49.99, 40, 'tire_inflator.jpg'),
(8, 'Car Cover', 'Weatherproof car cover', 69.99, 60, 'car_cover.jpg'),
(9, 'Lawn Mower', 'Electric lawn mower', 199.99, 20, 'lawn_mower.jpg'),
(9, 'Garden Hose', 'Flexible garden hose', 29.99, 90, 'garden_hose.jpg'),
(9, 'BBQ Grill', 'Outdoor BBQ grill', 149.99, 15, 'bbq_grill.jpg'),
(10, 'Notebook', 'Spiral-bound notebook', 2.99, 500, 'notebook.jpg'),
(10, 'Printer', 'All-in-one inkjet printer', 89.99, 40, 'printer.jpg'),
(10, 'Desk Lamp', 'LED desk lamp', 19.99, 70, 'desk_lamp.jpg'),
(11, 'Pasta', 'Pack of spaghetti pasta', 1.99, 300, 'pasta.jpg'),
(11, 'Olive Oil', 'Extra virgin olive oil', 9.99, 150, 'olive_oil.jpg'),
(11, 'Chocolate', 'Milk chocolate bar', 1.49, 200, 'chocolate.jpg'),
(12, 'Dog Food', 'Dry dog food', 29.99, 80, 'dog_food.jpg'),
(12, 'Cat Toy', 'Interactive cat toy', 9.99, 120, 'cat_toy.jpg'),
(12, 'Bird Cage', 'Spacious bird cage', 49.99, 30, 'bird_cage.jpg'),
(13, 'Music CD', 'Top hits music CD', 14.99, 90, 'music_cd.jpg'),
(13, 'Movie DVD', 'Latest blockbuster DVD', 19.99, 70, 'movie_dvd.jpg'),
(13, 'Vinyl Record', 'Classic vinyl record', 29.99, 50, 'vinyl_record.jpg'),
(14, 'Hammer', 'Heavy-duty hammer', 19.99, 100, 'hammer.jpg'),
(14, 'Screwdriver Set', 'Set of 10 screwdrivers', 24.99, 80, 'screwdriver_set.jpg'),
(14, 'Drill', 'Cordless drill', 99.99, 30, 'drill.jpg'),
(15, 'Necklace', 'Gold-plated necklace', 49.99, 60, 'necklace.jpg'),
(15, 'Watch', 'Stainless steel watch', 149.99, 40, 'watch.jpg'),
(15, 'Bracelet', 'Silver bracelet', 29.99, 70, 'bracelet.jpg');

-- Insert Orders
INSERT INTO orders (user_id, total_amount, status, shipping_address, payment_status)
VALUES
(1, 229.97, 'confirmed', '123 Elm St, New York, NY, USA', 'completed'),
(2, 1499.99, 'shipped', '456 Oak St, Los Angeles, CA, USA', 'pending');

-- Insert Order Items
INSERT INTO order_items (order_id, product_id, quantity, price) VALUES
(1, 1, 1, 699.99),
(1, 4, 2, 19.99),
(1, 7, 3, 9.99),
(2, 2, 1, 1499.99);

-- Insert Cart Items
INSERT INTO cart_items (user_id, product_id, quantity) VALUES
(1, 5, 1),
(1, 9, 2),
(2, 12, 3),
(2, 18, 1);