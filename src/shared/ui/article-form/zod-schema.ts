import { z } from 'zod';

export const schema = z.object({
	title: z
		.string()
		.min(1, 'Title length should be at least 1 character')
		.max(100, 'Title length could not be greater than 100 characters'),
	content: z.object({
		type: z.enum(['draft', 'published']).default('draft'),
		description: z
			.string()
			.min(10, 'Description length should be at least 10 characters')
			.max(1000, 'Description length could not be greater than 1000 characters'),
		isNew: z.boolean().default(false),
	}),
});
