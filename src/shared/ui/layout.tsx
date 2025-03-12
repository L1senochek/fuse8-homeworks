import React, { PropsWithChildren, ReactElement } from 'react';
import { NavParams } from '@shared/types/types.ts';
import Nav from '@shared/ui/nav.tsx';
import { routes } from '@shared/services/routes.ts';

import styles from './layout.module.scss';

export const Layout: React.FC<PropsWithChildren> = ({ children }): ReactElement => {
	const navParams: NavParams[] = [
		{ title: 'Главная', href: routes.main.getLink() },
		{ title: 'Рандомный пост', href: routes.randomPost.getLink() },
	];

	return (
		<>
			<header className={styles.header}>
				<div className={styles.container}>
					<Nav props={navParams} />
				</div>
			</header>
			<main className={styles.main}>
				<div className={styles.container}>{children}</div>
			</main>
		</>
	);
};
