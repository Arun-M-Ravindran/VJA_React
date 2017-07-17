
import { fromJS } from 'immutable';
import leaves3Reducer from '../reducer';

describe('leaves3Reducer', () => {
  it('returns the initial state', () => {
    expect(leaves3Reducer(undefined, {})).toEqual(fromJS({}));
  });
});
