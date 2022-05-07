const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		// const conn = await mongoose.connect(process.env.db_connect, { useNewURLParser: true }, () =>
		const conn = await mongoose.connect(process.env.db_connect(), { useNewURLParser: true }, () =>
			console.log('Connected to database')
		);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = connectDB;
