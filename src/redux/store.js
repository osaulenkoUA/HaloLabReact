import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './products/productsReducer.js';

const store = configureStore({
	reducer:  productsReducer,
});
export default store;
