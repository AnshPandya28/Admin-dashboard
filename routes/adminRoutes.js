const express = require('express');
const { createAdmin, getAdmins, updateAdmin, deleteAdmin } = require('../controllers/adminController');
const router = express.Router();


// Route to update an admin by ID
router.put('/:id', updateAdmin);


module.exports = router;
