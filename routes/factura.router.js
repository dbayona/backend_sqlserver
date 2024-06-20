const express = require('express');
const router = express.Router();
const FacturaController = require('../controllers/factura.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// Handle the /users endpoint
router.get('/', authMiddleware.authenticate, FacturaController.getAllFacturas);

router.get('/:id', authMiddleware.authenticate, FacturaController.getFacturaId);

// Add more routes for the /users endpoint as needed

module.exports = router;