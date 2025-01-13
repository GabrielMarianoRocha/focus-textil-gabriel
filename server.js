const express = require('express');
const morgan = require('morgan');
const basicAuth = require('express-basic-auth');
const bodyParser = require('body-parser');
const db = require('./config/db');
const clientRoutes = require('./routes/clientRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(basicAuth({
    users: { admin: 'password123' },
    challenge: true,
    unauthorizedResponse: 'Unauthorized',
}));

app.use('/clients', clientRoutes);
app.use('/orders', orderRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});