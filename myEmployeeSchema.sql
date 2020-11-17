DROP DATABASE IF EXISTS myEmployee_DB;
CREATE DATABASE myEmployee_DB;

USE myEmployee_DB;


--  Department
CREATE TABLE departments(
id INT PRIMARY KEY,
department_name VARCHAR(30) -- to hold department name
);
-- Role
CREATE TABLE roles(
id INT PRIMARY KEY,
title VARCHAR(30), -- to hold role title
salary DECIMAL(6,2), -- to hold role salary
department_id INT -- to hold reference to department role belongs to
);
-- Employee
CREATE TABLE employees(
id INT PRIMARY KEY,
first_name VARCHAR(30), -- to hold employee first name
last_name VARCHAR(30), -- to hold employee last name
role_id INT, -- to hold reference to role employee has
manager_id INT -- to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager
);


INSERT INTO departments (department_name)
VALUES ('Marketing'), ('Sales'), ('Finance'), ('Human Resources'), ('Operations');

INSERT INTO roles (title, salary, department_id)
VALUES ('Marketing Analyst, 55000.00, 3'), ('Sales Manager, 100000.00, 1'), ('Chief Financial Officer, 135600.00, 2'), ('Human Resources Assistant, 35000.00, 5'), ('Operations Assistant, 30000.00, 4');

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Mark', 'McGillan', 4, 10), ('Ashley', 'Carrol', 6, 12), ('Sydney', 'Rogers', 2, 8), ('Julia', 'Pete', 8, 14), ('Tom', 'Swayze', 10, 16);

SELECT * FROM employees

Error Code: 1366. Incorrect integer value: '' for column 'id' at row 1
