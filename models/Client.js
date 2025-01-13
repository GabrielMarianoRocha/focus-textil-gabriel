const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    birthDate: { type: Date },
    address: { type: String },
    complement: { type: String },
    neighborhood: { type: String },
    zipCode: { type: String },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Client', ClientSchema);