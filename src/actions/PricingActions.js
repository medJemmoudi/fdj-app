import * as ActionTypes from './types';

const remoteUrl = process.env.REACT_APP_PROXY_URL + process.env.REACT_APP_TARGET_URL;

export const fetchPricing = () => dispatch => {
	fetch(remoteUrl)
	.then(res  => res.json())
	.then(data => {
		dispatch({
			type: ActionTypes.FETCH_PRICING_MATRIX,
			payload: data.multiples
		});
	});
};