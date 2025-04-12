import { Article } from '@shared/api/types';
import { capitalize } from '@shared/helpers/functions';
import { Button } from '@shared/ui';
import { useDeleteArticle } from '@shared/ui/article-card/use-delete-article';
import cl from 'classnames';

import styles from './article-card.module.scss';

export function ArticleCard({ article }: { article: Article }) {
	const { deleteArticle, isPending } = useDeleteArticle(article.id);

	return (
		<div
			className={cl(
				styles.article,
				'isNew' in article.content && article.content.isNew && styles['is-new'],
			)}
		>
			<h2 className={styles['article-title']}>
				{article.title}{' '}
				<span className={styles['article-status']}>{capitalize(article.content.type)}</span>
			</h2>
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
