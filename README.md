# MyShop-Quick Commerce

## Introduction

MyShop-Quick Commerce is a full-stack application built using Java Spring, ReactJS, AWS, and MySQL. It provides a platform for managing product inventory and transactions between suppliers, warehouses, and customers. The application supports user registration, login, product management, dynamic pricing, and order handling with conflict resolution mechanisms.

## Features

### General
- **Register**
- **Login**

### Supplier
- **Add Product**: Suppliers can add new products to the inventory.
- **Products Listed by a Supplier**: View all products added by a supplier.

### Retail Manager/Warehouse
- **Warehouses Managed by Retail Manager**: One-to-many relationship where a manager can manage multiple warehouses.
- **Managing a Warehouse**: Includes buying from suppliers.
- **Managing Price of Inventory**: Dynamic product pricing to adjust the prices of products in inventory.

### Customer
- **Home Page**
- **Products**: Display products from warehouses within a 10km radius.
- **Cart**: Add products to the cart for purchase.
- **Buying Product**: Process a successful transaction and show a confirmation page.
- **Order History**: View past orders.

## Conflict Handling

### Two Conflicting Transactions
The system handles conflicts that may arise due to simultaneous transactions. Here are two scenarios:

1. **Write-Read (WR) Conflict**: One transaction updates the quantity but the change is not reflected when the second transaction reads it.
2. **Write-Write (WW) Conflict**: Both transactions attempt to update the quantity of a product, resulting in one transaction overriding the other.

### Four Non-Conflicting Transactions
1. **Supplier to Warehouse**: Transfer of products from suppliers to warehouses.
2. **Warehouse to Customer**: Delivery of products from warehouses to customers.
3. **Both Threads Reading the Same Data**: Multiple threads reading data without conflicts.
4. **Cart Handling with Limited Stock**: If a product is added to the cart but purchased by another user before checkout, the system handles the unavailability by failing the transaction to maintain database consistency.

## Installation

1. Clone the repository.
2. Set up the database using the provided MySQL scripts.
3. Configure AWS for cloud services.
4. Build and run the Java Spring backend.
5. Set up the ReactJS frontend.

## Usage

1. Register as a new user or log in with existing credentials.
2. Suppliers can add and manage products.
3. Retail managers can manage warehouses and inventory.
4. Customers can browse products, add them to the cart, and complete purchases.
5. The system ensures transaction integrity and handles conflicts effectively.

## Technologies Used

- **Backend**: Java Spring
- **Frontend**: ReactJS
- **Database**: MySQL
- **Cloud**: AWS

## License

This project is licensed under the MIT License. See the LICENSE file for more 
