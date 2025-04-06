import { articleAPI } from '@shared/index';
import { ArticleCard } from '@shared/ui';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';

import styles from './articles-page.module.scss';

export function ArticlesPage() {
	const { data, isLoading } = useQuery({
		queryKey: ['getArticles'],
		queryFn: articleAPI.getArticles,
	});

	function content() {
		if (isLoading) return <span>Loading...</span>;
		if (!data) return <span>Loading failed</span>;
		if (!data.length)
			return (
				<p>
					No articles.{' '}
					<Link className={styles.link} to={'/article'}>
						Create first
					</Link>
				</p>
			);
		else
			return (
				<>
					{data.map((article) => (
						<ArticleCard key={article.id} article={article} />
					))}
				</>
			);
	}

	return (
		<>
			<h2>Articles</h2>
			<div className={styles['articles-list']}>{content()}</div>
		</>
	);
}
