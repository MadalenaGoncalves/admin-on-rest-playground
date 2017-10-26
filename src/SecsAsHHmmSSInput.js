import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import TimeComponent from './TimeComponent.js';

class SecsAsHHmmSSInput extends React.Component {
  render() {
    return (
      <Field component={TimeComponent} name={this.props.source} />
    )
  }
}

SecsAsHHmmSSInput.propTypes = {
  record: PropTypes.object,
  source: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

SecsAsHHmmSSInput.defaultProps = {
  addLabel: true,
}

export default SecsAsHHmmSSInput;
