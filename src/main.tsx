import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LandingPage } from '@pages/landing-page.tsx';
import { routes } from '@shared/index';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path={routes.main.getLink()} element={<Navigate to={routes.landing.getLink()} />} />
				<Route path={routes.landing.getLink()} element={<LandingPage />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
