import React from 'react';
import OrderCard from '../OrderCard/OrderCard.js';

import s from './ModalWindow.module.css';

const ModalWindow = () => {
	return (
		<div className={s.gallary__modal}>
			<OrderCard />
		</div>
	);
};
export default ModalWindow;
