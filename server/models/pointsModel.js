const mongoose = require('mongoose');

const pointsSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User'
		},
		points: {
			type: Number,
			required: true,
			default: 0
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Points', pointsSchema);
