/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';

// component mount olduğunda bir kez çalışır. [] boş array demek, bağımlılık yok demek. Eğer array içinde bir state veya prop olsaydı, o state veya prop değiştiğinde useEffect tekrar çalışırdı.
// useEffect içerisindeki kodlar asenkron çalışır. Bu yüzden useEffect içindeki kodların çalışması render işleminden sonra gerçekleşir. [] bağımlılık array'i boş olduğunda, useEffect içindeki kodlar sadece component mount olduğunda bir kez çalışır. Bu durumda component mount olduktan sonra api çağrısı yapmak için kullanışlıdır. Sayfaları dinamik hale getirmek için kullanılır.

// useEffect Hook; component ilk render çalışır -> sonra render edilirken yani component mount olur -> sonra useEffect içindeki kod çalışır. eğer useEffect içerisinde state değişimi varsa component tekrar render edilir -> component unmount olursa cleanup function çalışır.
// function componentlerde coımponent yaşam döngüsünü useEffect hook'u ile yönetiriz.

const UseEffectComponent = () => {
	useEffect(() => {
		console.log('Component Mount Edildi');
		return () => {
			console.log('Component Unmount Edildi'); // cleanup function
		};
	}, []);
	// render aşaması
	return (
		<>
			<h1>UseEffectComponent</h1>
		</>
	);
};

function UseEffectLessonPage() {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		console.log('UseEffectLessonPage Render Edildi');
		console.log('Visible state i değişti:', visible);
	}, [visible]); // useEffect 2.kullanımı ise [state] içerisine tanımlanan state veya prop değiştiğinde çalışması

	return (
		<>
			{' '}
			{visible && <UseEffectComponent />}{' '}
			{/* visible true ise component render edilir. false ise render edilmez. Yani koşullu render */}
			<FetchApiComponent />
			<br></br>
			<button onClick={() => setVisible(!visible)}>Toggle Component</button>
		</>
	);
}

export default UseEffectLessonPage;

// 3. useEffect ile fetch api çağrısı yapma

export function FetchApiComponent() {
	const [data, setData] = useState<any>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		// resolved -> apiden success döner 200 201 204 status code döner
		// rejected -> apiden error döner 400 404 500 status code döner
		setLoading(true);
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => {
				// fetch api ile çalışırken response stream olarak gelir. Yani response body'yi direkt kullanamayız. Önce response body'yi json formatına çevirmemiz gerekir.
				return response.json(); // response.json() metodu bir promise döner
			})
			.then((data) => {
				// json parse edilmiş data burada
				setData(data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				setLoading(false);
			})
			.finally(() => {});
	}, []);

	// koşullu render
	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error['message']}</p>;
	}

	if (data)
		return (
			<>
				{' '}
				<br></br> Veri Adeti: {data?.length}
                {/* map de dinamik olarak apiden çekilen bilgileri state üzerinden ekrana liste halinde basmamızı sağlar. */}
				{data.map((item: any) => {
					return (
						<div key={item.id}>
							<h3>{item.title}</h3>
						</div>
					);
				})}
			</>
		);
}
