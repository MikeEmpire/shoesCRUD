CREATE DATABASE IF NOT EXISTS shoes_db;
USE shoes_db;

# If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS shoes;

CREATE TABLE shoes (
id int NOT NULL AUTO_INCREMENT,
shoe_name varchar(255) NOT NULL,
copped BOOL DEFAULT false,
PRIMARY KEY (id)
);
