import axios from 'axios';

const burgerAxiosInstance = axios.create({
	baseURL: 'https://react-practice-git.firebaseio.com/',
});

export default burgerAxiosInstance;