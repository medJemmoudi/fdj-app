import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers';
import thunk from 'redux-thunk';

const initialState = {}
const middleware = [thunk];
const store = createStore(
	RootReducer, 
	initialState, 
	applyMiddleware(...middleware)
);

export default store;