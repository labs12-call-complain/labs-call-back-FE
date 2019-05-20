// import React, { useState, useEffect} from 'react';
// import SearchBar from "material-ui-search-bar";
// import Script from "react-load-script";

// export default function LocationSearchInput() {
//   // const [city, setCity] = useState('');
//   // const [query, setQuery] = useState('');
//   // const [url, setUrl] = useState(process.env.GOOGLE_PLACES_URL)
  
//   return (
//     <div>
//       <Script  />
//       <SearchBar
//         // id="autocomplete"
//         // onRequestSearch={console.log('searching')}
//         // placeholder=""
//         // hintText="Search Establishment"
//         // value={this.state.query}
//         // style={{
//         //   margin: "0 auto",
//         //   maxWidth: 800
//         // }}
//         // onChange={() => this.handlePlaceSelect}
//     />
//     </div>
//   )
// }


import React, { Component, useState, useEffect } from "react";
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
      )
  };



  render() {
    return (
      <div>
        <Script url={this.state.url} onLoad={this.handleScriptLoad} />
        <SearchBar
          id="autocomplete"
          onRequestSearch={console.log('searching')}
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


url={this.state.url} onLoad={this.handleScriptLoad}