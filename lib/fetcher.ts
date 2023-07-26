import { toastMessages } from '@components/Toast';

export type CustomError = Error & {
	info: unknown;
	status: number;
};

const fetcher = async (url) => {
	const res = await fetch(url);

	// If the status code is not in the range 200-299,
	// we still try to parse and throw it.
	if (!res.ok) {
		const error = new Error(toastMessages.error) as CustomError;
		// Attach extra info to the error object.
		error.info = await res.json();
		error.status = res.status;
		throw error;
	}

	return res.json();
};

export default fetcher;
