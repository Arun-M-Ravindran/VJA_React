/*
 *
 * Login actions
 *
 */

import {
  DEFAULT_ACTION,
  LOGIN_ACTION
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,

  };
}

export function loginAction(json) {
	console.log("Arun", json);
  var Router = require('react-router');
       Router.browserHistory.push('/dashboard');
  // return {
  //   type: LOGIN_ACTION,
  //   json
  // };
}
