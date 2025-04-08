import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ArticlePage } from '@pages/article-page';
import { ArticlesPage } from '@pages/articles-page';
import { LandingPage } from '@pages/landing-page';
import { MainPage } from '@pages/main';
import { NavigationPage } from '@pages/navigation-page';
import { RandomPostPage } from '@pages/random-post';
import { routes } from '@shared/index';
import { Layout } from '@shared/ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router';

import './index.css';

const STALE_TIME = 30 * 1000;

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: STALE_TIME,
		},
	},
});

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path={routes.main.pathname} element={<MainPage />} />
						<Route path={routes.randomPost.pathname} element={<RandomPostPage />} />
						<Route path={routes.landing.pathname} element={<LandingPage />} />
						<Route path={routes.navigation.pathname} element={<NavigationPage />} />
						<Route path={routes.article.pathname} element={<ArticlePage />} />
						<Route path={routes.articles.pathname} element={<ArticlesPage />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</QueryClientProvider>
	</StrictMode>,
);
