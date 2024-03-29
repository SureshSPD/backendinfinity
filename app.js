// const express = require('express')
// const app = express()
// const port = process.env.PORT || 3000

// app.get('/hello-world', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// mongodb
require("./src/config/db");
const userRoutes = require('./src/routes/signuproutes');

const express = require("express");
const bodyParser = require('express').json;
const cors = require("cors");

// create server app
const app = express();

// const corsOptions = {
//   origin: ['https://infinitycolorlab.online/'],
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// };

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST'], // Add allowed HTTP methods as needed
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers explicitly
  // credentials: true, // Allow credentials (e.g., cookies)
};
// 


app.use(cors(corsOptions));
app.use(bodyParser());

// Handling preflight requests
app.options('*', cors(corsOptions));

// Use userRoutes
app.use('/users', userRoutes);

app.get('/hello-world', (req, res) => {
  res.send('Hello World!')
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
