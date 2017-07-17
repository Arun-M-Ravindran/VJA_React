
import { fromJS } from 'immutable';
import tasksummaryReducer from '../reducer';

describe('tasksummaryReducer', () => {
  it('returns the initial state', () => {
    expect(tasksummaryReducer(undefined, {})).toEqual(fromJS({}));
  });
});
