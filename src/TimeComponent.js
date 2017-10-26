import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { NumberInput, DisabledInput } from 'admin-on-rest';

class TimeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hh: null,
      mm: null,
      ss: null,
    }
  }

  componentWillMount() {
    console.log('@componentWillMount', this.props);
    const hh = this.formatTimeHH(this.props.input.value);
    const mm = this.formatTimeMM(this.props.input.value);
    const ss = this.formatTimeSS(this.props.input.value);

    this.setState({ hh: hh, mm: mm, ss: ss });
  }

  componentDidUpdate(prevProps, prevState) {
    const total = this.parseTimeHH(this.state.hh) + this.parseTimeMM(this.state.mm) + this.state.ss;
    this.props.input.onChange(total);
  }

  handleChange = (event) => {
    if (event && event.target) {
      const name = event.target.name;
      const value = event.target.value;

      switch (name) {
        case 'hh':
          this.setState({ hh: value * 1 });
          break;
        case 'mm':
          this.setState({ mm: value * 1 });
          break;
        default:
          this.setState({ ss: value * 1 });
      }
    }
  }

  formatTimeHH = (x) => { return Math.trunc(x/3600); }
  formatTimeMM = (x) => { return Math.trunc(x%3600/60); }
  formatTimeSS = (x) => { return x%3600%60; }
  parseTimeHH = (x) => { return x*3600; }
  parseTimeMM = (x) => { return x*60 }

  render() {
    console.log("STATE", `${this.state.hh}:${this.state.mm}:${this.state.ss}`);
    return (
      <span>
        <input type="number" name="hh" placeholder="HH" value={this.state.hh} onChange={this.handleChange} />
        <span> : </span>
        <input type="number" name="mm" placeholder="MM" value={this.state.mm} onChange={this.handleChange} />
        <span> : </span>
        <input type="number" name="ss" placeholder="SS" value={this.state.ss} onChange={this.handleChange} />
      </span>
    );
  }
}

TimeComponent.propTypes = {
  input: PropTypes.object.isRequired,
};

export default TimeComponent;
