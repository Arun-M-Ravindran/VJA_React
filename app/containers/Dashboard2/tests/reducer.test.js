
import { fromJS } from 'immutable';
import dashboard2Reducer from '../reducer';

describe('dashboard2Reducer', () => {
  it('returns the initial state', () => {
    expect(dashboard2Reducer(undefined, {})).toEqual(fromJS({}));
  });
});
