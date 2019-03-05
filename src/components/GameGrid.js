import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchPricing } from '../actions/PricingActions';

const numbers = _.range(1, 51);
const stars = _.range(1, 12);

class GameGrid extends React.Component {

	componentWillMount() {
		this.props.fetchPricing();
	}

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

const mapStateToProps = (state) => {
	return {
		pricingTable: state.prices.prices
	}
};

export default connect(mapStateToProps, { fetchPricing })(GameGrid);