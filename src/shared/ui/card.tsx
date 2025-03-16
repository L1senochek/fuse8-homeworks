import { ReactElement } from 'react';
import { ICard } from '@shared/types.ts';

import styles from './card.module.scss';

interface CardProps {
	card: ICard;
}

export function Card({ card }: CardProps): ReactElement {
	return (
		<div className={styles.card}>
			<h4>{card.title}</h4>
			<p>{card.content}</p>
		</div>
	);
}
