import { createSelector } from 'reselect';

/**
 * Direct selector to the dashboard2 state domain
 */
const selectDashboard2Domain = () => (state) => state.get('dashboard2');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Dashboard2
 */

const makeSelectDashboard2 = () => createSelector(
  selectDashboard2Domain(),
  (substate) => substate.toJS()
);

export default makeSelectDashboard2;
export {
  selectDashboard2Domain,
};
