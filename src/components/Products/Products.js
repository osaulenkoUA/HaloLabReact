import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import productsActions from '../../redux/products/productsActions.js';
import { getProducts } from '../../redux/products/productsSelectors.js';

import Card from '../Card/Card.js';
import s from './Products.module.css';

const ProductItems = () => {
	const dispatch = useDispatch();
	const products = useSelector(getProducts);

	const onHandleClick = () => {
		dispatch(productsActions.showModal(true));
		const newProducts = [...products];
		newProducts.sort((a, b) => a.price - b.price);
		const idCheapestItem = newProducts[0]._id;
		dispatch(productsActions.orderedItem(idCheapestItem));
	};

	return (
		<div className={s.cardsWrapper}>
			<ul className={s.list}>
				{products.map((el) => {
					return <Card key={el._id} id={el._id} />;
				})}
			</ul>
			<div className={s.wrapperBtn}>
				<button onClick={onHandleClick} className={s.wrapperBtn__btn}>
					Buy cheapest
				</button>
			</div>
		</div>
	);
};

export default ProductItems;
