import { createAction } from '@reduxjs/toolkit';

const addOrderRequest = createAction('order/addProductsRequest');
const addOrderSuccess = createAction('order/addProductsSuccess');
const addOrderError = createAction('order/addProductsError');

const getOrdersRequest = createAction('orders/getProductsRequest');
const getOrdersSuccess = createAction('orders/getProductsSuccess');
const getOrdersError = createAction('orders/getProductsError');

export default {
	addOrderRequest,
	addOrderSuccess,
	addOrderError,
	getOrdersRequest,
	getOrdersSuccess,
	getOrdersError,
};
