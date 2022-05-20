import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import pointsReducer from '../features/points/pointsSlice';
import rewardReducer from '../features/reward/rewardSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		points: pointsReducer,
		reward: rewardReducer
	}
});
