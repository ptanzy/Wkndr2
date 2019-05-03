import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 33.749,
      lng: -84.388
    },
    zoom: 10
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "60vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD7ORV6YWWSFMfH_GiTvqhRq0ObkiQvpGg" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </div>
    );
  }
}

export default Map;
