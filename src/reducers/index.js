import { combineReducers } from 'redux';
import PricingReducer from './PricingReducer';
import GridReducer from './GridReducer';

export default combineReducers({
	prices: PricingReducer,
	grid: GridReducer,
});