import React, { Component } from "react";
import * as firebase from "firebase";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import fire from "../../config/fire";
import Form1 from "./Form1.jsx";
import Form2 from "./Form2.jsx";
import Form3 from "./Form3.jsx";
import Form4 from "./Form4.jsx";
import Success from "./Form5.jsx";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Navigation from "../Navigation.js";

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
            <Navigation />
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
            <Navigation />
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
            <Navigation />
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
            <Navigation />
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

export default FormContainer;
