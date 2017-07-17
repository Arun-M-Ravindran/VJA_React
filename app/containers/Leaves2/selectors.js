import { createSelector } from 'reselect';

/**
 * Direct selector to the leaves2 state domain
 */
const selectLeaves2Domain = () => (state) => state.get('leaves2');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Leaves2
 */

const makeSelectLeaves2 = () => createSelector(
  selectLeaves2Domain(),
  (substate) => substate.toJS()
);

export default makeSelectLeaves2;
export {
  selectLeaves2Domain,
};
