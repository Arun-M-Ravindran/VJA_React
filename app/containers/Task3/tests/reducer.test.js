
import { fromJS } from 'immutable';
import task3Reducer from '../reducer';

describe('task3Reducer', () => {
  it('returns the initial state', () => {
    expect(task3Reducer(undefined, {})).toEqual(fromJS({}));
  });
});
