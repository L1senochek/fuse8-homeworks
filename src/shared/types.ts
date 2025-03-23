export interface IRoute {
	pathname: string;
	getLink: (segment?: string) => string;
}

export interface IRoutes {
	[route: string]: IRoute;
}

export interface ICard {
	title: string;
	content: string;
}
