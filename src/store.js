import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const initialState = {}
const middleware = [thunk, logger];
const store = createStore(
	RootReducer, 
	initialState, 
	applyMiddleware(...middleware)
);

export default store;