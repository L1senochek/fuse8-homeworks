import { ButtonProps } from '@shared/types/types.ts';
import React from 'react';

import styles from './button.module.scss';

export const Button: React.FC<ButtonProps> = (props) => {
	const { className = '', children, type = 'button', onClick, disabled = false } = props;
	return (
		<button
			type={type}
			className={`${styles.button} ${className}`}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
