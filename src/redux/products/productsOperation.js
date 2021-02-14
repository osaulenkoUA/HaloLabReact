import axios from 'axios';

import productsActions from './productsActions';

axios.defaults.baseURL = 'https://afternoon-ravine-02967.herokuapp.com';

const addProduct = obj => async dispatch => {
  dispatch(productsActions.addProductsRequest());
  try {
    const { data } = await axios.post('/products/add', obj);
    dispatch(productsActions.addProductsSuccess(data));
  } catch (error) {
    dispatch(productsActions.addProductsError(error));
  }
};

const getProduct = () => async dispatch => {
  dispatch(productsActions.getProductsRequest());
  try {
    const { data } = await axios.get('/products/get');
    dispatch(productsActions.getProductsSuccess(data));
  } catch (error) {
    dispatch(productsActions.getProductsError(error));
  }
};

export default {
  addProduct,
  getProduct,
};
