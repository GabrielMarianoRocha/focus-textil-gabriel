const Order = require('../models/Order');
const Client = require('../models/Client');
const Log = require('../models/Log');

exports.createOrder = async (req, res) => {
    try {
        const order = await Order.create(req.body);
        const client = await Client.findById(order.clientId);
        if (!client) return res.status(404).json({ error: 'Cliente não encontrado' });

        await Log.create({ client, order });
        res.status(201).json(order);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: req.query.sort === 'desc' ? -1 : 1 });
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!order) return res.status(404).json({ error: 'Pedido não encontrado' });
        res.json(order);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) return res.status(404).json({ error: 'Pedido não encontrado' });
        res.json({ message: 'Pedido deletado. Id do pedido: ' + res.params.id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};