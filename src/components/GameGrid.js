import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchPricing } from '../actions/PricingActions';
import { AddRegularNumber, AddStaredNumber, updatePrice, eraseValues } from '../actions/GridActions';
import { getTotalPrice } from '../selectors'

const numbers = _.range(1, 51);
const stars = _.range(1, 12);

class GameGrid extends React.Component {

	componentDidMount() {
		this.props.fetchPricing();
	}

	selectNumber = (e) => {
		let { attributes } = e.target;
		let { selectedNumbers } = this.props.grid;

		if (selectedNumbers.length < 5) {
			this.props.AddRegularNumber(parseInt(attributes['data-number'].value));
		}
	}

	selectStar = (e) => {
		let { attributes } = e.target;
		let { selectedStars } = this.props.grid;

		if (selectedStars.length < 2) {
			this.props.AddStaredNumber(parseInt(attributes['data-number'].value));
		}
	}

	render() {
		const listOfNumbers = numbers.map((num, index) => (
	      <span 
	      	className={ this.props.grid.selectedNumbers.includes(num) ? "number-item selected" : "number-item" } 
	      	data-number={ num } 
	      	key={ index }
	      	onClick={this.selectNumber}>
	      		{ num }
	      </span>
	    ));

	    const listOfStars = stars.map((num, index) => (
	      <span 
	      	className={ this.props.grid.selectedStars.includes(num) ? "star-item selected" : "star-item" } 
	      	data-number={ num } 
	      	key={ index }
	      	onClick={this.selectStar}
	      >
	      	{ num }
	      </span>
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
	          <div className="col-sm-2 offset-sm-8">
	            <button 
	            	type="button" 
	            	className="btn btn-danger grid-cancel"
	            	onClick={ this.props.eraseValues }>
	            		Effacer
	            </button>
	          </div>
	          <div className="col-sm-2 grid-sum">
	            <p>Total: <strong>{ this.props.totalPrice }</strong></p>
	          </div>
	        </div>
		);
	}
}

GameGrid.propTypes = {
	pricingTable: PropTypes.array.isRequired,
	grid: PropTypes.object.isRequired,
	totalPrice: PropTypes.number.isRequired,
	fetchPricing: PropTypes.func.isRequired,
	AddRegularNumber: PropTypes.func.isRequired,
	AddStaredNumber: PropTypes.func.isRequired,
	updatePrice: PropTypes.func.isRequired,
	eraseValues: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
	return {
		pricingTable: state.prices.prices,
		grid: state.grid,
		totalPrice: getTotalPrice(state)
	}
};

const mappedActions = { fetchPricing, AddRegularNumber, AddStaredNumber, updatePrice, eraseValues };

export default connect(mapStateToProps, mappedActions)(GameGrid);