import { articleAPI } from '@shared/index';
import { ArticleCard } from '@shared/ui';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';

import styles from './articles-page.module.scss';

export function ArticlesPage() {
	const { data, isLoading, isFetched, isError } = useQuery({
		queryKey: ['getArticles'],
		queryFn: articleAPI.getArticles,
	});

	return (
		<>
			<h1 className={styles['articles-title']}>Articles</h1>
			<div className={styles['articles-list']}>
				{isLoading && <span className={styles['articles-message']}>Loading...</span>}
				{isError && <span className={styles['articles-message']}>Loading failed</span>}
				{isFetched && !data?.length && (
					<p className={styles['articles-message']}>
						No articles.{' '}
						<Link className={styles.link} to={'/article'}>
							Create first
						</Link>
					</p>
				)}
				{isFetched &&
					!!data?.length &&
					data.map((article) => <ArticleCard key={article.id} article={article} />)}
			</div>
		</>
	);
}
