// react router useLoader özelliğinden yararlanıcaz. Yeni bir feature

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	useLoaderData,
	useLocation,
	useNavigate,
	useParams,
	useSearchParams,
} from 'react-router';

// React Router v7 form özelliğinde yararlanacağız.
function TodosLessonPage() {
	const data = useLoaderData<any>();

	const location = useLocation(); // istek atılan tüm path bilgilerini yakalamamızı sağlar.
	console.log('location', location);
	// eğer parametreik değerler link üzerinden gönderildiyse /todos/1
	const params = useParams();
	console.log('params', params);
	// js üzerinden sayfalara istek atarken kullanılan bir react router hook.
	const navigate = useNavigate();

	// queryString değerlerine ulaşmak için kullanılan hook
	const [searchParams] = useSearchParams();
	console.log('searchParams', searchParams.get('code'));

	// useEffect kullanmadan asyc veriyi useLoaderData ile işliyoruz.
	// hem user hemde todos bilgisi gelecek
	console.log('data', data);

	return (
		<>
			<hr></hr>
			Data Length: {data['todos'].length}
			<br></br>
			<button onClick={() => navigate('/')}>Home</button>
		</>
	);
}

export default TodosLessonPage;
