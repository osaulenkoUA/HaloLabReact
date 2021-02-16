import axios from 'axios';

import ordersActions from './ordersActions.js';

axios.defaults.baseURL = 'https://afternoon-ravine-02967.herokuapp.com';

const addOrder = (obj) => async (dispatch) => {
	dispatch(ordersActions.addOrderRequest());
	try {
		const { data } = await axios.post('/orders/add', obj);
		dispatch(ordersActions.addOrderSuccess(data));
	} catch (error) {
		dispatch(ordersActions.addOrderError(error));
	}
};

const getOrders = () => async (dispatch) => {
	dispatch(ordersActions.getOrdersRequest());
	try {
		const { data } = await axios.get('/orders/get');
		dispatch(ordersActions.getOrdersSuccess(data));
	} catch (error) {
		dispatch(ordersActions.getOrdersError(error));
	}
};

export default {
	addOrder,
	getOrders,
};
