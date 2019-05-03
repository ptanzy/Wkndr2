import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

class Map extends Component {
  state = {
    mapClicked: false,
    adventureCenter: {
      lat: 33.749,
      lng: -84.388
    }
  };
  static defaultProps = {
    center: {
      lat: 33.749,
      lng: -84.388
    },
    zoom: 10
  };

  _onClick = ({ x, y, lat, lng, event }) => {
    this.setState({
      adventureCenter: { lat: lat, lng: lng },
      mapClicked: true
    });
    console.log(lat, lng);
    console.log(this.state);
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "60vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD7ORV6YWWSFMfH_GiTvqhRq0ObkiQvpGg" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onClick={this._onClick}
        >
          {this.state.mapClicked ? (
            <Marker
              key={"01"}
              text={"Here"}
              lat={this.state.adventureCenter.lat}
              lng={this.state.adventureCenter.lng}
            />
          ) : (
            <div />
          )}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
