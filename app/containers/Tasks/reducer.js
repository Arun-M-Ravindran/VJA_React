/*
 *
 * Tasks reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({

  tasksData : [
        { numer: 1, client: 'Korath and Sons Financiers', task: 'Audit', Partner: 'Sharon Mathew', Manager: 'Anisha', Article: 'Arun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17',completion: '', status: 'Work in Progress' },
        { numer: 2, client: 'XYZ', task: 'Audit', Partner: 'Chacko', Manager: 'Anisha', Article: 'Arun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17',completion: '', status: 'Freezed' },
        { numer: 3, client: 'VAS', task: 'Audit', Partner: 'Sharon', Manager: 'Anisha', Article: 'nidhun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17',completion: '' ,status: 'Overdue' },
        { numer: 4, client: 'XYZ', task: 'Audit', Partner: 'Sharon', Manager: 'Anisha', Article: 'Arun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17',completion: '20-07-17', status: 'Finished' },
        { numer:5 , client: 'VAS', task: 'Audit', Partner: 'Sharon', Manager: 'Anisha', Article: 'Arun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17',completion: '', status: 'Work in Progress' },
        { numer: 2, client: 'XYZ', task: 'Audit', Partner: 'Chacko', Manager: 'Anisha', Article: 'Arun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17',completion: '', status: 'Freezed' },
        { numer: 3, client: 'VAS', task: 'Audit', Partner: 'Sharon', Manager: 'Anisha', Article: 'nidhun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17',completion: '', status: 'Overdue' },
        { numer: 4, client: 'XYZ', task: 'Audit', Partner: 'Sharon', Manager: 'Anisha', Article: 'Arun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17',completion: '20-07-17', status: 'Finished' },
        { numer:' 1', client: 'VAS', task: 'Audit', Partner: 'Sharon', Manager: 'Anisha', Article: 'Arun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17',completion: '', status: 'Work in Progress' },
        { numer: 2, client: 'XYZ', task: 'Audit', Partner: 'Chacko', Manager: 'Anisha', Article: 'Arun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17',completion: '', status: 'Freezed' },
        { numer: 3, client: 'VAS', task: 'Audit', Partner: 'Sharon', Manager: 'Anisha', Article: 'nidhun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17',completion: '', status: 'Overdue' },
        { numer: 4, client: 'XYZ', task: 'Audit', Partner: 'Sharon', Manager: 'Anisha', Article: 'Arun', Time: 1, Date_of_Allocation:'17-06-17', Due_date: '17-06-17',completion: '20-07-17', status: 'Finished' },
  ]

});

function tasksReducer(state = initialState, action) {
  console.log("TaskReducer", state);
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

  function _dummy(state) {
  	console.log("Dummy function");
  }
export default tasksReducer;
