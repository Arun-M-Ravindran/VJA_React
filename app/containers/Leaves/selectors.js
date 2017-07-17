import { createSelector } from 'reselect';

/**
 * Direct selector to the leaves state domain
 */
const selectLeavesDomain = () => (state) => state.get('leaves');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Leaves
 */

const makeSelectLeaves = () => createSelector(
  selectLeavesDomain(),
  (substate) => substate.toJS()
);

export default makeSelectLeaves;
export {
  selectLeavesDomain,
};
