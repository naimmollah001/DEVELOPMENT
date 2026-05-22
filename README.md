# Client Organization Platform

Enterprise platform for scalable client application management.

## Overview

A professional full-stack platform project with:

* Authentication system
* Dashboard UI with charts and statistics
* SQL injection protection with parameterized queries
* Secure backend APIs
* Responsive frontend with Tailwind CSS
* Clean project structure

## Features

✅ **JWT Authentication** - Secure login/register with refresh tokens
✅ **Dashboard** - Interactive statistics, charts, and user tables
✅ **SQL Injection Protection** - Parameterized queries and input validation
✅ **Responsive Design** - Mobile-friendly UI with Tailwind CSS
✅ **Docker Support** - Easy deployment with Docker Compose
✅ **Professional Architecture** - Clean folder structure following best practices

## Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- Recharts (charts and graphs)
- Axios (HTTP client)
- React Router (routing)

### Backend
- Node.js
- Express.js
- MySQL
- JWT (authentication)
- bcrypt (password hashing)
- express-validator (input validation)

## Quick Start

### Prerequisites
- Node.js 16+
- MySQL 8.0+
- Docker & Docker Compose (optional)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/naimmollah001/DEVELOPMENT.git
   cd DEVELOPMENT
   ```

2. **Setup Backend**
   ```bash
   cd backend
   cp .env.example .env
   npm install
   npm run dev
   ```

3. **Setup Frontend** (in another terminal)
   ```bash
   cd frontend
   cp .env.example .env.local
   npm install
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000/api

### Docker Deployment

```bash
docker-compose up --build
```

This will start:
- MySQL database on port 3306
- Backend API on port 5000
- Frontend on port 3000

## Project Structure

```
DEVELOPMENT/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   └── app.js
│   ├── .env.example
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env.example
│   ├── Dockerfile
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── docs/
│   └── SETUP.md
├── docker-compose.yml
├── .gitignore
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh-token` - Refresh access token

### Dashboard
- `GET /api/dashboard/stats` - Get dashboard statistics
- `GET /api/dashboard/users` - Get all users (paginated)
- `GET /api/dashboard/users/:userId` - Get specific user

### Health
- `GET /api/health` - Check backend status

## Security Features

- **SQL Injection Protection**: All queries use parameterized statements
- **Password Security**: bcrypt hashing with salt
- **JWT Authentication**: Secure token-based authentication
- **Token Refresh**: Automatic token refresh mechanism
- **Input Validation**: Express validator on all endpoints
- **CORS Protection**: Configured for frontend domain
- **Error Handling**: Comprehensive error handling middleware

## Environment Variables

### Backend (.env)
```
NODE_ENV=development
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root_password
DB_NAME=client_org_db
JWT_SECRET=your_secret_key
JWT_REFRESH_SECRET=your_refresh_secret
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env.local)
```
VITE_API_URL=http://localhost:5000/api
```

## Database Setup

The database schema includes:
- **users** table with email, username, password fields
- Indexes for optimized queries
- Timestamps for tracking user creation

For detailed setup instructions, see [SETUP.md](./docs/SETUP.md)

## Development Workflow

1. Create feature branch
2. Make changes
3. Test locally
4. Commit with clear messages
5. Push to GitHub
6. Create Pull Request
7. Code review and merge

## License

Proprietary - Client Organization Platform

## Support

For issues or questions, please contact the development team.
