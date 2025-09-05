/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

// async yaparak await ile bekletilebilir bir yapı kurduk
export const getTodos = async () => {
	// throw new Error('Hata');

	return (await axios.get('https://jsonplaceholder.typicode.com/todos')).data;
};

// simülation
export const saveTodos = async (formData: any) => {
	console.log('save', formData);
	return Promise.reject({ message: 'Hata', status: 500 });
};
