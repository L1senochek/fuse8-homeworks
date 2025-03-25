import { NavigationLevelFirst } from '@pages/navigation-page/ui';
import {
	checkHasUserPermission,
	generateNavigationListWithPermissions,
	navigationList,
} from '@shared/index';

import styles from './navigation-page.module.scss';

export const NavigationPage = () => {
	const navigationListWithPermissions = generateNavigationListWithPermissions(
		navigationList,
		checkHasUserPermission,
	);

	const renderContent = () => {
		if (navigationListWithPermissions.length)
			return navigationListWithPermissions.map((item) => (
				<NavigationLevelFirst key={item.name} navigationItem={item} />
			));
		else return <span className={styles.navigationMessage}>No routes with permission</span>;
	};

	return <div className={styles.navigation}>{renderContent()}</div>;
};
