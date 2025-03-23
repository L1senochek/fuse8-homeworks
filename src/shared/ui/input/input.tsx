import { InputHTMLAttributes, ReactElement } from 'react';

import styles from './input.module.scss';

export function Input(props: InputHTMLAttributes<HTMLInputElement>): ReactElement {
	return <input className={styles.input} {...props} />;
}
