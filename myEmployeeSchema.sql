DROP DATABASE IF EXISTS myEmployee_DB;
CREATE DATABASE myEmployee_DB;

USE myEmployee_DB;


--  Department
CREATE TABLE departments(
id INT PRIMARY KEY
name VARCHAR(30) -- to hold department name
);
-- Role
CREATE TABLE roles(
id INT PRIMARY KEY
title VARCHAR(30) -- to hold role title
salary DECIMAL -- to hold role salary
department_id INT -- to hold reference to department role belongs to
);
-- Employee
CREATE TABLE employees(
id INT PRIMARY KEY
first_name VARCHAR(30) -- to hold employee first name
last_name VARCHAR(30) -- to hold employee last name
role_id INT -- to hold reference to role employee has
manager_id INT -- to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager
);


INSERT INTO departments ();

INSERT INTO roles();

INSERT INTO employees();