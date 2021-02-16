import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import productsActions from '../../redux/products/productsActions.js';
import { getProductItem } from '../../redux/products/productsSelectors.js';

import IconShopBag from '../assets/IconShopBag/IconShopBag.js';
import s from './Card.module.css';

const Card = ({ id }) => {
	const dispatch = useDispatch();
	const item = useSelector((state) => getProductItem(state, id));
	const [focus, setFocus] = useState(false);

	const onFocus = () => setFocus(true);
	const onFocusLost = () => setFocus(false);

	function onHandleClick() {
		dispatch(productsActions.showModal(true));
		dispatch(productsActions.orderedItem(id));
	}

	return (
		<li className={s.itemCard}>
			<div className={s.wrapNameCategory}>
				<p className={s.itemCard__category}>{item.category}</p>
				<p className={s.itemCard__name}>{item.name}</p>
			</div>

			<div className={s.wrapPriceAndBuy}>
				<div className={s.wrapPrice}>
					<span className={s.iconCurrency}>$</span>
					<span className={s.price}>{item.price}</span>
				</div>
				<div
					onClick={onHandleClick}
					onMouseEnter={onFocus}
					onMouseLeave={onFocusLost}
					className={s.circleForShop}
				>
					<IconShopBag focus={focus} />
				</div>
			</div>
		</li>
	);
};

export default Card;
