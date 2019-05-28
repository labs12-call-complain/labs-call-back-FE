import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from "react";

 
export class MapContainer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          city: "",
          query: "",
          url: `https://maps.googleapis.com/maps/api/js?key=AIzaSyDl2xrjRfqLiy-JND1YpqEVDjItpXNDPYs&libraries=places`
        };
      }

      fetchPlaces(mapProps, map) {
        const {google} = mapProps;
        const service = new google.maps.places.PlacesService(map);
        // ...
      }

      mapClicked(mapProps, map, clickEvent) {
        // ...
      }
      
      centerMoved(mapProps, map) {
        // ...
      }
      render() {     
        var points = [
            { lat: 42.02, lng: -77.01 },
            { lat: 42.03, lng: -77.02 },
            { lat: 41.03, lng: -77.04 },
            { lat: 42.05, lng: -77.02 }
        ]
        var bounds = new this.props.google.maps.LatLngBounds();
        for (var i = 0; i < points.length; i++) {
          bounds.extend(points[i]);
        }
        console.log(...this.props);
    return (
        <Map
        google={this.props.google}
        style={style}
        bounds={bounds}
        center={{
          lat: 40.854885,
          lng: -88.081807
        }}
        zoom={15}
        onClick={this.onMapClicked}
        onDragend={this.centerMoved}
        onReady={this.fetchPlaces}
      >
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

const style = {
    width: '100%',
    height: '100%'
  }
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDl2xrjRfqLiy-JND1YpqEVDjItpXNDPYs')
})(MapContainer)
