import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { NumberInput } from 'admin-on-rest';

// const formatTimeHH = x => Math.trunc(x/3600);
// const parseTimeHH = x => x*3600;
//
// const formatTimeMM = x => Math.trunc(x%3600/60);
// const parseTimeMM = x => Math.trunc(x%3600/60);
//
// const formatTimeSS = x => x%3600%60;
// const parseTimeSS = x => x%3600%60;

// ({ record = {}, source })
class SecsAsHHmmSSInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hh: 0,
      mm: 0,
      ss: 0,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const timeInSecs = this.props.record[this.props.source];

    const hh = this.formatTimeHH(timeInSecs);
    const mm = this.formatTimeMM(timeInSecs);
    const ss = this.formatTimeSS(timeInSecs);

    this.setState({ hh: hh, mm: mm, ss: ss });
  }

  handleChange(event) {
    if (event && event.target) {
      const name = event.target.name;
      const value = event.target.value;

      const timeInSecs = this.props.record[this.props.source];

      switch (name) {
        case 'hh':
          this.setState({ hh: value * 1 })
          break;
        case 'mm':
          this.setState({ mm: value * 1 })
          break;
        default:
          this.setState({ ss: value * 1 })
      }

      const time = this.parseTimeHH(this.state.hh) + this.parseTimeMM(this.state.mm) + this.state.ss
      console.log('current time in secs', time);
      // this.props.onChange(time);
    }
  }

  formatTimeHH(x) {
    return Math.trunc(x/3600);
  }
  formatTimeMM(x) {
    return Math.trunc(x%3600/60);
  }
  formatTimeSS(x) {
    return x%3600%60;
  }

  parseTimeHH(x) {
    return x*3600;
  }
  parseTimeMM(x) {
    return x*60
  }

  render() {
    // console.log("PROPS", this.props);
    console.log("STATE", `${this.state.hh}:${this.state.mm}:${this.state.ss}`);

    return (
      // <a href={record[source]}> {record[source]} </a>
      <span>
        <Field name="hh" component={NumberInput} placeholder="HH" value={this.state.hh} onChange={this.handleChange} />
        <span>  </span>
        <Field name="mm" component={NumberInput} placeholder="MM" value={this.state.mm} onChange={this.handleChange} />
        <span>  </span>
        <Field name="ss" component={NumberInput} placeholder="SS" value={this.state.ss} onChange={this.handleChange} />
      </span>
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
