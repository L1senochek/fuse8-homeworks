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
		getLink: () => '/landing',
		pathname: '/landing',
	},
	navigation: {
		getLink: () => '/navigation',
		pathname: '/navigation',
	},
};
