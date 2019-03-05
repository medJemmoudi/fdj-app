import React from 'react';
import _ from 'lodash';

const numbers = _.range(1, 51);
const stars = _.range(1, 12);

class GameGrid extends React.Component {
	render() {
		const listOfNumbers = numbers.map((num, index) => (
	      <span className="number-item" key={ index }>{ num }</span>
	    ));

	    const listOfStars = stars.map((num, index) => (
	      <span className="star-item" key={ index }>{ num }</span>
	    ));

		return (
			<div className="row">
	          <div className="col-xs-12 col-sm-12 blank-grid">
	            <div className="row">
	              <div className="col-sm-10 grid-entry">
	                { listOfNumbers }
	              </div>
	              <div className="col-sm-2 grid-star-entry">
	                { listOfStars }
	              </div>
	            </div>
	          </div>
	          <div className="col-sm-2 offset-sm-10 grid-sum">
	            <p>Total: <strong>{ '102' }</strong></p>
	          </div>
	        </div>
		);
	}
}

export default GameGrid;