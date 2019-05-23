
import React, { Component } from "react";
import SearchBar from "material-ui-search-bar";
import Script from "react-load-script";

class LocationSearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zoom: 13,
      maptype: 'roadmap',
      place_formatted: '',
      place_id: '',
      place_location: '',
      city: "",
      query: "",
      url: `https://maps.googleapis.com/maps/api/js?key=AIzaSyCGj-DBAXyUUkqkvA7sbUNVw6x638bXg2w&libraries=places`
    };
  }

  handleScriptLoad = () => {
    

    /// Google Map Initialization
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -33.8688, lng: 151.2195},
      zoom: 13,
      mapTypeId: 'roadmap',
    });

    this.map.addListener('zoom_changed', () => {
      this.setState({
        zoom: this.map.getZoom(),
      });
    });

    this.map.addListener('maptypeid_changed', () => {
      this.setState({
        maptype: this.map.getMapTypeId(),
      });
    });
    this.marker = new google.maps.Marker({
        map: this.map, 
        position: {lat: -33.8688, lng: 151.2195},
    });

    /// Google Autocomplete 
    var options = {
      types: ["establishment"]
    };

    this.autocomplete = new google.maps.places.Autocomplete(
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
    let location = addressObject.geometry.location;
    
    if (address) {
      this.setState({
        city: address[0].long_name,
        query: addressObject.formatted_address,
        place_formatted: companyAddress,
        place_id: addressObject.place_id,
        place_location: location.toString()
      });

      /// Bring place into view on map
      this.map.fitBounds(addressObject.geometry.viewport);
      this.map.setCenter(location);
      this.marker.setPlace({
          placeId: addressObject.place_id,
          location: location,
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
        <div id='map' />
      </div>
    );
  }
}

export default LocationSearchInput;

// import React, {useState, useEffect} from 'react';
// import Script from "react-load-script";
// import './FormContainer.css'

// export default function LocationSearchInputFun() {

//     const [zoom, setZoom] = useState(13);
//     const [maptype, setMaptype] = useState('roadmap');
//     const [place_formatted, setPlace_formatted] = useState('');
//     const [place_id, setPlace_id] = useState('');
//     const [place_location, setPlace_location] = useState('');

//     // const loadMaps = () => {
//     //   return { 
//     //       __html: '<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCGj-DBAXyUUkqkvA7sbUNVw6x638bXg2w&libraries=places">'
//     //   }
//     // }

//     useEffect( () => {

//         /// Google Map Initialization
//         let map = new window.google.maps.Map(document.getElementById('map'), {
//             center: {lat: -33.8688, lng: 151.2195},
//             zoom: 13,
//             mapTypeId: 'roadmap',
//         });

//         map.addListener('zoom_changed', () => setZoom(map.getZoom()));
        
//         map.addListener('maptypeId_changed', () => setMaptype(map.getMapTypeId()));

//         let marker = new window.google.maps.Marker({
//             map: map, 
//             position: {lat: -33.8688, lng: 151.2195},
//         });

        
//         ///Autocomplete Initialization
//         let inputNode = document.getElementById('pac-input');
//         map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(inputNode);
//         let autoComplete = new window.google.maps.places.Autocomplete(inputNode);

//         autoComplete.addListener('place_changed', () => {
//             let place = autoComplete.getPlace();
//             let location = place.geometry.location;

//             setPlace_formatted(place.formattted_address);
//             setPlace_id(place.place_id);
//             setPlace_location(location.toString());
        
//             /// Bring place into view on map
//             map.fitBounds(place.geometry.viewport);
//             map.setCenter(location);

//             marker.setPlace({
//                 placeId: place.place_id,
//                 location: location,
//             });
//         });
//     })

//     return (
//       // <div dangerouslySetInnerHTML={loadMaps()}> 
//         <div id='map-form' dangerouslySetInnerHTML={loadMaps()}> 
//           <div id='map' />
//         </div>
//       // </div>
//     )
// }