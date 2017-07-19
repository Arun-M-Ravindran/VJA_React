/*
 *
 * Leaves reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({});

function leavesReducer(state = initialState, action) {
  console.log("Leaves");
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}



export default leavesReducer;
