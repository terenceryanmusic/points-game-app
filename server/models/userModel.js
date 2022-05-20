const mongoose = require('mongoose');
const { mainModule } = require('process');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'please add a name'],
		min: 2,
		max: 20
	},
	age: {
		type: Number,
		required: [true, 'please add your age'],
		min: 1,
		max: 2
	},
	colour: {
		type: String,
		required: [true, 'please select a colour']
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('User', userSchema);
