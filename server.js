const express = require('express');
const morgan = require('morgan');
const basicAuth = require('express-basic-auth');
const bodyParser = require('body-parser');
const db = require('./config/db');
const clientRoutes = require('./routes/clientRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
