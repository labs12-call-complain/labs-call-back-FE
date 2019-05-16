import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import PlacesAutocomplete from 'react-places-autocomplete';
import LocationSearch from './LocationSearchInput';



class Form1 extends Component {
  state = {
    StoreName: ""
  }
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    this.someFn();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  
  someFn = () => {
    // let name = 'kabanas'
    this.props.triggerStoreUpdate(this.state.StoreName);
  }

  updateGooglePlaces = (StoreNameFromPlaces) => {
    this.setState({
      StoreName: StoreNameFromPlaces
    })
  }
  



  render() {
    
    
    return (
      <MuiThemeProvider>
        <>
          <h1>Form1</h1>
            <LocationSearch triggerUpdatePlaces={this.updateGooglePlaces}/>
          <br />
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

export default Form1;
