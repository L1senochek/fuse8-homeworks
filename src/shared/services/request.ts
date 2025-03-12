import axios from 'axios';
import { BASE_URL } from '@shared/helpers/constants.ts';

export const fetcher = axios.create({
	baseURL: BASE_URL,
	headers: { 'Content-Type': 'application/json' },
	timeout: 3000,
});
