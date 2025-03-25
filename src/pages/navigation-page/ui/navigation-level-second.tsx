import { NavigationLevelThird } from '@pages/navigation-page/ui/navigation-level-third';
import { NavigationItem, NavigationRoute } from '@shared/types/types';

import styles from './navigation-level.module.scss';

interface Props {
	navigationItem: NavigationItem<NavigationRoute>;
}

export const NavigationLevelSecond = ({ navigationItem }: Props) => {
	return (
		<div className={styles.navigationLevelSecond}>
			<h3 className={styles.navigationTitle}>{navigationItem.text}</h3>
			{navigationItem.children.map((route) => (
				<NavigationLevelThird key={route.name} navigationRoute={route} />
			))}
		</div>
	);
};
