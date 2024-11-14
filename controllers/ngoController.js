const NGO = require('../models/NGO');

// Create NGO
exports.createNGO = async (req, res) => {
    try {
        const ngo = await NGO.create(req.body);
        res.status(201).json(ngo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all NGOs
exports.getNGOs = async (req, res) => {
    try {
        const ngos = await NGO.find();
        res.status(200).json(ngos);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update NGO
exports.updateNGO = async (req, res) => {
    try {
        const ngo = await NGO.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(ngo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete NGO
exports.deleteNGO = async (req, res) => {
    try {
        await NGO.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
