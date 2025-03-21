import { useCallback, useState } from 'react';
import { useFetchPost } from '@pages/random-post/api/use-fetch-post';
import generateRandomNumber from '@shared/helpers/generateRandomNumber';
import { Button } from '@shared/ui';

import styles from './random-post.module.scss';

const MIN_POST_ID = 1;
const MAX_POST_ID = 100;

export const RandomPostPage = () => {
	const [postNumber, setPostNumber] = useState(0);
	const { isLoading, post } = useFetchPost(postNumber);

	const handleClick = useCallback(() => {
		const randomPostNumber = generateRandomNumber(MIN_POST_ID, MAX_POST_ID);
		setPostNumber(randomPostNumber);
	}, []);

	return (
		<div className={styles.post}>
			<div className={styles.postHeader}>
				<h1>Рандомный пост</h1>
				<Button onClick={handleClick} disabled={isLoading}>
					Получить
				</Button>
			</div>
			<article className={styles.postArticle}>
				{isLoading ? (
					<div>Loading post...</div>
				) : (
					post && (
						<div className={styles.postText}>
							{typeof post !== 'string' ? (
								<p>{post.title}</p>
							) : (
								<>
									<p>Failed to fetch post.</p>
									<p>{post}</p>
								</>
							)}
						</div>
					)
				)}
			</article>
		</div>
	);
};
