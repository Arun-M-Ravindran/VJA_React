
import { fromJS } from 'immutable';
import dashboard3Reducer from '../reducer';

describe('dashboard3Reducer', () => {
  it('returns the initial state', () => {
    expect(dashboard3Reducer(undefined, {})).toEqual(fromJS({}));
  });
});
