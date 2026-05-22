# Database Setup

## Create Database

```sql
CREATE DATABASE IF NOT EXISTS client_org_db;
USE client_org_db;
```

## Create Tables

```sql
-- Users Table
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create index for email lookup
CREATE INDEX idx_email ON users(email);
```

## Insert Sample Data

```sql
-- Insert sample users (passwords are hashed in production)
INSERT INTO users (email, username, password) VALUES
('admin@example.com', 'admin', 'hashed_password_1'),
('user1@example.com', 'user1', 'hashed_password_2'),
('user2@example.com', 'user2', 'hashed_password_3');
```

---

# Environment Variables

## Backend (.env)

```
NODE_ENV=development
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root_password
DB_NAME=client_org_db
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
FRONTEND_URL=http://localhost:3000
```

## Frontend (.env.local)

```
VITE_API_URL=http://localhost:5000/api
```

---

# Installation

## Backend Setup

```bash
cd backend
npm install
npm run dev
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## Docker Setup

```bash
docker-compose up --build
```

---

# API Endpoints

## Authentication

- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh-token` - Refresh access token

## Dashboard

- `GET /api/dashboard/stats` - Get dashboard statistics
- `GET /api/dashboard/users` - Get all users (paginated)
- `GET /api/dashboard/users/:userId` - Get user by ID

## Health Check

- `GET /api/health` - Check backend status

---

# Security Features

✅ SQL Injection Protection (Parameterized Queries)
✅ Password Hashing (bcrypt)
✅ JWT Authentication
✅ Token Refresh Support
✅ Input Validation
✅ CORS Protection
✅ Error Handling
✅ Environment Variables

---

# Next Steps

1. ✅ Set up database
2. ✅ Configure environment variables
3. ✅ Install dependencies
4. ✅ Start development servers
5. ✅ Test API endpoints
6. ✅ Build frontend
7. ✅ Deploy to production
