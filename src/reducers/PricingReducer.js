import * as ActionTypes from '../actions/types';

const initialState = {
	prices: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.FETCH_PRICING_MATRIX:
			return { prices: action.payload };

		default:
			return state;
	}
};