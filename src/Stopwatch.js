import React from "react";
import ReactDOM from "react-dom";
import "./Stopwatch.css";

class StopwatchDisplay extends React.Component {
  render() {
    return (
      <div className={"stopwatch__display"}>
        <span>
          {this.props.formatTime(this.props.currentTimeMin)}:
          {this.props.formatTime(this.props.currentTimeSec)}:
          {this.props.formatTime(this.props.currentTimeMs, "ms")}
        </span>
      </div>
    );
  }
}

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0,
    };
  }

  formatTime = (val, ...rest) => {
    let value = val.toString();
    if (value.length < 2) {
      value = "0" + value;
    }
    if (rest[0] === "ms" && value.length < 3) {
      value = "0" + value;
    }
    return value;
  };

  start = () => {
    if (!this.state.running) {
      this.setState({ running: true });
      this.watch = setInterval(() => this.pace(), 10);
    }
  };

  stop = () => {
    this.setState({ running: false });
    clearInterval(this.watch);
  };

  pace = () => {
    this.setState({ currentTimeMs: this.state.currentTimeMs + 10 });
    if (this.state.currentTimeMs >= 1000) {
      this.setState({ currentTimeSec: this.state.currentTimeSec + 1 });
      this.setState({ currentTimeMs: 0 });
    }
    if (this.state.currentTimeSec >= 60) {
      this.setState({ currentTimeMin: this.state.currentTimeMin + 1 });
      this.setState({ currentTimeSec: 0 });
    }
  };

  reset = () => {
    this.setState({
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0,
    });
  };

  render() {
    return (
      <div className={"Stopwatch"}>
        <h2 className={"WorkspaceName"} style={{color: this.props.nameColor}} ref="header"> {this.props.name}</h2>

        <StopwatchDisplay
          ref="display"
          {...this.state}
          formatTime={this.formatTime}
        />

        <br />
        {this.state.running === false && (
          <button onClick={this.start}>START</button>
        )}
        {this.state.running === true && (
          <button onClick={this.stop}>STOP</button>
        )}
        {'  '}
        <button onClick={this.reset}>RESET</button>
      </div>
    );
  }
}

export default Stopwatch;
