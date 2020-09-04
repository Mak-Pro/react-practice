import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import axios from 'axios';



//axios default configuration
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';


// For request
axios.interceptors.request.use(request => {
	console.log(request);
	return request;
}, error => {
	console.log(error);
	return Promise.reject(error);
});

// For response
axios.interceptors.response.use(response => {
	console.log(response);
	return response;
}, error => {
	console.log(error);
	return Promise.reject(error);
});


// Removing interceptors
// Simply store the reference to the interceptor in a variable and call eject  with that reference as an argument, to remove it
// var myInterceptor = axios.interceptors.request.use(function () {...});
// axios.interceptors.request.eject(myInterceptor);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
