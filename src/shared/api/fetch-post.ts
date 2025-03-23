import { Post } from '@shared/api/types.ts';
import { fetcher } from '@shared/services/request.ts';

export const fetchPost = async (id: number) => {
	try {
		const response = await fetcher.get<Post>(`/${id}`);
		return response.data;
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}
		throw new Error('Unknown error');
	}
};
