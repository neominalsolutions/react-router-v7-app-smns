// react router useLoader özelliğinden yararlanıcaz. Yeni bir feature

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLoaderData } from 'react-router';

// React Router v7 form özelliğinde yararlanacağız.
function TodosLessonPage() {
	const data = useLoaderData<any>();

	// useEffect kullanmadan asyc veriyi useLoaderData ile işliyoruz.
	// hem user hemde todos bilgisi gelecek
	console.log('data', data);

	return (
		<>
			<hr></hr>
			Data Length: {data['todos'].length}
		</>
	);
}

export default TodosLessonPage;
