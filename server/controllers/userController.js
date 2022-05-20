const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

//@desc Register users
//@route POST /api/users
const registerUser = asyncHandler(async (req, res) => {
	const { name, age, colour } = req.body;
	if (!name || !age || colour) {
		res.status(400);
		throw new Error('Please add all fields');
	}

	//check if user exists
	const userExists = await User.findOne({ name });

	if (userExists) {
		res.status(400);
		throw new Error('User already exists');
	}

	// create user
	const user = await User.create({
		name,
		age,
		colour
	});

	if (user) {
		res.status(201).json({
			_id: user.id,
			name: user.name,
			age: user.age,
			colour: user.colour,
			token: generateToken(user._id),
			role: user?.role
		});
	} else {
		res.status(400);
		throw new Error('User data invalid');
	}
});

//@desc Login user
//@route POST /api/users/login
const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	//check for user email
	const user = await User.findOne({ email });

	if (user && (await bcrypt.compare(password, user.password))) {
		res.json({
			_id: user.id,
			name: user.name,
			age: user.age,
			colour: user.colour,
			token: generateToken(user._id),
			role: user?.role
		});
	} else {
		res.status(400);
		throw new Error('Invalid credentials');
	}
});

//@desc Get user data
//@route POST /api/users/profile
const getUserData = asyncHandler(async (req, res) => {
	res.status(200).json(req.user);
});

const generateToken = (id) => {
	return jwt.sign({ id }, process.env.token_secret, {
		expiresIn: '1d'
	});
};

module.exports = {
	registerUser,
	loginUser,
	getUserData
};
