import { useFetcher } from '../../../hooks/useFetcher';

function CustomHookLessonPage() {
	const response = useFetcher('https://jsonplaceholder.typicode.com', 'todos');
	const response1 = useFetcher('https://jsonplaceholder.typicode.com', 'users');

	console.log('todos', response1.data);

	if (response.loading)
		return (
			<>
				<br></br>
				Loading...
			</>
		);

	if (response.error) return <>{response.error}</>;

	if (response.fetched && response1.fetched) {
		return (
			<>
				<hr></hr>
				Data Length: {response.data.length}
			</>
		);
	}
}

export default CustomHookLessonPage;
