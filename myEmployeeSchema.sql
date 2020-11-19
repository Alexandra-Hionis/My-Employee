DROP DATABASE IF EXISTS myEmployee_DB;
CREATE DATABASE myEmployee_DB;

USE myEmployee_DB;


--  Department
CREATE TABLE departments(
id INT AUTO_INCREMENT PRIMARY KEY,
department_name VARCHAR(30) NOT NULL -- to hold department name
);
-- Role
CREATE TABLE roles(
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30) NOT NULL, -- to hold role title
salary DECIMAL(10,2) NOT NULL, -- to hold role salary
department_id INT NOT NULL-- to hold reference to department role belongs to
);
-- Employee
CREATE TABLE employees(
id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) NOT NULL, -- to hold employee first name
last_name VARCHAR(30) NOT NULL, -- to hold employee last name
role_id INT NOT NULL, -- to hold reference to role employee has
manager_id INT -- to hold reference to another employee that manages the employee being created. This field may be null if the employee has no manager
);


INSERT INTO departments (department_name)
VALUES ('Marketing'), ('Sales'), ('Finance'), ('Human Resources'), ('Operations');

INSERT INTO roles (title, salary, department_id)
VALUES ('Marketing Analyst', 55000, 1), ('Sales Manager', 100000, 2), ('Chief Financial Officer', 135600, 3), ('Human Resources Assistant', 35000, 4), ('Operations Assistant', 30000, 7);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Mark', 'McGillan', 6, NULL), ('Ashley', 'Carrol', 7, 12), ('Sydney', 'Rogers', 8, NULL), ('Julia', 'Pete', 9, NULL), ('Tom', 'Swayze', 10, NULL);

SELECT * FROM departments
SELECT * FROM roles
SELECT * FROM employees