import React, { Component } from "react";
import "./style.css";
const $ = require("jquery");

class Account extends Component {

  componentDidMount() {
    $(document).foundation()
    $('.slider').on('changed.zf.slider', e => {
      const sliderVal = parseInt(
        e.target.firstChild.attributes.getNamedItem('aria-valuenow').value,
        10,
      )
      const search = {...this.state.search}
      const eventType = (e.target.attributes["sliderevent"]? e.target.attributes["sliderevent"].value: e.target.attributes["sliderdist"].value);
      const  prevVal = search.eventAmounts[eventType];
      search.eventAmounts[eventType] = sliderVal;
      if(eventType != "primDistance" && eventType !== "secDistance"){
        this.handleEventAmntChange(prevVal, sliderVal);
      }
      this.setState({search})
    })
  }

  componentWillUnmount() {
    $('.slider').foundation('_destroy')
    $('.slider').off('changed.zf.slider')
  }

  state = {
    maxEvents: 6,
    search: {
      primEvent: "",
      eventAmounts: {
        nature: 0,
        food: 0,
        amusement: 0,
        shopping: 0,
        attractions: 0,
        nightlife: 0,
        culture: 0, 
        selfcare: 0
      },
      primDistance: 5,
      secDistance: 2
    }
  }

  handlePrimEventChange = event => {
    console.log(event);
    const search = {...this.state.search}
    search.primEvent = event.target.value;
    this.setState({search})
  };

