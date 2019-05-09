import React, { Component } from "react";

import Form1 from "./Form1.jsx";
import Form2 from "./Form2.jsx";
import Form3 from "./Form3.jsx";
import Form4 from "./Form4.jsx";
import Success from "./Form5.jsx";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import {withAuthorization} from '../Session/session.js';


class FormContainer extends Component {
  state = {
    step: 1,
    username: "jay",
    email: "",
    icon: null
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { username, email } = this.state;
    const values = { username, email };

    switch (step) {
      case 1:
        return (
          <>
            <Form1
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );
      case 2:
        return (
          <>
            <Form2
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );
      case 3:
        return (
          <>
            <Form3
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );
      case 4:
        return (
          <>
            <Form4
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );
        case 5:
        return (
          <>
            <Navigation />
            <Success />
          </>
        );
    }

    return <p>{this.state.username}</p>;
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(FormContainer);
