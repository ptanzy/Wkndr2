import React, { Component } from "react";
// import API from "../utils/API";
import { Link } from "react-router-dom";
import { Tabs } from "react-materialize";
import { Tab } from "react-materialize";
import { Table } from "react-materialize";
import Map from "../components/Map";
import Event from "../components/Event";

class Saved extends Component {
  state = {
    events: ["food", "food", "food", "food", "food"]
  };

  resetEvents = () => {
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <h1>Your Wknd</h1>
        <Tabs className="tab-demo z-depth-1">
          <Tab title="PLN" active>
            <button onClick={this.resetEvents}>PLN UR WKND</button>
            <Table>
              <thead>
                <tr>
                  <th data-field="id">Your Itinerary</th>
                </tr>
              </thead>
              <tbody>
                {this.state.events.map(event => (
                  <Event key={this.state.events.indexOf(event) + Math.ceil(Math.random() * 100)} />
                ))}
              </tbody>
            </Table>
          </Tab>
          <Tab title="CLNDR">Share your WKND plans!</Tab>
          <Tab title="MAP">
            Google Maps rendered here
            <div id="map">
              <Map />
            </div>
          </Tab>
          <Tab title="ACCT">Edit Account and Search Settings</Tab>
        </Tabs>
      </div>
    );
  }
}

export default Saved;
