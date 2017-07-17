import { createSelector } from 'reselect';

/**
 * Direct selector to the reports state domain
 */
const selectReportsDomain = () => (state) => state.get('reports');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Reports
 */

const makeSelectReports = () => createSelector(
  selectReportsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectReports;
export {
  selectReportsDomain,
};
