const express = require('express');
const { createDonor, getDonors, updateDonor, deleteDonor } = require('../controllers/donorController');
const router = express.Router();

// Route to create a new donor
router.post('/', createDonor);

// Route to get all donors
router.get('/', getDonors);

// Route to update a donor by ID
router.put('/:id', updateDonor);

// Route to delete a donor by ID
router.delete('/:id', deleteDonor);

module.exports = router;
