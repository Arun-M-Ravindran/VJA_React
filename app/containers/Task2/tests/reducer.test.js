
import { fromJS } from 'immutable';
import task2Reducer from '../reducer';

describe('task2Reducer', () => {
  it('returns the initial state', () => {
    expect(task2Reducer(undefined, {})).toEqual(fromJS({}));
  });
});
