import { createAction } from '@reduxjs/toolkit';

const addProductsRequest = createAction('products/addProductsRequest');
const addProductsSuccess = createAction('products/addProductsSuccess');
const addProductsError = createAction('products/addProductsError');

const getProductsRequest = createAction('products/getProductsRequest');
const getProductsSuccess = createAction('products/getProductsSuccess');
const getProductsError = createAction('products/getProductsError');
const showModal = createAction('products/showModal');
const orderedItem = createAction('products/orderedItem');

export default {
	addProductsRequest,
	addProductsSuccess,
	addProductsError,
	getProductsRequest,
	getProductsSuccess,
	getProductsError,
	showModal,
	orderedItem,
};
