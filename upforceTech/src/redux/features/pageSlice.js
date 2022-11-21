/** @format */

import { createSlice } from '@reduxjs/toolkit';

export const pageSlice = createSlice({
	name: 'pageSlice',
	initialState: { value: 0 },
	reducers: {
		valuePage: (state, { payload }) =>
			void (state.value = (payload - 1) * 10),
	},
});

// Will handle the action type `'Pagination/valueChange'`

export const { valuePage } = pageSlice.actions;
export default pageSlice.reducer;
