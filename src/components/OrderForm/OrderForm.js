import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import productsActions from '../../redux/products/productsActions.js';
import ordersOperation from '../../redux/orders/ordersOperation';
import { getProductItem, idItem } from '../../redux/products/productsSelectors.js';

import ErrorMassage from './ErrorMassage.js';
import IconErrorInput from '../assets/IconErrorInput/IconErrorInput';

import s from './OrderForm.module.css';

const OrderForm = () => {
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');
	const [validateName, setValidateName] = useState(true);
	const [validateNumber, setValidateNumber] = useState(true);
	const [errorMesageName, setErrorMesageName] = useState('');
	const [errorMesageNumb, setErrorMesageNumb] = useState('');

	const dispatch = useDispatch();
	const cardId = useSelector(idItem);
	const item = useSelector((state) => getProductItem(state, cardId));

	const updateName = ({ target }) => setName(target.value);
	const updateNumber = ({ target }) => setNumber(target.value);

	const onHandleBlur = ({ target }) => {
		if (target.name === 'name') {
			const isValid = /^(?:[A-Za-z]+)$/.test(name);
			if (!target.value) {
				setValidateName(false);
				setErrorMesageName(ErrorMassage.requiredField);
			} else {
				setErrorMesageName(ErrorMassage.onlyLetters);
				setValidateName(isValid);
			}
		}
		if (target.name === 'phoneNumber') {
			const isValid = /^\d+$/.test(number);
			const isValidLength = target.value.length === 12;
			if (!target.value) {
				setValidateNumber(false);
				setErrorMesageNumb(ErrorMassage.requiredField);
			} else if (!isValid) {
				setErrorMesageNumb(ErrorMassage.onlyNumbers);
				setValidateNumber(isValid);
			} else if (!isValidLength) {
				setErrorMesageNumb(ErrorMassage.lengthFielld);
				setValidateNumber(isValidLength);
			}
		}
	};

	const onHandleFocus = ({ target }) => {
		if (!validateName && target.name === 'name') {
			setName('');
			setValidateName(true);
		}
		if (!validateNumber && target.name === 'phoneNumber') {
			setNumber('');
			setValidateNumber(true);
		}
	};

	const onHandleSubmit = (e) => {
		e.preventDefault();

		if (!name) {
			setErrorMesageName(ErrorMassage.requiredField);
			setValidateName(false);
		}
		if (!number) {
			setErrorMesageNumb(ErrorMassage.requiredField);
			setValidateNumber(false);
		}
		if (validateNumber && validateName && name && number) {
			const order = {
				name,
				number,
				orderItem: item.name,
				category: item.category,
				price: item.price,
			};
			dispatch(ordersOperation.addOrder(order));
			dispatch(productsActions.showModal(false));
			console.log(order);
		}
	};

	return (
		<form onSubmit={onHandleSubmit} className={s.form}>
			<input
				className={validateName ? s.form__input : s.form__inputInValid}
				type="text"
				value={name}
				placeholder="Name"
				onChange={updateName}
				name="name"
				onBlur={onHandleBlur}
				onFocus={onHandleFocus}
			/>
			{!validateName && (
				<>
					<IconErrorInput topY={'7%'} />
					<p className={s.errorInput}>{errorMesageName}</p>
				</>
			)}
			<input
				className={validateNumber ? s.form__input : s.form__inputInValid}
				type="text"
				value={number}
				onChange={updateNumber}
				name="phoneNumber"
				placeholder="Number"
				onBlur={onHandleBlur}
				onFocus={onHandleFocus}
			/>
			{!validateNumber && (
				<>
					<IconErrorInput topY={'40%'} />
					<p className={s.errorInputNumb}>{errorMesageNumb}</p>
				</>
			)}
			<button type="submit" className={s.form__btn}>
				ORDER
			</button>
		</form>
	);
};

export default OrderForm;
