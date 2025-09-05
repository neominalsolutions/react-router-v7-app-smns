/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, useActionData } from 'react-router';
import { boolean, object, string } from 'yup';

const todoSchema = object({
	title: string().lowercase().required('Title boş geçilemez'),
	completed: boolean().isTrue('Completed False seçilemez'),
});

export const TodoFormAction = async ({ request }: any) => {
	const formData = await request.formData();
	const title = formData.get('title');
	const completed = formData.get('completed') === 'on' ? true : false;

	const data = { title, completed };
	console.log('data', data);

	try {
		// tüm hata kodlarını hepsini bir dizi olarak almak için  abortEarly: false özelliğinden yararlanırız.
		await todoSchema.validate(data, { abortEarly: false });
		// validasyon kontroller yapılabilir
		// validasyon gerçekleşmez ise error throw eder
		return { message: 'Başarılı', status: 200, errors: [] };
	} catch (error: any) {
		if (error.name === 'ValidationError') {
			// Yup hatalarını key-value şeklinde döndür
			const errors = error.inner.reduce((item: any, key: any) => {
				item[key.path] = key.message;
				return item;
			}, {});

			// tüm hata mesajları liste olarak verilir.
			console.log('errors', errors);
			return {
				status: 400,
				message: '',
				errors: errors,
			};
		}
	}
};

// Not: Defaultda react da form direk submit edilemez. Bu sebeple react form işlemleri için kütüphaneler kullanırız. React Router şuan için bir çözüm sunuyor ama bunun dışında Formik, React Hook Forms gibi çözümlerde mevcut.

function TodoFormLessonPage() {
	const response = useActionData();
	console.log('response', response);

	console.log('...TodoFormLessonPage Rendering');

	return (
		<Form method="POST">
			<label>Title : </label>
			<input type="text" name="title" />
			<br></br>
			<label>Completed ?</label>
			<input type="checkbox" name="completed" />
			<br></br>
			<input type="submit" value={'Send'} />
		</Form>
	);
}

export default TodoFormLessonPage;
