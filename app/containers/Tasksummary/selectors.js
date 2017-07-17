import { createSelector } from 'reselect';

/**
 * Direct selector to the tasksummary state domain
 */
const selectTasksummaryDomain = () => (state) => state.get('tasksummary');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Tasksummary
 */

const makeSelectTasksummary = () => createSelector(
  selectTasksummaryDomain(),
  (substate) => substate.toJS()
);

export default makeSelectTasksummary;
export {
  selectTasksummaryDomain,
};
