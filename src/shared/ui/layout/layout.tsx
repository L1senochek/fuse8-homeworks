import { ReactNode } from 'react';
import { routes } from '@shared/services/routes';
import { Nav } from '@shared/ui/nav';
import { NavParams } from '@shared/ui/nav/types';

import styles from './layout.module.scss';

export const Layout = ({ children }: { children: ReactNode }) => {
	const navParams: NavParams[] = [
		{ title: 'Главная', href: routes.main.getLink() },
		{ title: 'Рандомный пост', href: routes.randomPost.getLink() },
	];

	return (
		<>
			<header className={styles.header}>
				<div className={styles.container}>
					<Nav params={navParams} />
				</div>
			</header>
			<main className={styles.main}>
				<div className={styles.container}>{children}</div>
			</main>
		</>
	);
};
