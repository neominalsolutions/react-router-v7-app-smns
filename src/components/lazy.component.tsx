import { useEffect, useState } from 'react';

function LazyComponentDemo() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((data) => setPosts(data));
	}, []);

	return (
		<>
			<hr></hr>
			Data Length: {posts.length}
		</>
	);
}

export default LazyComponentDemo;
