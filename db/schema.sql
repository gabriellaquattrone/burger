DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
id int PRIMARY KEY,
burger_name VARCHAR(255),
devoured BOOLEAN
);