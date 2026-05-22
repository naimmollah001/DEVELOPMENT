const pool = require('../config/database');

const getStats = async (req, res) => {
  try {
    const connection = await pool.getConnection();
    
    // Get user count
    const [userCountResult] = await connection.query(
      'SELECT COUNT(*) as total FROM users'
    );
    
    // Get recent users
    const [recentUsers] = await connection.query(
      'SELECT id, email, username, created_at FROM users ORDER BY created_at DESC LIMIT 5'
    );
    
    connection.release();
    
    res.json({
      totalUsers: userCountResult[0].total,
      activeUsers: Math.floor(userCountResult[0].total * 0.85),
      revenue: '$12,345.67',
      growth: '+23%',
      recentUsers
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
};

const getUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    
    const connection = await pool.getConnection();
    
    // Get total count
    const [countResult] = await connection.query(
      'SELECT COUNT(*) as total FROM users'
    );
    
    // Get paginated users
    const [users] = await connection.query(
      'SELECT id, email, username, created_at FROM users ORDER BY created_at DESC LIMIT ? OFFSET ?',
      [limit, offset]
    );
    
    connection.release();
    
    res.json({
      users,
      total: countResult[0].total,
      page,
      limit,
      pages: Math.ceil(countResult[0].total / limit)
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    
    if (!userId || isNaN(userId)) {
      return res.status(400).json({ error: 'Invalid user ID' });
    }
    
    const connection = await pool.getConnection();
    
    const [rows] = await connection.query(
      'SELECT id, email, username, created_at FROM users WHERE id = ?',
      [userId]
    );
    
    connection.release();
    
    if (rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

module.exports = { getStats, getUsers, getUserById };
