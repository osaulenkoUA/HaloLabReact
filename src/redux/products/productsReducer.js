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

export default combineReducers({ product });
