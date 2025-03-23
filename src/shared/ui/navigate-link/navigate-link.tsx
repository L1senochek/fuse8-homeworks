import { PropsWithChildren } from 'react';
import { Link } from 'react-router';

import styles from './navigate-link.module.scss';

interface Props extends PropsWithChildren {
	to: string;
}

export function NavigateLink({ to, children }: Props) {
	return (
		<Link className={styles.link} to={to}>
			{children}
		</Link>
	);
}
