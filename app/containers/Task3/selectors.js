import { createSelector } from 'reselect';

/**
 * Direct selector to the task3 state domain
 */
const selectTask3Domain = () => (state) => state.get('task3');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Task3
 */

const makeSelectTask3 = () => createSelector(
  selectTask3Domain(),
  (substate) => substate.toJS()
);

export default makeSelectTask3;
export {
  selectTask3Domain,
};
