import React from 'react';
import OrderForm from '../OrderForm/OrderForm.js';

import s from './ModalWindow.module.css';

const ModalWindow = () => {
	return (
		<div className={s.gallary__modal}>
			<OrderForm />
		</div>
	);
};
export default ModalWindow;
