import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';


// Store
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import counterReducer from './store/reducers/counterReducer.js';
import resultsReducer from './store/reducers/resultsReducer.js';

const rootReducer = combineReducers({
	counterReducer,
	resultsReducer
});


const logger = (store) => {
	return (next) => {
		return (action) => {
			console.log('[Middleware] Start dispatching: ', action);
			const result = next(action);
			console.log('[Middleware] New state: ', store.getState());
			return result;
		}
	}
}


const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnchancers(applyMiddleware(logger, thunk)));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
