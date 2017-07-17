import { createSelector } from 'reselect';

/**
 * Direct selector to the task2 state domain
 */
const selectTask2Domain = () => (state) => state.get('task2');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Task2
 */

const makeSelectTask2 = () => createSelector(
  selectTask2Domain(),
  (substate) => substate.toJS()
);

export default makeSelectTask2;
export {
  selectTask2Domain,
};
