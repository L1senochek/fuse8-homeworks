import { ReactNode } from 'react';

import styles from './button.module.scss';

export interface ButtonProps {
	type?: 'button' | 'submit' | 'reset';
	className?: string;
	disabled?: boolean;
	onClick?: () => void;
	children?: ReactNode;
}

export const Button = (props: ButtonProps) => {
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
