import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import productsOperation from '../redux/products/productsOperation.js';
import Section from './Section/Section.js';
import Products from './Products/Products.js';
import ModalWindow from './ModalWindow/ModalWindow.js';

import './App.module.css';
import './normalize.css';

function App() {
	const dispatch = useDispatch();
	const isShowModal = useSelector((state) => state.isShowModal);

	useEffect(() => {
		dispatch(productsOperation.getProduct());
	}, []);

	return (
		<Section>
			<Products />
			{isShowModal && <ModalWindow />}
		</Section>
	);
}

export default App;
