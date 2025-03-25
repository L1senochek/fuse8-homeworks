import { NavigationRoute } from '@shared/types/types';
import { Link } from 'react-router';

import styles from './navigation-level.module.scss';

interface Props {
	navigationRoute: NavigationRoute;
}

export const NavigationLevelThird = ({ navigationRoute }: Props) => {
	return (
		<div className={styles.navigationLevelThird}>
			<Link className={styles.navigationLink} to={navigationRoute.getLink()}>
				{navigationRoute.text}
			</Link>
		</div>
	);
};
