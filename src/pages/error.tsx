/* eslint-disable @typescript-eslint/no-explicit-any */
import { isRouteErrorResponse, useRouteError } from 'react-router';

export default function ErrorPage() {
	const error: any = useRouteError(); // component içindeki hataları yakarlar
	console.log('error', error);

	if (isRouteErrorResponse(error)) {
		// route tanımlı bir hata varsa yakalar. 4xx ve 5xx hata responselarını yakalamamızı sağlar.
		return (
			<div>
				<h1>Oops!</h1>
				<p>Status: {error.status}</p>
				<p>{error.statusText}</p>
			</div>
		);
	}

	return (
		<div>
			<h1>Something went wrong!</h1>
			<p>{error.message}</p>
		</div>
	);
}
