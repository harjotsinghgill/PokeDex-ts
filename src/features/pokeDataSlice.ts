import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPokeData = createAsyncThunk('pokeData/fetchPokeData', async (id: any) => {
	const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
	// console.log(response.data);
	return response.data;
});

interface PokeDataState {
	data: any;
	loading: boolean;
	error: string | null;
}

const initialState: PokeDataState = {
	data: null,
	loading: false,
	error: null,
};

const pokeDataSlice = createSlice({
	name: 'pokeData',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPokeData.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchPokeData.fulfilled, (state, action) => {
				state.data = action.payload;
				state.loading = false;
				state.error = null;
				console.log(state.data);
				
			})
			.addCase(fetchPokeData.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message ?? 'An error occurred';
			});
	},
});

export default pokeDataSlice.reducer;
