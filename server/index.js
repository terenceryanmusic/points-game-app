const express = require('express');
const dotenv = require('dotenv').config();
const db_connect = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 9000;
const cors = require('cors');
const path = require('path');

db_connect();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// cors
app.use(cors());

// use routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/points', require('./routes/pointsRoutes'));
app.use('/api/rewards', require('./routes/rewardRoutes'));

// Serve client
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));
	app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html')));
} else {
	app.get('/', (req, res) => res.send('Please set to production'));
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port: ${port}`));
