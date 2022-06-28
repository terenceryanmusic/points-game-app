import axios from 'axios';

const API_URL = '/api/rewards/';

// Create new reward
const createReward = async (rewardData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	};

	const response = await axios.post(API_URL, rewardData, config);

	return response.data;
};

// Get user rewards
const getRewards = async (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	};

	const response = await axios.get(API_URL, config);

	return response.data;
};

// Update user reward
const updateReward = async (rewardId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	};

	const response = await axios.put(API_URL + rewardId, config);

	return response.data;
};

// Delete user reward
const deleteReward = async (rewardId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	};

	const response = await axios.delete(API_URL + rewardId, config);

	return response.data;
};

const rewardService = {
	createReward,
	getRewards,
	updateReward,
	deleteReward
};

export default rewardService;
