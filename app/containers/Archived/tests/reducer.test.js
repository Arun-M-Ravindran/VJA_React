
import { fromJS } from 'immutable';
import archivedReducer from '../reducer';

describe('archivedReducer', () => {
  it('returns the initial state', () => {
    expect(archivedReducer(undefined, {})).toEqual(fromJS({}));
  });
});
