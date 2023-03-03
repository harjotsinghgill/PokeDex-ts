import { configureStore } from '@reduxjs/toolkit';
import pokeDataReducer from '../features/pokeDataSlice';
export const store = configureStore({
	reducer: { pokeData: pokeDataReducer },
});
// console.log(store.getState());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
