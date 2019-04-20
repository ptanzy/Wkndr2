import React, { Component } from "react";
import API from "../utils/API";

// Import Materialize
import M from "materialize-css";

class Event extends Component {
  state = {
    name: "Test Event"
  };

  componentDidMount() {
    console.log("initializing event");
    M.AutoInit();
    API.getEvent().then(res => this.setState({ name: res.data.name }));
  }

  render() {
    return (
      <React.Fragment>
        <tr>
          <td>{this.state.name}</td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Event;
