import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import productsOperation from '../redux/products/productsOperation.js';
import { isShowModal, loading } from '../redux/products/productsSelectors.js';

import Section from './Section/Section.js';
import Products from './Products/Products.js';
import ModalWindow from './ModalWindow/ModalWindow.js';
import Spinner from './Spinner/Spinner.js';

import './normalize.css';

function App() {
	const dispatch = useDispatch();
	const showModal = useSelector(isShowModal);
	const isLoading = useSelector(loading);

	useEffect(() => {
		dispatch(productsOperation.getProduct());
	}, []);

	return (
		<Section>
			{isLoading && <Spinner />}
			{!isLoading && <Products />}
			{showModal && <ModalWindow />}
		</Section>
	);
}

export default App;
