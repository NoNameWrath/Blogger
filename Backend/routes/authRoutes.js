const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // ✅ Correct import

console.log('authController:', authController); // ✅ Add this for debugging

router.post('/register', authController.registerUser); // Check if this exists
router.post('/login', authController.loginUser);      // Check if this exists

module.exports = router;
