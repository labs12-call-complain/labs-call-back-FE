import React, { Component } from "react";
import SearchBar from "material-ui-search-bar";
import Script from "react-load-script";

class LocationSearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "",
      query: "",
      url: `https://maps.googleapis.com/maps/api/js?key=AIzaSyCGj-DBAXyUUkqkvA7sbUNVw6x638bXg2w&libraries=places`
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

    console.log(addressObject);
    if (address) {
      this.setState({
        city: address[0].long_name,
        query: addressObject.formatted_address
      });
    }
  };

  render() {
    return (
      <div>
        <Script url={this.state.url} onLoad={this.handleScriptLoad} />
        <SearchBar
          id="autocomplete"
          placeholder=""
          hintText="Search Establishment"
          value={this.state.query}
          style={{
            margin: "0 auto",
            maxWidth: 800
          }}
          onChange={() => this.handlePlaceSelect}
        />
      </div>
    );
  }
}

export default LocationSearchInput;
