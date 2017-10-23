import React from 'react';
import PropTypes from 'prop-types';

const SecsAsHHmmSSField = ({ record = {}, source }) => {
  const timeInSecs = record[source];
  const use2Digits = x => ('0' + x).slice(-2);

  const hh = use2Digits(Math.trunc(timeInSecs/3600));
  const mm = use2Digits(Math.trunc(timeInSecs%3600/60));
  const ss = use2Digits(timeInSecs%3600%60);

  return (
    <span>{hh}:{mm}:{ss}</span>
  )
};

SecsAsHHmmSSField.propTypes = {
  record: PropTypes.object,
  source: PropTypes.string.isRequired,
};

export default SecsAsHHmmSSField;
