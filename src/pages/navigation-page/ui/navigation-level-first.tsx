import { NavigationLevelSecond } from '@pages/navigation-page/ui/navigation-level-second';
import { Navigation } from '@shared/types/types';

import styles from './navigation-level.module.scss';

interface Props {
	navigationItem: Navigation;
}

export const NavigationLevelFirst = ({ navigationItem }: Props) => {
	return (
		<div className={styles.navigationLevelFirst}>
			<h2 className={styles.navigationTitle}>{navigationItem.text}</h2>
			{navigationItem.children.map((item) => (
				<NavigationLevelSecond key={item.text} navigationItem={item} />
			))}
		</div>
	);
};
