import { NavParams } from '@shared/ui/nav/types';
import { NavLink } from 'react-router';

import styles from './nav.module.scss';

interface NavProps {
	params: NavParams[];
}

export const Nav = ({ params }: NavProps) => {
	return (
		<nav className={styles.nav}>
			{params.map((param) => (
				<NavLink key={param.href} className={styles.navLink} to={param.href}>
					{param.title}
				</NavLink>
			))}
		</nav>
	);
};
