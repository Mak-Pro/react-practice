// 1. Получаем модуль REDUX
const redux = require('redux');

// 2. Создаем начальное состояние
const initialState = {
	counter: 0,
}


// 3. Создаем глобальный reducer (может содержать в себе множество редьюсеров)
const rootReducer = (state = initialState, action) => {

	// Проверяем тип action и выполняем соотвтствующий код
	switch(action.type) {
		case ('INC_COUNTER'):
			return {
				...state,
				counter: state.counter + 1,
			}
			break;
		case ('ADD_COUNTER'):
			return {
				...state,
				counter: state.counter + action.payload.count,
			}
			break;
	}
	// Всегда должен взвращаться state, даже без action
	return state;
}



// 4. Создаем Store
const createStore = redux.createStore;

// 5. Передаем в store rootReducer
const store = createStore(rootReducer);

// Вручную выводим инфо о state
console.log(store.getState());


// 6. Устанавливаем Subscription для автоматического получения state
store.subscribe(() => {
	console.log('[Subscription]', store.getState());
});


// 7. Добавляем Actions с обязательным ключем type и, если необходимо, доп инфо в объекте payload
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', payload: { count: 10 }});



