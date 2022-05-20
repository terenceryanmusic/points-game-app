const asyncHandler = require('express-async-handler');

const Reward = require('../models/rewardModel');
const User = require('../models/userModel');

// @desc    Get rewards
// @route   GET /api/rewards
const getRewards = asyncHandler(async (req, res) => {
	const rewards = await Reward.find({ user: req.user.id });

	res.status(200).json(rewards);
});

// @desc    Set reward
// @route   POST /api/rewards
const setReward = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error('Please add a text field');
	}

	const reward = await Reward.create({
		text: req.body.text,
		user: req.user.id
	});

	res.status(200).json(reward);
});

// @desc    Update reward
// @route   PUT /api/rewards/:id
const updateReward = asyncHandler(async (req, res) => {
	const reward = await Reward.findById(req.params.id);

	if (!reward) {
		res.status(400);
		throw new Error('Reward not found');
	}

	// Check for user
	if (!req.user) {
		res.status(401);
		throw new Error('User not found');
	}

	// Make sure the logged in user matches the goal user
	if (reward.user.toString() !== req.user.id) {
		res.status(401);
		throw new Error('User not authorized');
	}

	const updatedReward = await Reward.findByIdAndUpdate(req.params.id, req.body, {
		new: true
	});

	res.status(200).json(updatedReward);
});

// @desc    Delete reward
// @route   DELETE /api/rewards/:id
const deleteReward = asyncHandler(async (req, res) => {
	const reward = await Reward.findById(req.params.id);

	if (!reward) {
		res.status(400);
		throw new Error('Reward not found');
	}

	// Check for user
	if (!req.user) {
		res.status(401);
		throw new Error('User not found');
	}

	// Make sure the logged in user matches the goal user
	if (reward.user.toString() !== req.user.id) {
		res.status(401);
		throw new Error('User not authorized');
	}

	await reward.remove();

	res.status(200).json({ id: req.params.id });
});

module.exports = {
	getRewards,
	setReward,
	updateReward,
	deleteReward
};
