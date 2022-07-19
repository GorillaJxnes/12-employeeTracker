DROP DATABASE IF EXISTS position_db;
CREATE DATABASE position_db;

USE position_db;
CREATE TABLE employee (
        id INT NOT NULL,
        roles VARCHAR(30) NOT NULL,
        name VARCHAR(30) NOT NULL,
        PRIMARY KEY (id)
);
CREATE TABLE dept (
    id INT NOT NULL,
        name VARCHAR(30) NOT NULL,
        PRIMARY KEY (id)
);
CREATE TABLE roles (
    name VARCHAR(30) NOT NULL
);
