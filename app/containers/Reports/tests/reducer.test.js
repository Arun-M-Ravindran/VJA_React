
import { fromJS } from 'immutable';
import reportsReducer from '../reducer';

describe('reportsReducer', () => {
  it('returns the initial state', () => {
    expect(reportsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
