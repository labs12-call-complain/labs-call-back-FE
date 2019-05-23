import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import PlacesAutocomplete from 'react-places-autocomplete';
import LocationSearch from './LocationSearchInput';
import { Spinner, Fade } from 'reactstrap';
import Map from './GoogleMaps';


class Form1 extends Component {
  state = {
    StoreName: "",
    StoreAddress: "",
    StorePhone: "",
    StoreWebsite: "",
    StoreGoogleRating: "",
    isLoading: true,
  }

  componentDidMount() {
    setTimeout(() => this.setState({isLoading: false}), 1000);
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
    this.props.triggerStoreUpdate(
      this.state.StoreName, 
      this.state.StoreAddress, 
      this.state.StorePhone,
      this.state.StoreWebsite,
      this.state.StoreGoogleRating
      );
  }

  updateGooglePlaces = (StoreNameFromPlaces, StoreAddressFromPlaces, StorePhoneFromPlaces, StoreWebsiteFromPlaces, StoreRatingFromPlaces) => {
    this.setState({
      StoreName: StoreNameFromPlaces,
      StoreAddress: StoreAddressFromPlaces,
      StorePhone: StorePhoneFromPlaces,
      StoreWebsite: StoreWebsiteFromPlaces,
      StoreGoogleRating: StoreRatingFromPlaces
    })
  }
  



  render() {
    console.log(this.props)
    console.log(this.state)
    const { values, handleChange } = this.props;
    if(this.state.isLoading===true) {
      return (
      <div className="recording-loader loader">
        <h1>Griipe</h1>
        <br />
        <Spinner style={{ width: '3rem', height: '3rem' }} />
      </div>)
    };
    
    return (
      <MuiThemeProvider>
        <Fade tag="h5" className="mt-3">
          <h1>Search For A Company Below:</h1>
            {/* <LocationSearch triggerUpdatePlaces={this.updateGooglePlaces}/> */}
          <br />
            <Map
              google={this.props.google}
              center={{lat: 18.4655, lng: 66.1057}}
              height='300px'
              zoom={15}
              />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </Fade>
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
