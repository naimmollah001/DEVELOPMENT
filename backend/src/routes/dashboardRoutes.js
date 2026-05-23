const express = require('express');
const { getStats, getUsers, getUserById } = require('../controllers/dashboardController');

const router = express.Router();

router.get('/stats', getStats);
router.get('/users', getUsers);
router.get('/users/:userId', getUserById);

module.exports = router;