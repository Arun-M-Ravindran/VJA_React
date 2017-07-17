import { createSelector } from 'reselect';

/**
 * Direct selector to the dashboard3 state domain
 */
const selectDashboard3Domain = () => (state) => state.get('dashboard3');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Dashboard3
 */

const makeSelectDashboard3 = () => createSelector(
  selectDashboard3Domain(),
  (substate) => substate.toJS()
);

export default makeSelectDashboard3;
export {
  selectDashboard3Domain,
};
