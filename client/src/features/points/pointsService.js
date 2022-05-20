import axios from 'axios';

const API_URL = '/api/points/';

// Create new points
const createPoints = async (pointsData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	};

	const response = await axios.post(API_URL, pointsData, config);

	return response.data;
};

// Get user points
const getPoints = async (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	};

	const response = await axios.get(API_URL, config);

	return response.data;
};

// Delete user points
const deletePoints = async (pointsId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	};

	const response = await axios.delete(API_URL + pointsId, config);

	return response.data;
};

const pointsService = {
	createPoints,
	getPoints,
	deletePoints
};

export default pointsService;
