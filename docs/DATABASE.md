# Database Schema

## Create Database

```sql
CREATE DATABASE IF NOT EXISTS client_org_db;
USE client_org_db;
```

## Users Table

```sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE INDEX idx_email ON users(email);
```

## Sample Data

```sql
INSERT INTO users (email, username, password) VALUES
('admin@example.com', 'admin', 'hashed_password_1'),
('user1@example.com', 'user1', 'hashed_password_2'),
('user2@example.com', 'user2', 'hashed_password_3');
```
