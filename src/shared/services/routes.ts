import { IRoutes } from '@shared/types/types';

export const routes: IRoutes = {
	main: {
		getLink: () => '/',
		pathname: '/',
	},
	randomPost: {
		getLink: () => '/random-post',
		pathname: '/random-post',
	},
	landing: {
		pathname: '/landing',
		getLink: () => '/landing',
	},
};
