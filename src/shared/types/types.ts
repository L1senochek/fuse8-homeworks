export interface IRoutes {
	[key: string]: IRoute;
}

interface IRoute {
	getLink: (param?: string) => string;
	pathname: string;
}
