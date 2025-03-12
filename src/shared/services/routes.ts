import { IRoutes } from '@shared/types/types.ts';

export const routes: IRoutes = {
	main: {
		getLink: () => '/',
		pathname: '/',
	},
	randomPost: {
		getLink: () => '/random-post',
		pathname: '/random-post',
	},
};
