// main starting point of the application

const express = require('express');
const app = express();
require('dotenv').config();
const http = require('http');
const morgan = require('morgan');
const cors = require('cors');

// DB Setup
const connectDB = require('./config/db');
connectDB();

// App Setup
app.use(morgan('combined'));
app.use(express.json({ extended: false }));

// App - Cors middleware
// let whitelist = ['http://localhost'];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// };

app.use(cors());

// Define Routes
app.get('/', (req, res) => res.send('API Running'));
app.use('/api/users', require('./routes/api/users'));

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
