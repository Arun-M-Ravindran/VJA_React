import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SideMenu from '../../components/ac/Sidemenu';
import TopNav from '../../components/ac/TopNav';
import Footer from '../../components/ac/Footer';



class Main extends React.Component {

    render() {
        let wrapperClass = "gray-bg " + this.props.location.pathname;
        return (
            <div id="wrapper">
                <SideMenu location={this.props.location}/>

                <div id="page-wrapper" className={wrapperClass}>

                    <TopNav />

                    {this.props.children}

                    <Footer />
                </div>

            </div>

        )
    }


    componentDidMount() {

        // Run correctHeight function on load and resize window event
        // $(window).bind("load resize", function() {
        //     correctHeight();
        //     detectBody();
        // });

        // Correct height of wrapper after metisMenu animation.
        // $('.metismenu a').click(() => {
        //     setTimeout(() => {
        //         correctHeight();
        //     }, 300)
        // });
    }
}

export default Main