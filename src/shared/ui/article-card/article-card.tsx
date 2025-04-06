import { articleAPI } from '@shared/api/article-api';
import { Article } from '@shared/api/types';
import { Button } from '@shared/ui';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import cl from 'classnames';

import styles from './article-card.module.scss';

export function ArticleCard({ article }: { article: Article }) {
	const queryClient = useQueryClient();
	const { mutate, isPending } = useMutation({
		mutationKey: ['deleteArticle'],
		mutationFn: (id: string) => articleAPI.deleteArticle(id),
		onSuccess: () => {
			queryClient.setQueryData(['getArticles'], (articles: Article[]) =>
				articles.filter((articleItem) => articleItem.id !== article.id),
			);
		},
	});

	function deleteArticle() {
		mutate(article.id);
	}

	return (
		<div
			className={cl(
				styles.article,
				'isNew' in article.content && article.content.isNew && styles['is-new'],
			)}
		>
			<h3 className={styles.articleTitle}>{article.title}</h3>
			<div className={styles.articleContent}>
				<p className={styles.articleDescription}>
					{'description' in article.content && article.content.description}
				</p>
			</div>
			<Button disabled={isPending} onClick={deleteArticle} type={'button'}>
				Delete article
			</Button>
		</div>
	);
}
