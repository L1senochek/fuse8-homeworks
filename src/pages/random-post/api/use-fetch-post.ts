import { useEffect, useState } from 'react';
import { Post } from '@shared/types/types.ts';
import { fetchPost } from '@shared/api/fetch-post.ts';

export const useFetchPost = (postNumber: number) => {
	const [isLoading, setIsLoading] = useState(false);
	const [post, setPost] = useState<Post | string | null>(null);

	useEffect(() => {
		const fetchRandomPost = async () => {
			setIsLoading(true);
			try {
				const post = await fetchPost(postNumber);
				setPost(post);
			} catch (error) {
				if (error instanceof Error) setPost(error.message);
				else setPost('Unknown error');
			} finally {
				setIsLoading(false);
			}
		};

		if (postNumber) void fetchRandomPost();
	}, [postNumber]);

	return { isLoading, post };
};
