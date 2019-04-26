import React, { Component } from "react";
// import API from "../utils/API";
import { Link } from "react-router-dom";
import Table from "../../components/Table/index";
import Map from "../../components/Map";
import Event from "../../components/Event";
import Calendar from "../../components/Calendar";
import "./style.css";

class Saved extends Component {
  state = {
    events: ["food", "food", "food", "food", "food"]
  };

  resetEvents = () => {
    this.forceUpdate();
  };

  render() {
    return (
      <div class="md-tabs">
        <ul class="tabs" data-responsive-accordion-tabs="tabs small-accordion medium-tabs large-tabs" id="collapsing-tabs" data-allow-all-closed="true" data-multi-expand="true">
          <li class="tabs-title is-active"><a href="#plan-tab" aria-selected="true">PLN</a></li>
          <li class="tabs-title"><a href="#calendar-tab">CLNDR</a></li>
          <li class="tabs-title"><a href="#map-tab">MAP</a></li>
          <li class="tabs-title"><a href="#account-tab">ACCT 4</a></li>
          <div class="slide"></div>
        </ul>

        <div class="tabs-content" data-tabs-content="collapsing-tabs">
          <div class="tabs-panel is-active" id="plan-tab">
            <button onClick={this.resetEvents}>PLN UR WKND</button>
            <table class="responsive-card-table unstriped">
              <thead>
                <tr>
                  <th>Your Itinerary</th>
                </tr>
              </thead>
              <tbody>
                {this.state.events.map(event => (
                  <Event label={"Your Itinerary"} key={this.state.events.indexOf(event) + Math.ceil(Math.random() * 100)} />
                ))}
              </tbody>
            </table>
          </div>
          <div class="tabs-panel" id="calendar-tab">
            Share your WKND plans!
            <Calendar/>
          </div>
          <div class="tabs-panel" id="map-tab">
            Google Maps rendered here
            <div id="map">
              <Map />
            </div>
          </div>
          <div class="tabs-panel" id="account-tab">
            Edit Account and Search Settings
          </div>

        </div>

        {/* <h1>Your Wknd</h1>
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
        </Tabs> */}
      </div>
    );
  }
}

export default Saved;
