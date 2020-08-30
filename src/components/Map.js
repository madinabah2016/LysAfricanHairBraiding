import { Map, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const mapStyles = {
    width: '40%',
    height: '40%',
    position:'relative',
};

const renderMarkers = (map, maps) => {
        let marker = new maps.Marker({
        position: { lat: 33.761437, lng: -84.082187 },map});
        return marker;
    };

const Marker = ({ text }) => <h7>{text}</h7>;

class GoogleMap extends Component{
    static defaultProps = {
        center: {
          lat: 33.761437,
          lng:  -84.082187,
        },
        zoom: 15
    };

     

    render(){

        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '40vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAcZu0ssgcgNE9Z5jwMoMHqZWizIOCE3IQ' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
              >
                   <Marker
                        lat={33.761437}
                        lng={ -84.082187}
                        text="Ly's African Hair Braiding"
                    />
              </GoogleMapReact>
            </div>
          );

    }
}

export default GoogleMap;