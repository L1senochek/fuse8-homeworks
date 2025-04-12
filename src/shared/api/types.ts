import { schema } from '@shared/ui/article-form/zod-schema';
import { z } from 'zod';

export interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

type ArticleContent =
	| { type: 'draft' }
	| { type: 'published'; description: string; isNew: boolean };

export type Article = {
	id: string;
	title: string;
	content: ArticleContent;
};

export type CreateArticle = {
	title: string;
	content: ArticleContent;
};

export type UpdateArticle = {
	title: string;
	content: ArticleContent;
};

export type ArticleSchema = z.infer<typeof schema>;
