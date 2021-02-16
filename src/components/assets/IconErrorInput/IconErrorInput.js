import React from 'react';

import s from './IconErrorInput.module.css';

const IconErrorInput = ({ topY }) => {
	return (
		<div className={s.iconError} style={{ top: topY }}>
			<svg width="12" height="12" viewBox="0 0 12 12" className={s.icon}>
				<path d="M11 1L1 11" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M1 1L11 11" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		</div>
	);
};

export default IconErrorInput;
