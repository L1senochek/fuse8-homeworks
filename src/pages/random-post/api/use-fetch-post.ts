import { useState } from 'react';
import { fetchPost } from '@shared/api/fetch-post';
import { Post } from '@shared/api/types';

export const useFetchPost = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [post, setPost] = useState<Post | string | null>(null);

	const fetchRandomPost = async (postNumber: number) => {
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

	return { isLoading, post, fetchRandomPost };
};
