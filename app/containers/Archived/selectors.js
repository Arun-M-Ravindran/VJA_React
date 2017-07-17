import { createSelector } from 'reselect';

/**
 * Direct selector to the archived state domain
 */
const selectArchivedDomain = () => (state) => state.get('archived');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Archived
 */

const makeSelectArchived = () => createSelector(
  selectArchivedDomain(),
  (substate) => substate.toJS()
);

export default makeSelectArchived;
export {
  selectArchivedDomain,
};
