MyShop-Quick Commerce README
Introduction
MyShop-Quick Commerce is a full-stack application built using Java Spring, ReactJS, AWS, and MySQL. It provides a platform for managing product inventory and transactions between suppliers, warehouses, and customers. The application supports user registration, login, product management, dynamic pricing, and order handling with conflict resolution mechanisms.

Features
General
Register
Login
Supplier
Add Product: Suppliers can add new products to the inventory.
Products Listed by a Supplier: View all products added by a supplier.
Retail Manager/Warehouse
Warehouses Managed by Retail Manager: One-to-many relationship where a manager can manage multiple warehouses.
Managing a Warehouse: Includes buying from suppliers.
Managing Price of Inventory: Dynamic product pricing to adjust the prices of products in inventory.
Customer
Home Page
Products: Display products from warehouses within a 10km radius.
Cart: Add products to the cart for purchase.
Buying Product: Process a successful transaction and show a confirmation page.
Order History: View past orders.
Conflict Handling
Two Conflicting Transactions
The system handles conflicts that may arise due to simultaneous transactions. Here are two scenarios:

Write-Read (WR) Conflict: One transaction updates the quantity but the change is not reflected when the second transaction reads it.
Write-Write (WW) Conflict: Both transactions attempt to update the quantity of a product, resulting in one transaction overriding the other.
Four Non-Conflicting Transactions
Supplier to Warehouse: Transfer of products from suppliers to warehouses.
Warehouse to Customer: Delivery of products from warehouses to customers.
Both Threads Reading the Same Data: Multiple threads reading data without conflicts.
Cart Handling with Limited Stock: If a product is added to the cart but purchased by another user before checkout, the system handles the unavailability by failing the transaction to maintain database consistency.
Installation
Clone the repository.
Set up the database using the provided MySQL scripts.
Configure AWS for cloud services.
Build and run the Java Spring backend.
Set up the ReactJS frontend.
Usage
Register as a new user or log in with existing credentials.
Suppliers can add and manage products.
Retail managers can manage warehouses and inventory.
Customers can browse products, add them to the cart, and complete purchases.
The system ensures transaction integrity and handles conflicts effectively.
Technologies Used
Backend: Java Spring
Frontend: ReactJS
Database: MySQL
Cloud: AWS
License
This project is licensed under the MIT License. See the LICENSE file for more details.
