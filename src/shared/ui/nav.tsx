import React from 'react';
import { NavLink } from 'react-router';

import styles from './nav.module.scss';
import { NavProps } from '@shared/types/types.ts';

const Nav: React.FC<NavProps> = ({ props }) => {
	return (
		<nav className={styles.nav}>
			{props.map((param) => (
				<NavLink key={param.href} className={styles.navLink} to={param.href}>
					{param.title}
				</NavLink>
			))}
		</nav>
	);
};

export default Nav;
