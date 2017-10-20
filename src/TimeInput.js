import React from 'react';
import PropTypes from 'prop-types';

const TimeInput = ({ record = {}, source }) => {
  const timeInSecs = record[source];

  const hh = Math.trunc(timeInSecs/3600);
  const mm = Math.trunc(timeInSecs%3600/60);
  const ss = timeInSecs%3600%60;

  return (
    // <a href={record[source]}> {record[source]} </a>
    <span>
      <p>HH = {hh}</p>
      <p>MM = {mm}</p>
      <p>SS = {ss}</p>
      {/* <input type='number' value={hh} change=(action 'update') placeholder='HH' />
      <input type='number' value={mm} change=(action 'update') placeholder='MM' />
      <input type='number' value={ss} change=(action 'update') placeholder='SS' /> */}
    </span>
  )
};

TimeInput.propTypes = {
  record: PropTypes.object,
  source: PropTypes.string.isRequired,
};

export default TimeInput;
