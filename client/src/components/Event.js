import React, { Component } from "react";
import API from "../utils/API";

// Import Materialize
import M from "materialize-css";

class Event extends Component {
  state = {
    name: "Test Event",
    pois: {}
  };

  componentDidMount() {
    M.AutoInit();
    let _pois = API.getEvent();
    setTimeout(this.setState({ pois: _pois }), 5000);

    //this.setState({ name: this.state.pois.results[Math.ceil(Math.random() * 11)].name });
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
