import { PropsWithChildren } from 'react';

export interface IRoutes {
	[key: string]: IRoute;
}

interface IRoute {
	getLink: (param?: string) => string;
	pathname: string;
}

export type NavParams = {
	title: string;
	href: string;
};

export interface NavProps {
	props: NavParams[];
}

export interface ButtonProps extends PropsWithChildren {
	type?: 'button' | 'submit' | 'reset';
	className?: string;
	disabled?: boolean;
	onClick?: () => void;
}

export interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}
