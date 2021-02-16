import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './products/productsReducer.js';
import ordersReducer from './orders/ordersReducer.js';

const store = configureStore({
	reducer: {
		products: productsReducer,
		orders: ordersReducer,
	},
});
export default store;
