/*
 *
 * Login reducer
 *
 */

    import { fromJS } from 'immutable';
    import { browserHistory } from 'react-router';

    import {
      DEFAULT_ACTION,
      LOGIN_ACTION
    } from './constants';

    const initialState = fromJS({
    	status: false
    });

    function loginReducer(state = initialState, action) {
      switch (action.type) {
        case DEFAULT_ACTION:
          return state;

        case LOGIN_ACTION: 
        console.log("Arun")
        	return _testFunction(state,action.json);
            default:
          return state;
      }
    }

    function _testFunction(state, json) {
      
    // 	if(json.username == "arun@gmail.com" && json.password == "1234") {
     
    // 	// return state.set("status", true)
    // }
    }

    export default loginReducer;
