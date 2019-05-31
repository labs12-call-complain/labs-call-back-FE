import React, { Component } from "react";
import SearchBar from "material-ui-search-bar";
import Script from "react-load-script";

class LocationSearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "",
      query: "",
      url: `https://maps.googleapis.com/maps/api/js?key=AIzaSyDl2xrjRfqLiy-JND1YpqEVDjItpXNDPYs&libraries=places`
    };
  }

  handleScriptLoad = () => {
    var options = {
      types: ["establishment"]
    };

    /*global google*/ this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      options
    );

    this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
  };

  handlePlaceSelect = () => {
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;
    let establishmentName = addressObject.name;
    let companyAddress = addressObject.formatted_address;
    let companyPhone = addressObject.formatted_phone_number;
    let companyWebsite = addressObject.website;
    let companyRating = addressObject.rating;

    if (address) {
      this.setState({
        city: address[0].long_name,
        query: addressObject.formatted_address
      });
    }
    this.props.triggerUpdatePlaces(
      establishmentName,
      companyAddress,
      companyPhone,
      companyWebsite,
      companyRating
    );
  };

  render() {
    return (
      <div style={{
        width: '75%'
      }}>
        <Script url={this.state.url} onLoad={this.handleScriptLoad} />

        <SearchBar
          id="autocomplete"
          onRequestSearch={console.log("searching")}
          placeholder=""
          hintText="Search Establishment"
          value={this.state.query}
          style={{
            width: '75%',
            margin: "0 auto 53vh auto",
            maxWidth: 1000
          }}
          onChange={() => this.handlePlaceSelect}
        />

        <hr className="hr-divider" />
      </div>
    );
  }
}

export default LocationSearchInput;
