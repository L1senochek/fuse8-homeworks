import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LandingPage } from '@pages/landing-page';
import { MainPage } from '@pages/main';
import { NavigationPage } from '@pages/navigation-page';
import { RandomPostPage } from '@pages/random-post';
import { routes } from '@shared/index';
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
					<Route path={routes.landing.pathname} element={<LandingPage />} />
					<Route path={routes.navigation.pathname} element={<NavigationPage />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	</StrictMode>,
);
