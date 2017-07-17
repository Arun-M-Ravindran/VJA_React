import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, Location } from 'react-router';
import Sidemenu from '../ac/Sidemenu';
import TopNav from '../ac/TopNav';
import Footer from '../ac/Footer';

class Maincomponent extends Component {

    render() {
    	return (
        <div>
        	<Sidemenu />
        	<TopNav />

        </div>
        )
    }
}

export default Maincomponent