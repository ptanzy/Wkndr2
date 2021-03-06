import React, { Component } from "react";
import API from "../utils/API";

class Event extends Component {
  state = {
    name: "Test Event"
  };

  componentDidMount() {
    console.log("initializing event");
    API.getEvent().then(res => this.setState({ name: res.data.name }));
  }

  render() {
    return (
      <React.Fragment>
        <tr>
          <td data-label={this.props.label}>{this.state.name}</td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Event;
