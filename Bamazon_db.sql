DROP DATABASE IF EXISTS Bamazon_db;

CREATE DATABASE Bamazon_db;

USE Bamazon_db;

CREATE TABLE products(
	id INT NOT NULL AUTO_INCREMENT,
	ProductName VARCHAR(100) NOT NULL,
	DepartmentName VARCHAR(100) NOT NULL,
	Price DECIMAL(10,2) default 0,
	StockQuantity INT default 0,
	PRIMARY KEY(id)
);

INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity) VALUES ( 'Widget', 'toy', 50, 99);
INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity) VALUES ( 'CookBook', 'Book', 10, 11);
INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity) VALUES ( 'Jacket', 'clothes' , 88, 99);
INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity) VALUES ( 'TV', 'electronics', 92, 50);
INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity) VALUES ( 'Tablet', 'electronics', 95, 99);
INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity) VALUES ( 'Playstation', 'electronics', 77, 99);
INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity) VALUES ( 'Headphones', 'eletronics' , 87, 99);
INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity) VALUES ( 'Lightsaber', 'toy', 14, 77);
INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity) VALUES ( 'Barbie', 'toy', 17, 99);
INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity) VALUES ( 'CodingBook', 'Book', 50, 99);