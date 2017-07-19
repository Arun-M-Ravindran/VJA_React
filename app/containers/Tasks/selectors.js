import { createSelector } from 'reselect';

/**
 * Direct selector to the tasks state domain
 */
const selectTasksDomain = () => (state) => state.get('tasks');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Tasks
 */

const makeSelectTasks = () => createSelector(
  selectTasksDomain(),
  (substate) => substate.toJS()
);


const makeSelectTasksData = () => createSelector(
  selectTasksDomain(),
  (substate) => substate.get('tasksData').toJS()
);

// export default makeSelectTasks;
export {
  selectTasksDomain,
  makeSelectTasksData,
};
