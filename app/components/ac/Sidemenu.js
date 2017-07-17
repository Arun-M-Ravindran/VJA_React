import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, Location } from 'react-router';

class Sidemenu extends Component {

    componentDidMount() {
        const { menu } = this.refs;
        // $(menu).metisMenu();
    }

    activeRoute(routeName) {
        // return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }

    secondLevelActive(routeName) {
        // return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    }

    render() {
        return (
            <nav className="navbar-default navbar-static-side " role="navigation">
                    <ul className="nav metismenu" id="side-menu" ref="menu">
                        <li className="nav-header">
                            <div className="dropdown profile-element"> <span>
                             </span>
                                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                            <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">Example user</strong>
                             </span> <span className="text-muted text-xs block">Example position<b className="caret"></b></span> </span> </a>
                                <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                    <li><a href="#"> Logout</a></li>
                                </ul>
                            </div>
                            <div className="logo-element">
                                IN+
                            </div>
                        </li>
                        <li className={this.activeRoute("/dashboard")}>
                            <Link to="/dashboard"><i className="fa fa-th-large"></i> <span className="nav-label">Dasbhoard_Partner</span></Link>
                        </li>
                        <li className={this.activeRoute("/dash2")}>
                            <Link to="/dash2"><i className="fa fa-th-large"></i> <span className="nav-label">Dasbhoard_Manager</span></Link>
                        </li>
                        <li className={this.activeRoute("/dash3")}>
                            <Link to="/dash3"><i className="fa fa-th-large"></i> <span className="nav-label">Dasbhoard_Article</span></Link>
                        </li>
                        <li className={this.activeRoute("/tasks1")}>
                            <Link to="/tasks1"><i className="fa fa-tasks"></i> <span className="nav-label">Tasks_Partner</span></Link>
                        </li>
                        <li className={this.activeRoute("/tasks2")}>
                            <Link to="/tasks2"><i className="fa fa-tasks"></i> <span className="nav-label">Tasks_Manager</span></Link>
                        </li>
                        <li className={this.activeRoute("/tasks3")}>
                            <Link to="/tasks3"><i className="fa fa-tasks"></i> <span className="nav-label">Tasks_Article</span></Link>
                        </li>
                        <li className={this.activeRoute("/client")}>
                            <Link to="/client"><i className="fa fa-users"></i> <span className="nav-label">Clients</span></Link>
                        </li>
                         <li className={this.activeRoute("/archived")}>
                            <Link to="/archived"><i className="fa fa-calendar"></i> <span className="nav-label">Archived Tasks</span></Link>
                        </li>
                        <li className={this.activeRoute("/report")}>
                            <Link to="/report"><i className="fa fa-book"></i> <span className="nav-label">Reports</span></Link>
                        </li>
                        <li className={this.activeRoute("/leave")}>
                            <Link to="/leave"><i className="fa fa-calendar"></i> <span className="nav-label">Leaves</span></Link>
                        </li>
                        <li className={this.activeRoute("/leaves2")}>
                            <Link to="/leaves2"><i className="fa fa-calendar"></i> <span className="nav-label">Leaves_Article</span></Link>
                        </li>
                        <li className={this.activeRoute("/tasksummary")}>
                            <Link to="/tasksummary"><i className="fa fa-book"></i> <span className="nav-label">Task Summary</span></Link>
                        </li>
                        <li className={this.activeRoute("/tasksummary")}>
                            <Link to="/tasksummary"><i className="fa fa-book"></i> <span className="nav-label">Notifications</span></Link>
                        </li>
                        <li className={this.activeRoute("/")}>
                            <Link to="/leave"><i className="fa fa-calendar"></i> <span className="nav-label">Time</span></Link>
                        </li>
                        <li className={this.activeRoute("/minor")}>
                            <Link to="/leave"><i className="fa fa-calendar"></i> <span className="nav-label">Billing</span></Link>
                        </li>
                        <li className={this.activeRoute("/minor")}>
                            <Link to="/leave"><i className="fa fa-calendar"></i> <span className="nav-label">Payroll</span></Link>
                        </li>
                    </ul>
            </nav>
        )
    }
}

export default Sidemenu