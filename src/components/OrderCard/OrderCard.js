import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getProductItem, idItem } from '../../redux/products/productsSelectors.js';
import productsActions from '../../redux/products/productsActions.js';

import OrderForm from '../OrderForm/OrderForm.js';
import IconClose from '../assets/IconClose/IconClose';

import s from './OrderCard.module.css';

const OrderCard = () => {
	const dispatch = useDispatch();
	const cardId = useSelector(idItem);
	const item = useSelector((state) => getProductItem(state, cardId));

	const onHandleClick = () => dispatch(productsActions.showModal(false));

	return (
		<div className={s.orderWrapper}>
			<div className={s.iconClose} onClick={onHandleClick}>
				<IconClose />
			</div>
			<div className={s.wrapNameCategory}>
				<p className={s.itemCard__category}>{item.category}</p>
				<p className={s.itemCard__name}>{item.name}</p>
			</div>
			<div className={s.wrapPrice}>
				<span className={s.iconCurrency}>$</span>
				<span className={s.price}>{item.price}</span>
			</div>
			<OrderForm />
		</div>
	);
};

export default OrderCard;
