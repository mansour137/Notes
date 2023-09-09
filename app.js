const express = require('express');
const AppError = require('./utilis/appError')
const app = express();
const notesRouter= require('./Routes/notesRoutes')
const usersRouter= require('./Routes/userRoutes')
const morgan = require('morgan');
const cookies = require('cookie-parser');
app.use(cookies());
app.use(express.json())
app.use(morgan('dev'))
app.use('/api/v1/Notes' , notesRouter);
app.use('/api/v1/Users' , usersRouter);

app.all('*', (req, res, next) => {
    const error = new AppError(`Can't find ${req.originalUrl} on this server!`, 404);
    next(error);
});


const handelJWTToken = ()=>{
    return new AppError('Please , login!' , 401);
}

app.use((err, req, res, next) => {
    if (err.name === 'JsonWebTokenError') {
        const jwtError = handelJWTToken();
        return res.status(jwtError.statusCode).json({
            message: jwtError.message,
        });
    }

    res.status(err.statusCode || 500).json({
        status: err.status || 'error',
        error: err,
        message: err.message,
        stack: err.stack,
    });
});

module.exports = app;