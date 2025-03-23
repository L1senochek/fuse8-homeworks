import { ReactElement } from 'react';

import { ICard } from './types';

import styles from './card.module.scss';

interface CardProps {
	card: ICard;
}

export function Card({ card }: CardProps): ReactElement {
	return (
		<div className={styles.card}>
			<h4 className={styles['card-title']}>{card.title}</h4>
			<p className={styles['card-paragraph']}>{card.content}</p>
		</div>
	);
}
