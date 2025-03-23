import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LandingPage } from '@pages/landing-page';
import { routes } from '@shared/index';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path={routes.main.pathname} element={<Navigate to={routes.landing.getLink()} />} />
				<Route path={routes.landing.pathname} element={<LandingPage />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
