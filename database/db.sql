-- CREATING THE DATABASE
CREATE DATABASE crudnodejsmysql;

-- USING THE DATABASE
USE crudnodejsmysql;

-- CREATING A TABLE
CREATE TABLE customer(
  id INT(6) AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15)
);

-- TP SHOW ALL TABLES
SHOW TABLES;

-- to describe the table
describe customer;