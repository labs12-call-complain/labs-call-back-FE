import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class Form3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transcription: this.props.transcription
    };
  }
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  addTranscript = e => {
    e.preventDefault();
    this.props.setTranscriptionProps(this.state.transcription);
    this.props.nextStep();
  };

  handleChange = e => {
    this.setState({ transcription: e.target.value });
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <h1>Transcription</h1>

          {/* {this.props.transcription}

          <br />

          {this.state.transcription}
          <br /> */}
          <form onSubmit={this.addTranscript}>
            <input
              type="text"
              value={this.state.transcription}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>

          <br />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />

          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default Form3;
