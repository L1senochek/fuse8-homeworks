import { IRoutes } from '../types.ts';

export const routes: IRoutes = {
	main: {
		path: '/',
		getLink: () => '/',
	},
	landing: {
		path: '/landing',
		getLink: () => '/landing',
	},
};
