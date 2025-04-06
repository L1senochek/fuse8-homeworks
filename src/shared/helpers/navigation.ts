import { Navigation, NavigationItem, NavigationRoute } from './types';

const filterByChildrenLength = (item: Navigation | NavigationItem<NavigationRoute>) =>
	item.children.length;

export const generateNavigationListWithPermissions = (
	navigationList: Navigation[],
	checkPermission: (routeName: string) => boolean,
): Navigation[] => {
	return navigationList
		.map((navigationItem) => ({
			...navigationItem,
			children: navigationItem.children
				.map((navigationChild) => ({
					...navigationChild,
					children: navigationChild.children.filter((route) => checkPermission(route.pathname)),
				}))
				.filter(filterByChildrenLength),
		}))
		.filter(filterByChildrenLength);
};
