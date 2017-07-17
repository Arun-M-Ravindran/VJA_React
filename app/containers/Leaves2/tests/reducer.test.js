
import { fromJS } from 'immutable';
import leaves2Reducer from '../reducer';

describe('leaves2Reducer', () => {
  it('returns the initial state', () => {
    expect(leaves2Reducer(undefined, {})).toEqual(fromJS({}));
  });
});
