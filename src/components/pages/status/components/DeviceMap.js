import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import "./DeviceMap.css";

const mapStyles = {
  map: {
    // position: "relative",
    // width: "100%",
    // height: "100%",
  },
};
export class DeviceMap extends Component {
  render() {
    return (
      <>
        <div
          style={{
            // position: "relative",
            width: "100vw",
            height: "100vh",
            marginTop: "5vw",
          }}
        >
          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
              lat: 7.2906,
              lng: 80.6337,
            }}
          />
        </div>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAKipGPx3N8KlhZs4-WP1wvIlCToD9kVkw",
})(DeviceMap);
