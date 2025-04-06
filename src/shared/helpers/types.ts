export interface NavigationRoutes {
	[route: string]: NavigationRoute;
}

export interface NavigationRoute {
	name: string;
	pathname: string;
	getLink: (param?: string) => string;
	text: string;
}

export interface NavigationItem<T> {
	name: string;
	text: string;
	children: T[];
}

// Здесь отступила от правила использовать только interface или type, чтобы в коде не описывать такой тип
export type Navigation = NavigationItem<NavigationItem<NavigationRoute>>;
