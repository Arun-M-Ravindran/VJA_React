import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { smoothlyMenu } from './layouts/Helpers';
import { Link, Location } from 'react-router';

class TopNav extends React.Component {

    toggleNavigation(e) {
        e.preventDefault();
        // $("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }

    render() {
        return (
            <div className="row border-bottom">
                <nav className="navbar navbar-static-top white-bg" role="navigation" style={{marginBottom: 0}}>
                    <div className="navbar-header">
                        <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " onClick={this.toggleNavigation} href="#"><i className="fa fa-bars"></i> </a>
                    </div>
                    <ul className="nav navbar-top-links navbar-right">
                        <li >
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Search" required="" />
                            </div>
                        </li>
                        <li>
                            <a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                                <i className="fa fa-bell c-blue"></i>  <span className="label label-danger">8</span>
                            </a>
                        </li>
                        <li >
                            <a href="/login" className="c-blue">
                                <i className="fa fa-sign-out"></i> Log out
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default TopNav