DROP DATABASE IF EXISTS restro;

CREATE DATABASE restro;

\c restro;

CREATE TABLE IF NOT EXISTS items (
  id serial NOT NULL PRIMARY KEY,
  name varchar(20),
  description varchar(20)
);
