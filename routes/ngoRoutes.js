const express = require('express');
const { createNGO, getNGOs, updateNGO, deleteNGO } = require('../controllers/ngoController');
const router = express.Router();

router.post('/', createNGO);
router.get('/', getNGOs);
router.put('/:id', updateNGO);
router.delete('/:id', deleteNGO);

module.exports = router;
