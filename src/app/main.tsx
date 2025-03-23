import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MainPage } from '@pages/main';
import { RandomPostPage } from '@pages/random-post';
import { routes } from '@shared/services/routes.ts';
import { Layout } from '@shared/ui';
import { BrowserRouter, Route, Routes } from 'react-router';

import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path={routes.main.pathname} element={<MainPage />} />
					<Route path={routes.randomPost.pathname} element={<RandomPostPage />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	</StrictMode>,
);
