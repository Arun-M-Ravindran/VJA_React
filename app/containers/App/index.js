/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from 'components/Header';
import ooter from 'components/Footer';

import withProgressBar from 'components/ProgressBar';

// import img from '../../assets/img/ca.jpg';

import SideMenu from '../../components/ac/Sidemenu';
import TopNav from '../../components/ac/TopNav';
import Footer from '../../components/ac/Footer';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

// var imgUrl = ".app/assets/img/ac.jpg";
var divStyle = {
  // backgroundImage: 'url(' + img + ')',
  background: "#233646",
  opacity: 1,
  minHeight: "681px"
};

export function App(props) {
  return (
      <div style={divStyle}>
        {React.Children.toArray(props.children)}
      </div>
        )
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
