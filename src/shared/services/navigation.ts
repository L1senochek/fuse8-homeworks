import { Navigation, NavigationRoutes } from '../helpers/types';

const USER_READ_PERMISSIONS = ['vacancies', 'users', 'candidates', 'clients', 'partners'];

export const checkHasUserPermission = (routeName: string) => {
	return USER_READ_PERMISSIONS.includes(routeName);
};

export const routes: NavigationRoutes = {
	vacancies: {
		name: 'vacancies',
		pathname: 'vacancies',
		getLink: () => '/vacancies',
		text: 'Вакансии',
	},
	candidates: {
		name: 'candidates',
		pathname: 'candidates',
		getLink: () => '/candidates',
		text: 'Кандидаты',
	},
	events: {
		name: 'events',
		pathname: 'events',
		getLink: () => '/events',
		text: 'События',
	},
	clients: {
		name: 'clients',
		pathname: 'clients',
		getLink: () => '/clients',
		text: 'Клиенты',
	},
	partners: {
		name: 'partners',
		pathname: 'partners',
		getLink: () => '/partners',
		text: 'Клиенты',
	},
};

export const navigationList: Navigation[] = [
	{
		name: 'content',
		text: 'Контент',
		children: [
			{
				name: 'job',
				text: 'Работа',
				children: [routes.vacancies, routes.candidates],
			},
			{
				name: 'news',
				text: 'Новости',
				children: [routes.events],
			},
		],
	},
	{
		name: 'users',
		text: 'Пользователи',
		children: [
			{
				name: 'inner-users',
				text: 'Внутренние пользователи',
				children: [routes.clients, routes.partners],
			},
		],
	},
];
