import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


// Redux
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import burgerBuilderReducer from './store/reducers/burgerBuilderReducer.js';
import generalReducer from './store/reducers/generalReducer.js';

const rootReducer = combineReducers({
	burgerBuilderReducer,
	generalReducer,
});

const store = createStore(rootReducer);
 

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();