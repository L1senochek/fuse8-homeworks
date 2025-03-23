import { IRoutes } from '../types.ts';

export const routes: IRoutes = {
	main: {
		pathname: '/',
		getLink: () => '/',
	},
	landing: {
		pathname: '/landing',
		getLink: () => '/landing',
	},
};
