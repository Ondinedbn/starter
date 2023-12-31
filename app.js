const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) MIDDLEWARES

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Use of Middleware
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString;
  next();
});

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'Hello from the server side', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.send('You can post to this endpoint...');
// });

// 3) ROUTES

// app.get('/api/v1/tours', getAllTours);
// app.get(`/api/v1/tours/:id`, getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
