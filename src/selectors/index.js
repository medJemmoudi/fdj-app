import { createSelector } from 'reselect';
import _ from 'lodash';

const getSelectedNumbers = state => state.grid.selectedNumbers
const getSelectedStars = state => state.grid.selectedStars
const getPrices = state => state.prices.prices

export const getTotalPrice = createSelector(
  [getSelectedNumbers, getSelectedStars, getPrices],
  (selectedNumbers, selectedStars, prices) => {
    // 1st, let's create all the patterns 
    let patterns = [];
    let totalPrice = 0;

    selectedNumbers.forEach((number) => {
      selectedStars.forEach((star) => {
        patterns.push([number, star]);
      });
    });


    // now we can loop over the pricing table 
    patterns.forEach((pt) => {
      prices.forEach(item => {
        if (_.isEqual(item.pattern, pt))
          totalPrice += item.cost.value / 100;
      });
    });

    return _.floor(totalPrice);
  }
)