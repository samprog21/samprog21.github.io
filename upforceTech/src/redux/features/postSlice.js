/** @format */

import {
	createSlice,
	createAsyncThunk,
} from '@reduxjs/toolkit';
import axios from 'axios';

export const getPosts = createAsyncThunk(
	'posts/getPosts',
	async (arg = 0, { rejectedWithValue }) => {
		try {
			const { data } = await axios.get(
				`https://dummyjson.com/users?limit=10&skip=${arg}&select=firstName,lastName,email,image`,
			);
			return data;
		} catch (error) {
			rejectedWithValue(error.response.data);
		}
	},
);

//Actions and reducers for  promises

const postSlice = createSlice({
	name: 'posts',
	initialState: {
		posts: [],
		loading: false,
	},
	extraReducers: {
		[getPosts.pending]: (state) => {
			state.loading = true;
		},
		[getPosts.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.posts = payload;
			state.isSuccess = true;
		},
		[getPosts.rejected]: (state, { payload }) => {
			state.loading = false;
			state.posts = payload;
			state.message = payload;
			state.isSuccess = false;
		},
	},
});

export default postSlice.reducer;
