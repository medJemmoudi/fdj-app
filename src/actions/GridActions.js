import * as ActionTypes from './types';


export const AddRegularNumber = (number) => dispatch => {
	dispatch({
		type: ActionTypes.ADD_REGULAR_NUMBER,
		payload: number
	});
};

export const AddStaredNumber = (number) => dispatch => {
	dispatch({
		type: ActionTypes.ADD_STARED_NUMBER,
		payload: number
	});
};

export const updatePrice = (number) => dispatch => {
	dispatch({
		type: ActionTypes.UPDATE_PRICE,
		payload: number
	});
};