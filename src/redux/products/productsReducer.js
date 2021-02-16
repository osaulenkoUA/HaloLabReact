import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import productsActions from './productsActions';

const initialState = [];
const addProduct = (_, { payload }) => payload;
const getProduct = (_, { payload }) => payload;

const product = createReducer(initialState, {
	[productsActions.addProductsSuccess]: addProduct,
	[productsActions.getProductsSuccess]: getProduct,
});

const isShowModal = createReducer(false, {
	[productsActions.showModal]: (_, { payload }) => payload,
});

const currentOrderId = createReducer(null, {
	[productsActions.orderedItem]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
	[productsActions.getProductsRequest]: () => true,
	[productsActions.getProductsSuccess]: () => false,
	[productsActions.getProductsError]: () => false,
});

export default combineReducers({ product, isShowModal, currentOrderId, loading });
