const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
    client: { type: Object, required: true },
    order: { type: Object, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Log', LogSchema);