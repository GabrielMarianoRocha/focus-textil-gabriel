const Client = require('../models/Client');

exports.createClient = async (req, res) => {
    try {
        const client = await Client.create(req.body);
        res.status(201).json(client);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getClients = async (req, res) => {
    try {
        const clients = await Client.find().sort({ createdAt: req.query.sort === 'desc' ? -1 : 1 });
        res.json(clients);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.searchClientByEmail = async (req, res) => {
    try {
        const client = await Client.findOne({ email: req.query.email });
        if (!client) return res.status(404).json({ error: 'Cliente não encontrado' });
        res.json(client);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateClient = async (req, res) => {
    try {
        const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!client) return res.status(404).json({ error: 'Cliente não encontrado' });
        res.json(client);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteClient = async (req, res) => {
    try {
        const client = await Client.findByIdAndDelete(req.params.id);
        if (!client) return res.status(404).json({ error: 'Cliente não encontrado' });
        res.json({ message: 'Cliente deletado. Id: '+ req.params.id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
