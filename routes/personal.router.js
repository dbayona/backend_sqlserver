const express = require('express');
const router = express.Router();
const PersonalController = require('../controllers/personal.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// Handle the /personal endpoint
router.get('/', authMiddleware.authenticate, PersonalController.getAllPersonal);

// Add more routes for the /personal endpoint as needed
router.post('/', authMiddleware.authenticate, PersonalController.addPersonal);

module.exports = router;