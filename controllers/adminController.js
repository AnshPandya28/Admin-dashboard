const Admin = require('../models/Admin');


// Update an admin by ID
exports.updateAdmin = async (req, res) => {
    try {
        const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(admin);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

