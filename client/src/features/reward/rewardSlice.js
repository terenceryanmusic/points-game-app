import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import rewardService from './rewardService';

const initialState = {
	rewards: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: ''
};

// Create new reward
export const createReward = createAsyncThunk('goals/create', async (goalData, thunkAPI) => {
	try {
		const token = thunkAPI.getState().auth.user.token;
		return await rewardService.createGoal(goalData, token);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

// Get user rewards
export const getRewards = createAsyncThunk('goals/getAll', async (_, thunkAPI) => {
	try {
		const token = thunkAPI.getState().auth.user.token;
		return await rewardService.getGoals(token);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

// Update user reward
export const updateReward = createAsyncThunk('goals/update', async (id, thunkAPI) => {
	try {
		const token = thunkAPI.getState().auth.user.token;
		return await rewardService.updateGoal(id, token);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

// Delete user reward
export const deleteReward = createAsyncThunk('goals/delete', async (id, thunkAPI) => {
	try {
		const token = thunkAPI.getState().auth.user.token;
		return await rewardService.deleteGoal(id, token);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const rewardSlice = createSlice({
	name: 'reward',
	initialState,
	reducers: {
		reset: (state) => initialState
	},
	extraReducers: (builder) => {
		builder
			.addCase(createReward.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createReward.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.goals.push(action.payload);
			})
			.addCase(createReward.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getRewards.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getRewards.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.goals = action.payload;
			})
			.addCase(getRewards.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(updateReward.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updateReward.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.rewards = state.rewards.filter((reward) => reward._id === action.payload.id);
			})
			.addCase(updateReward.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(deleteReward.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteReward.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.rewards = state.rewards.filter((reward) => reward._id !== action.payload.id);
			})
			.addCase(deleteReward.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	}
});

export const { reset } = rewardSlice.actions;
export default rewardSlice.reducer;
