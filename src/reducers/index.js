import { combineReducers } from 'redux';
import PricingReducer from './PricingReducer';

export default combineReducers({
	prices: PricingReducer,
});