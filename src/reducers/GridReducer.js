import * as ActionTypes from '../actions/types';

const initialState = {
	selectedNumbers: [],
	selectedStars: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.ADD_REGULAR_NUMBER:
			return { ...state, selectedNumbers: [...state.selectedNumbers, action.payload] };

		case ActionTypes.ADD_STARED_NUMBER:
			return { ...state, selectedStars: [...state.selectedStars, action.payload] };
		
		case ActionTypes.UPDATE_PRICE:
			return { ...state, totalPrice: action.payload };

		default:
			return state;
	}
};