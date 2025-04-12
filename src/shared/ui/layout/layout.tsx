import { ReactNode } from 'react';
import { routes } from '@shared/services/routes';
import { Nav, NavParams } from '@shared/ui/nav';
import { useLocation } from 'react-router';

import styles from './layout.module.scss';

export const Layout = ({ children }: { children: ReactNode }) => {
	const navParams: NavParams[] = [
		{ title: 'Главная', href: routes.main.getLink() },
		{ title: 'Рандомный пост', href: routes.randomPost.getLink() },
		{ title: 'Лендинг', href: routes.landing.getLink() },
		{ title: 'Навигация', href: routes.navigation.getLink() },
		{ title: 'Article', href: routes.article.getLink() },
		{ title: 'Articles', href: routes.articles.getLink() },
	];

	const location = useLocation();
	const isLandingPage = location.pathname === routes.landing.pathname;

	return (
		<>
			<header className={isLandingPage ? styles.headerLanding : styles.header}>
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
