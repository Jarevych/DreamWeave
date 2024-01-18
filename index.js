const express = require('express');
const connectDB = require('./config/database');
const app = express();
const morgan = require('morgan')
const dotenv = require('dotenv')
const productRoutes = require('./src/routes/productRoutes')
const userRoutes = require('./src/routes/userRoutes')
// const path = require('path');
// const productRoutes = require(path.join(__dirname, 'src', 'routes', 'productRoutes'));
// const userRoutes = require(path.join(__dirname, 'src', 'routes', 'userRoutes'));

dotenv.config({
    path: process.env.NODE_ENV === 'production' ? '.envs/production.env' : './envs/development.env'
  });

connectDB();



app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', productRoutes)
app.use('/api', userRoutes)





module.exports = app