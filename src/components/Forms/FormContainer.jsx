import React, { Component } from "react";
import * as firebase from "firebase";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import fire from "../../config/fire";
import Form1 from "./Form1";

class FormContainer extends Component {
  state = {
    step: 1,
    username: 'jay',
    email: ""
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
    this.setState({[input]: e.target.value});
  }

  render() {
    const { step } = this.state;
    

    return ( <p>{this.state.username}</p> );
  }
}

export default FormContainer;
