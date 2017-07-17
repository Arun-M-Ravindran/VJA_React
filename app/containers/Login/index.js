/*
 *
 * Login
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectLogin from './selectors';
import messages from './messages';
import Header from '../../components/ac/TopNav';
import {loginAction} from './actions';


export class Login extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    // this.handleChange = this.handleChangeUsername.bind(this);
    // this.handleSubmit = this.handleChangePassword.bind(this);
  }

  handleChangeUsername(event) {
    console.log(event.target.value);
    this.setState({username: event.target.value});
    console.log(this.state.username)
  }
  handleChangePassword(event) {
    this.setState({password: event.target.value});
    console.log(this.state.password)
  }

  handleSubmit(event) {
    
    this.props.dispatch(loginAction(this.state));
    // event.preventDefault();
  }

   // onSubmit={this.handleSubmit.bind(this)} action="/dashboard"

  render() {

    return (

      <div>
      <div className="loginColumns animated fadeInDown">
        <div className="row">

            <div className="col-md-6">

            </div>
            <div className="col-md-6">
                <div className="ibox-content">
                    <form className="m-t" role="form" onSubmit={this.handleSubmit.bind(this)}>
                        <div className="form-group">
                            <input type="email" value={this.state.username} onChange={this.handleChangeUsername.bind(this)} className="form-control" placeholder="Username" required="" />
                        </div>
                        <div className="form-group">
                            <input type="password" value={this.state.password} onChange={this.handleChangePassword.bind(this)} className="form-control" placeholder="Password" required="" />
                        </div>
                        <button type="submit" className="btn btn-primary block full-width m-b">Login</button>

                        <a href="#">
                            <small>Forgot password?</small>
                        </a>
                    </form>
                </div>
            </div>
        </div>
        <hr/>
        <div className="row">
            <div className="col-md-6">
                Copyright Example Company
            </div>
            <div className="col-md-6 text-right">
               <small>© 2014-2015</small>
            </div>
        </div>
    </div>

      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  // Login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
