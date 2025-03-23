import { AlertIcon, Card, ICard, Input, NavigateLink, VisibilityIcon } from '@shared/ui';

import styles from './landing-page.module.scss';

export function LandingPage() {
	const cards: ICard[] = [
		{ title: 'Карточка 1', content: 'Пустота' },
		{ title: 'Карточка 2', content: 'Пустота' },
	];

	return (
		<div className={styles['example-homework']}>
			<h1 className={styles['visually-hidden']}>Урок 3</h1>
			<div className={styles.screen}>
				<h2 className={styles['heading-h2']}>Интересные факты про эту страницу</h2>
				<p className={styles.paragraph}>В ней нет смысла</p>
				<NavigateLink to={'#second-screen'}>
					Перейти дальше <VisibilityIcon />
				</NavigateLink>
			</div>
			<div className={styles.screen} id={'second-screen'}>
				<h3 className={styles['heading-h3']}>Смотрите какие карточки</h3>
				<div className={styles['cards-container']}>
					{cards.map((card) => (
						<Card card={card} key={card.title} />
					))}
				</div>
			</div>
			<div className={styles.block}>
				<h5 className={styles['heading-h5']}>Интерактив?</h5>
				<Input type={'text'} placeholder={'Напишите тут что-нибудь'} />
				<NavigateLink to={'#'}>
					Вывести текст в alert <AlertIcon />
				</NavigateLink>
			</div>
		</div>
	);
}
