CREATE DATABASE IF NOT EXISTS tasksdb;

USE tasksbd;

CREATE TABLE IF NOT EXISTS tasks(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT,

  PRIMARY KEY (id)
)

INSERT INTO tasks (title,description) VALUES
  ('Task 1', 'some description'),
  ('Task 2', 'some description');
