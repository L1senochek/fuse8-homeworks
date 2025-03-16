export interface IRoute {
	path: string;
	getLink: (segment?: string) => string;
}

export interface IRoutes {
	[route: string]: IRoute;
}

export interface ICard {
	title: string;
	content: string;
}
