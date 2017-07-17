/*
 *
 * Leaves3
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectLeaves3 from './selectors';
import messages from './messages';

export class Leaves3 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Leaves3"
          meta={[
            { name: 'description', content: 'Description of Leaves3' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Leaves3.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Leaves3: makeSelectLeaves3(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaves3);
