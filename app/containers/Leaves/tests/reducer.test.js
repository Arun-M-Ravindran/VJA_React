
import { fromJS } from 'immutable';
import leavesReducer from '../reducer';

describe('leavesReducer', () => {
  it('returns the initial state', () => {
    expect(leavesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
