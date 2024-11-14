const Donor = require('../models/Donor');

// Create a new donor
exports.createDonor = async (req, res) => {
    try {
        const donor = await Donor.create(req.body);
        res.status(201).json(donor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all donors
exports.getDonors = async (req, res) => {
    try {
        const donors = await Donor.find();
        res.status(200).json(donors);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a donor by ID
exports.updateDonor = async (req, res) => {
    try {
        const donor = await Donor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(donor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a donor by ID
exports.deleteDonor = async (req, res) => {
    try {
        await Donor.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
