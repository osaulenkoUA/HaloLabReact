import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import ordersActions from './ordersActions';

const initialState = [];
const addOrder = (_, { payload }) => payload;
const getOrders = (_, { payload }) => payload;

const orders = createReducer(initialState, {
	[ordersActions.addOrderSuccess]: addOrder,
	[ordersActions.getOrdersSuccess]: getOrders,
});

export default combineReducers({ orders });
