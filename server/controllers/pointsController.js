const asyncHandler = require('express-async-handler');

const Points = require('../models/pointsModel');
const User = require('../models/userModel');

// @desc    Get points
// @route   GET /api/points
const getPoints = asyncHandler(async (req, res) => {
	const points = await Points.find({ user: req.user.id });

	res.status(200).json(points);
});

// @desc    Set points
// @route   POST /api/points
const setPoints = asyncHandler(async (req, res) => {
	if (!req.body.points) {
		res.status(400);
		throw new Error('Please add points');
	}
	const points = await Points.create({
		points: req.body.points,
		user: req.user.id
	});

	res.status(200).json(points);
});

// @desc    Update points
// @route   PUT /api/points/:id
const updatePoints = asyncHandler(async (req, res) => {
	const points = await Points.findById(req.params.id);

	if (!points) {
		res.status(400);
		throw new Error('Points not found');
	}

	// Check for user
	if (!req.user) {
		res.status(401);
		throw new Error('User not found');
	}

	// Make sure the logged in user matches the booking user
	if (points.user.toString() !== req.user.id) {
		res.status(401);
		throw new Error('User not authorized');
	}

	const updatedPoints = await Points.findByIdAndUpdate(req.params.id, req.body, {
		new: true
	});

	res.status(200).json(updatedPoints);
});

// @desc    Delete points
// @route   DELETE /api/points/:id
const deletePoints = asyncHandler(async (req, res) => {
	const points = await Points.findById(req.params.id);

	if (!points) {
		res.status(400);
		throw new Error('Booking not found');
	}

	// Check for user
	if (!req.user) {
		res.status(401);
		throw new Error('User not found');
	}

	// Make sure the logged in user matches the booking user
	if (points.user.toString() !== req.user.id) {
		res.status(401);
		throw new Error('User not authorized');
	}

	await points.remove();

	res.status(200).json({ id: req.params.id });
});

module.exports = {
	getPoints,
	setPoints,
	updatePoints,
	deletePoints
};
