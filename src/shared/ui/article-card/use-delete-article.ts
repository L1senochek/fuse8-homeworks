import { articleAPI } from '@shared/api/article-api';
import { Article } from '@shared/api/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useDeleteArticle(id: string) {
	const queryClient = useQueryClient();
	const { mutate, isPending } = useMutation({
		mutationKey: ['deleteArticle'],
		mutationFn: (id: string) => articleAPI.deleteArticle(id),
		onSuccess: () => {
			queryClient.setQueryData(['getArticles'], (articles: Article[]) =>
				articles.filter((articleItem) => articleItem.id !== id),
			);
		},
	});

	function deleteArticle() {
		mutate(id);
	}

	return { deleteArticle, isPending } as const;
}
