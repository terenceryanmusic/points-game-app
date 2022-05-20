import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import pointsService from './pointsService';

const initialState = {
	points: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: ''
};

// Create new points
export const createPoints = createAsyncThunk('points/create', async (pointsData, thunkAPI) => {
	try {
		const token = thunkAPI.getState().auth.user.token;
		return await pointsService.createBooking(pointsData, token);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

// Get user points
export const getPoints = createAsyncThunk('points/getAll', async (_, thunkAPI) => {
	try {
		const token = thunkAPI.getState().auth.user.token;
		return await pointsService.getPoints(token);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

// Delete user points
export const deletePoints = createAsyncThunk('points/delete', async (id, thunkAPI) => {
	try {
		const token = thunkAPI.getState().auth.user.token;
		return await pointsService.deletePoints(id, token);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const pointsSlice = createSlice({
	name: 'points',
	initialState,
	reducers: {
		reset: (state) => initialState
	},
	extraReducers: (builder) => {
		builder
			.addCase(createPoints.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createPoints.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.bookings.push(action.payload);
			})
			.addCase(createPoints.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getPoints.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getPoints.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.bookings = action.payload;
			})
			.addCase(getPoints.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(deletePoints.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deletePoints.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.points = state.points.filter((points) => points._id !== action.payload.id);
			})
			.addCase(deletePoints.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	}
});

export const { reset } = pointsSlice.actions;
export default pointsSlice.reducer;
