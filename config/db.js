const mongoose = require('mongoose');

//61yUR8hRwkTmjkpC
mongoose.connect('mongodb+srv://gabriell21022003:61yUR8hRwkTmjkpC@teste.nu3lj.mongodb.net/?retryWrites=true&w=majority&appName=Teste')
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose;
