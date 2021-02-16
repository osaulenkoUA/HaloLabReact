export const getProducts = (state) => state.products.product;

export const isShowModal = (state) => state.products.isShowModal;

export const idItem = (state) => state.products.currentOrderId;

export const loading = (state) => state.products.loading;

export const getProductItem = (state, id) => {
	const products = getProducts(state);
	return products.find((product) => product._id === id);
};
