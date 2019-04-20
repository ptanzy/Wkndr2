import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Tabs } from "react-materialize";
import { Tab } from "react-materialize";
import { Table } from "react-materialize";
import Map from "../components/Map";

class Saved extends Component {
  render() {
    return (
      <div>
        <h1>Your Wknd</h1>
        <Tabs className="tab-demo z-depth-1">
          <Tab title="PLN" active>
            <button>PLN YOUR WKND</button>
            <Table>
              <thead>
                <tr>
                  <th data-field="id">Your Itinerary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>No weekend plans yet?</td>
                </tr>
              </tbody>
            </Table>
          </Tab>
          <Tab title="MAP">
            Google Maps rendered here
            <div id="map">
              <Map />
            </div>
          </Tab>
          <Tab title="YOU">Edit Account and Search Settings</Tab>
          <Tab title="SHARE">Share your WKND plans!</Tab>
        </Tabs>
      </div>
    );
  }
}

export default Saved;
