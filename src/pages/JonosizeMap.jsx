import React from 'react';
import { Map, GoogleApiWrapper,Marker  } from 'google-maps-react';
const mapStyles = {
    position: 'inherit',  
    width: '100%',
    height: '100%',
  };
class JonosizeMap extends React.Component{

  render(){
      return (
        <div className="App">
              <div className="container h-100 mt-5">
          <div className="row h-100 justify-content-center align-items-center mt-5">
          <Map
          google={this.props.google}
          zoom={20}
          containerStyle={mapStyles}
          initialCenter={{ lat: 13.893983, lng: 100.516292}}
        >
        <Marker position={{ lat: 13.893983, lng: 100.516292}} />
        </Map>
          </div>  
        </div>
        </div>
      );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCgm_yK9lKnQTOXVEGxRY3Au3iiXQ89vn8'
  })(JonosizeMap);
