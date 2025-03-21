import { useEffect, useState } from 'react';
import { fetchPost } from '@shared/api/fetch-post';
import { Post } from '@shared/api/types';

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

		if (postNumber) fetchRandomPost();
	}, [postNumber]);

	return { isLoading, post };
};
