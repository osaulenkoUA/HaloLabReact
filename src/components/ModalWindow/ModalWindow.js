import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import galleryActions from '../../redux/gallery/galleryActions.js';
import s from './ModalWindow.module.css';

const ModalWindow = () => {
	const dispatch = useDispatch();
	const urlImg = useSelector((state) => state.gallery.urlImg);
	return (
		<div onClick={() => dispatch(galleryActions.showModal(false))} className={s.gallary__modal}>
			<div className={s.wrap__img}>
				<p className={s.close}>X</p>
				<img src={urlImg} alt="img" />
			</div>
		</div>
	);
};
export default ModalWindow;
