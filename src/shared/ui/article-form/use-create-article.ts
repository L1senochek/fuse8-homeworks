import { articleAPI } from '@shared/api/article-api';
import { ArticleSchema } from '@shared/api/types';
import { routes } from '@shared/services/routes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

export function useCreateArticle() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const { isPending, mutate } = useMutation({
		mutationKey: ['createArticle'],
		mutationFn: articleAPI.createArticle,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['getArticles'] });
			navigate(routes.articles.pathname);
		},
	});

	function onSubmit(data: ArticleSchema) {
		mutate(data);
	}

	return { onSubmit, isPending };
}
