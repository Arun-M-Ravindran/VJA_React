import { createSelector } from 'reselect';

/**
 * Direct selector to the leaves3 state domain
 */
const selectLeaves3Domain = () => (state) => state.get('leaves3');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Leaves3
 */

const makeSelectLeaves3 = () => createSelector(
  selectLeaves3Domain(),
  (substate) => substate.toJS()
);

export default makeSelectLeaves3;
export {
  selectLeaves3Domain,
};
