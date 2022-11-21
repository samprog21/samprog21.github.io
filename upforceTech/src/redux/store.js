/** @format */

import { configureStore } from '@reduxjs/toolkit';
import PostReducer from './features/postSlice';
import PageReducer from './features/pageSlice';

export default configureStore({
	reducer: {
		post: PostReducer,
		page: PageReducer,
	},
});
