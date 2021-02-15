import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IconClose from '../assets/IconShopBag/IconClose/IconClose';
import s from './OrderForm.module.css';
import productsActions from '../../redux/products/productsActions.js';

const OrderForm = () => {
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');
	// const [state, setstate] = useState(initialState);

	const dispatch = useDispatch();
	const products = useSelector((state) => state.product);
	const idItem = useSelector((state) => state.currentOrderId);
	const item = products.find((el) => el._id === idItem);

	const onHandleClick = () => dispatch(productsActions.showModal(false));

	const updateName = ({ target }) => {
		setName(target.value);
	};

	const updateNumber = ({ target }) => {
		setNumber(target.value);
	};

	const onHandleBlurName = (e) => {
		console.dir(e.target);
		if (e.target.name === 'name') console.log('name');
		const isLetter = /^(?:[A-Za-z]+)$/.test(name);
		// console.log(isLetter);
	};

	const onHandleSubmit = (e) => {
		e.preventDefault();
		const order = {
			name,
			number,
			nameItem: item.name,
			category: item.category,
			price: item.price,
		};
	};
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

			<form onSubmit={onHandleSubmit} className={s.form}>
				<input
					className={s.form__input}
					type="text"
					value={name}
					placeholder="Name"
					onChange={updateName}
					name="name"
					onBlur={onHandleBlurName}
					required
				/>

				<input
					className={s.form__input}
					type="text"
					value={number}
					onChange={updateNumber}
					name="phoneNumber"
					placeholder="Number"
					required
				/>

				<button type="submit" className={s.form__btn}>
					ORDER
				</button>
			</form>
		</div>
	);
};

export default OrderForm;
