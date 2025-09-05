import axios from 'axios';

// async yaparak await ile bekletilebilir bir yapı kurduk
export const getUsers = async () => {
	return (await axios.get('https://jsonplaceholder.typicode.com/users')).data;
};
