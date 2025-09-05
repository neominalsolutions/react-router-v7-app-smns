import axios from 'axios';

// async yaparak await ile bekletilebilir bir yapı kurduk
export const getTodos = async () => {
	// throw new Error('Hata');

	return (await axios.get('https://jsonplaceholder.typicode.com/todos')).data;
};
