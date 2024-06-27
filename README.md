# MyShop-Quick Commerce

## Technologies Used

- **Backend**: Java Spring
- **Frontend**: ReactJS
- **Database**: MySQL
- **Cloud**: AWS

## Introduction

MyShop-Quick Commerce is a full-stack application built using Java Spring, ReactJS, AWS, and MySQL. It provides a platform for managing product inventory and transactions between suppliers, warehouses, and customers. The application supports user registration, login, product management, dynamic pricing, and order handling with conflict resolution mechanisms.

## Features

### General
- **Register**
  
  ![image](https://github.com/Harshit22209/MyShop/assets/119040511/29759d26-3126-4f3e-ac07-ce39da48e75c)

- **Login**
  
  ![image](https://github.com/Harshit22209/MyShop/assets/119040511/31e7a365-16f4-4b84-8093-0ffabf72254e)


### Supplier
- **Add Product**: Suppliers can add new products to the inventory.
- 
  ![image](https://github.com/Harshit22209/MyShop/assets/119040511/5fd40711-031f-41ad-96fc-eacff1a24788)

- **Products Listed by a Supplier**: View all products added by a supplier.
- 
  ![image](https://github.com/Harshit22209/MyShop/assets/119040511/ccdf7ed7-f876-4931-9f2b-1c240518161d)


### Retail Manager/Warehouse
- **Warehouses Managed by Retail Manager**: One-to-many relationship where a manager can manage multiple warehouses.

  ![image](https://github.com/Harshit22209/MyShop/assets/119040511/e64bc6ee-67ba-4055-8ccc-62572cbda0bd)

- **Managing a Warehouse**: Includes buying from suppliers.

  ![image](https://github.com/Harshit22209/MyShop/assets/119040511/7ec0fdaa-0cb2-43d2-9e18-94d70d75d0db)

  Cart
  
  ![image](https://github.com/Harshit22209/MyShop/assets/119040511/c96bbda8-27c2-471d-a8e7-f47fda813b05)

- **Managing Price of Inventory**: Dynamic product pricing to adjust the prices of products in inventory.

  ![image](https://github.com/Harshit22209/MyShop/assets/119040511/9fac9860-2cbf-46a1-ac8c-d5e811d1fc06)

  

### Customer
- **Home Page**

  ![image](https://github.com/Harshit22209/MyShop/assets/119040511/8b0fe2f9-6216-4b45-b9f3-6b429d131797)

- **Products**: Display products from warehouses within a 10km radius.

  ![image](https://github.com/Harshit22209/MyShop/assets/119040511/e00e14c0-73f5-4616-902e-37c79b97b4a7)

- **Buying Product**: Process a successful transaction and show a confirmation page.

  ![image](https://github.com/Harshit22209/MyShop/assets/119040511/bbc50d70-8608-47ec-a479-9791834aafb8)


- **Order History**: View past orders.
  ![image](https://github.com/Harshit22209/MyShop/assets/119040511/7c086a47-0a64-47c4-b82e-0707d2b016e9)




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

