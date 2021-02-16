import React from 'react';
import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Spiner.module.css';

export default function Spinner() {
	return (
		<div className={s.container}>
			<Loader type="Oval" color="#4bcfa0" height={300} width={300} />
		</div>
	);
}