  handleEventAmntChange = (prev, curr) => {
    const change = prev-curr;
    const val = this.state.maxEvents + change;
    this.setState({maxEvents: val})
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <form id="searchForm" onSubmit={e => e.preventDefault()}>
          <div id="primaryEvent">
            <ul className="accordion" data-accordion  data-allow-all-closed="true">
              <li className="accordion-item" data-accordion-item>
                <a href="#" className="accordion-title">Primary Event</a>
                <div className="accordion-content" data-tab-content>
                  <p>The initial event of your wknd trip</p>
                </div>
              </li>
            </ul>
            <div className="grid-x grid-margin-x">
              <div className="cell small-5">
                <label>Primary Event
                  <select onChange={this.handlePrimEventChange}>
                    <option value="" disabled="disabled" selected="selected"></option>
                    <option value="nature">Nature</option>
                    <option value="food">Food</option>
                    <option value="amusement">Amusement</option>
                    <option value="shopping">Shopping</option>
                    <option value="attractions">Attractions</option>
                    <option value="nightlife">Nightlife</option>
                    <option value="culture">Culture</option>
                    <option value="selfcare">Self-care</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
          <div id="eventCategories">
            <ul className="accordion" data-accordion  data-allow-all-closed="true">
              <li className="accordion-item" data-accordion-item>
                <a href="#" className="accordion-title">Event Categories</a>
                <div className="accordion-content" data-tab-content>
                  <p>The six event categories that you can choose from to create your wknd trip</p>
                </div>
              </li>
            </ul>
            <div className="grid-x grid-margin-x">
              <div className="cell small-10">
                <label>Nature
                  <div className="slider" data-slider data-initial-start="0" data-end={this.state.maxEvents}
                      sliderEvent="nature" aria-valuemin="0" aria-valuemax={this.state.maxEvents} aria-valuenow={this.state.search.eventAmounts.nature}>
                    <span className="slider-handle"  data-slider-handle role="slider" tabindex="1" aria-controls="sliderNature" 
                        aria-valuemin="0" aria-valuemax={this.state.maxEvents} aria-valuenow={this.state.search.eventAmounts.nature}></span>
                    <span className="slider-fill" data-slider-fill></span>
                  </div>
                  
                </label>
              </div>
              <div className="cell small-2">
              <input type="number" id="sliderNature" ></input>
              </div>
              <div className="cell small-10">
                <label>Food
                  <div className="slider" data-slider data-initial-start="0" data-end={this.state.maxEvents}
                      sliderEvent="food" aria-valuemin="0" aria-valuemax={this.state.maxEvents} aria-valuenow={this.state.search.eventAmounts.food}>
                    <span className="slider-handle"  data-slider-handle role="slider" tabindex="1" aria-controls="sliderFood" 
                        aria-valuemin="0" aria-valuemax={this.state.maxEvents} aria-valuenow={this.state.search.eventAmounts.food}></span>
                    <span className="slider-fill" data-slider-fill></span>
                  </div>
                </label>
              </div>
              <div className="cell small-2">
                <input type="number" id="sliderFood"></input>
              </div>
              <div className="cell small-10">
                <label>Amusement
                  <div className="slider" data-slider data-initial-start="0" data-end={this.state.maxEvents}
                      sliderEvent="amusement" aria-valuemin="0" aria-valuemax={this.state.maxEvents} aria-valuenow={this.state.search.eventAmounts.amusement}>
                    <span className="slider-handle"  data-slider-handle role="slider" tabindex="1" aria-controls="sliderAmusement" 
                        aria-valuemin="0" aria-valuemax={this.state.maxEvents} aria-valuenow={this.state.search.eventAmounts.amusement}></span>
                    <span className="slider-fill" data-slider-fill></span>
                  </div>
                </label>
              </div>
              <div className="cell small-2">
                <input type="number" id="sliderAmusement"></input>
              </div>
              <div className="cell small-10">
                <label>Shopping
                  <div className="slider" data-slider data-initial-start="0" data-end={this.state.maxEvents}
                      sliderEvent="shopping" aria-valuemin="0" aria-valuemax={this.state.maxEvents} aria-valuenow={this.state.search.eventAmounts.shopping}>
                    <span className="slider-handle"  data-slider-handle role="slider" tabindex="1" aria-controls="sliderShopping" 
                        aria-valuemin="0" aria-valuemax={this.state.maxEvents} aria-valuenow={this.state.search.eventAmounts.shopping}></span>
                    <span className="slider-fill" data-slider-fill></span>
                  </div>
                </label>
              </div>
              <div className="cell small-2">
                <input type="number" id="sliderShopping"></input>
              </div>
              <div className="cell small-10">
                <label>Attractions
                  <div className="slider" data-slider data-initial-start="0" data-end={this.state.maxEvents}
                      sliderEvent="attractions" aria-valuemin="0" aria-valuemax={this.state.maxEvents} aria-valuenow={this.state.search.eventAmounts.attractions}>
                    <span className="slider-handle"  data-slider-handle role="slider" tabindex="1" aria-controls="sliderAttractions" 
                        aria-valuemin="0" aria-valuemax={this.state.maxEvents} aria-valuenow={this.state.search.eventAmounts.attractions}></span>
                    <span className="slider-fill" data-slider-fill></span>
                  </div>
                </label>
              </div>
              <div className="cell small-2">
                <input type="number" id="sliderAttractions"></input>
              </div>
              <div className="cell small-10">
                <label>Night Life
                  <div className="slider" data-slider data-initial-start="0" data-end={this.state.maxEvents}
                      sliderEvent="nightlife" aria-valuemin="0" aria-valuemax={this.state.maxEvents} aria-valuenow={this.state.search.eventAmounts.nightlife}>
                    <span className="slider-handle"  data-slider-handle role="slider" tabindex="1" aria-controls="sliderNightLife" 
                        aria-valuemin="0" aria-valuemax={this.state.maxEvents} aria-valuenow={this.state.search.eventAmounts.nightlife}></span>
                    <span className="slider-fill" data-slider-fill></span>
                  </div>
                </label>
              </div>
              <div className="cell small-2">
                <input type="number" id="sliderNightLife"></input>
              </div>
              <div className="cell small-10">
                <label>Culture
                  <div className="slider" data-slider data-initial-start="0" data-end={this.state.maxEvents}
                      sliderEvent="culture" aria-valuemin="0" aria-valuemax={this.state.maxEvents} aria-valuenow={this.state.search.eventAmounts.culture}>
                    <span className="slider-handle"  data-slider-handle role="slider" tabindex="1" aria-controls="sliderCulture" 
                        aria-valuemin="0" aria-valuemax={this.state.maxEvents} aria-valuenow={this.state.search.eventAmounts.culture}></span>
                    <span className="slider-fill" data-slider-fill></span>
                  </div>
                </label>
              </div>
              <div className="cell small-2">
                <input type="number" id="sliderCulture"></input>
              </div>
              <div className="cell small-10">
                <label>Self-care
                  <div className="slider" data-slider data-initial-start="0" data-end={this.state.maxEvents}
                      sliderEvent="selfcare" aria-valuemin="0" aria-valuemax={this.state.maxEvents} aria-valuenow={this.state.search.eventAmounts.selfcare}>
                    <span className="slider-handle"  data-slider-handle role="slider" tabindex="1" aria-controls="sliderSelfCare" 
                        aria-valuemin="0" aria-valuemax={this.state.maxEvents} aria-valuenow={this.state.search.eventAmounts.selfcare}></span>
                    <span className="slider-fill" data-slider-fill></span>
                  </div>
                  </label>
              </div>
              <div className="cell small-2">
                <input type="number" id="sliderSelfCare"></input>
              </div>
            </div>
          </div>  
          <div id="distances">
            <ul className="accordion" data-accordion  data-allow-all-closed="true">
              <li className="accordion-item" data-accordion-item>
                <a href="#" className="accordion-title">Distance</a>
                <div className="accordion-content" data-tab-content>
                  <p>Primary Distance: Distance to search from your current location to determine your primary event</p>
                  <p>Secondary Distance: Distance to search from your primary event to determine all secondary events</p>
                </div>
              </li>
            </ul>
            <div className="grid-x grid-margin-x">
              <div className="cell small-10">
                <label>Primary
                  <div className="slider" data-slider data-start="5" data-end="300"
                      sliderDist="primDistance" aria-valuemin="5" aria-valuemax="300" aria-valuenow={this.state.search.primDistance}>                  
                    <span className="slider-handle"  data-slider-handle role="slider" tabindex="1" aria-controls="distancePrim" 
                        aria-valuemin="5" aria-valuemax="300" aria-valuenow={this.state.search.primDistance}></span>
                    <span className="slider-fill" data-slider-fill></span>
                  </div>
                </label>
              </div>
              <div className="cell small-2">
                <input type="number" id="distancePrim"></input>
              </div>
              <div className="cell small-10">
                <label>Secondary
                  <div className="slider" data-slider data-start="2" data-end="25"
                      sliderDist="secDistance" aria-valuemin="2" aria-valuemax="25" aria-valuenow={this.state.search.secDistance}>   
                    <span className="slider-handle"  data-slider-handle role="slider" tabindex="1" aria-controls="distanceSec" 
                        aria-valuemin="2" aria-valuemax="25" aria-valuenow={this.state.search.secDistance}></span>
                    <span className="slider-fill" data-slider-fill></span>
                  </div>
                </label>
              </div>
              <div className="cell small-2">
                <input type="number" id="distanceSec"></input>
              </div>
            </div>
          </div>
          <div className="grid-x grid-margin-x">
            <div className="cell small-5">
              <button className="button" type="button" onClick={this.handleFormSave}>Reset</button>
            </div>
          </div>
          <div className="grid-x grid-margin-x">
            <div className="cell small-5">
              <label>Saved Search Settings
                <select>
                </select>
              </label>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Account;
