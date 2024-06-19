const express = require('express');
const app = express();
const userRouter = require('./routers/user_router');
const morgan = require('morgan')


app.use(morgan('dev'));
app.use(express.json());


require('dotenv').config();


app.use('/users', userRouter);


module.exports = app