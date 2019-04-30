import React, { Component } from "react";
import "./style.css";
const $ = require("jquery");

class Account extends Component {

  componentDidMount() {
    $(document).foundation()
  }

  render() {
    return (
      <React.Fragment>
        <div id="primaryEvent">
          <ul class="accordion" data-accordion  data-allow-all-closed="true">
            <li class="accordion-item" data-accordion-item>
              <a href="#" class="accordion-title">Primary Event</a>
              <div class="accordion-content" data-tab-content>
                <p>The initial event of your wknd trip</p>
              </div>
            </li>
          </ul>
          <div class="grid-x grid-margin-x">
            <div class="cell small-5">
              <label>Primary Event
                <select>
                  <option value="nature">Nature</option>
                  <option value="food">Food</option>
                  <option value="amusement">Amusement</option>
                  <option value="shopping">Shopping</option>
                  <option value="attractions">Attractions</option>
                  <option value="nightlife">Nightlife</option>
                  <option value="culture">Culture</option>
                  <option value="selfCare">Self-care</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div id="eventCategories">
          <ul class="accordion" data-accordion  data-allow-all-closed="true">
            <li class="accordion-item" data-accordion-item>
              <a href="#" class="accordion-title">Event Categories</a>
              <div class="accordion-content" data-tab-content>
                <p>The six event categories that you can choose from to create your wknd trip</p>
              </div>
            </li>
          </ul>
          <div class="grid-x grid-margin-x">
            <div class="cell small-10">
              <label>Nature
                <div class="slider" data-slider data-initial-start="0" data-end="5">
                  <span class="slider-handle"  data-slider-handle role="slider" tabindex="1" aria-controls="sliderNature"></span>
                  <span class="slider-fill" data-slider-fill></span>
                </div>
              </label>
            </div>
            <div class="cell small-2">
              <input type="number" id="sliderNature"></input>
            </div>
            <div class="cell small-10">
              <label>Food
                <div class="slider" data-slider data-initial-start="0" data-end="5">
                  <span class="slider-handle"  data-slider-handle role="slider" tabindex="1" aria-controls="sliderFood"></span>
                  <span class="slider-fill" data-slider-fill></span>
                </div>
              </label>
            </div>
            <div class="cell small-2">
              <input type="number" id="sliderFood"></input>
            </div>
            <div class="cell small-10">
              <label>Amusement
                <div class="slider" data-slider data-initial-start="0" data-end="5">
                  <span class="slider-handle"  data-slider-handle role="slider" tabindex="1" aria-controls="sliderAmusement"></span>
                  <span class="slider-fill" data-slider-fill></span>
                </div>
              </label>
            </div>
            <div class="cell small-2">
              <input type="number" id="sliderAmusement"></input>
            </div>
            <div class="cell small-10">
              <label>Shopping
                <div class="slider" data-slider data-initial-start="0" data-end="5">
                  <span class="slider-handle"  data-slider-handle role="slider" tabindex="1" aria-controls="sliderShopping"></span>
                  <span class="slider-fill" data-slider-fill></span>
                </div>
              </label>
            </div>
            <div class="cell small-2">
              <input type="number" id="sliderShopping"></input>
            </div>
            <div class="cell small-10">
              <label>Attractions
                <div class="slider" data-slider data-initial-start="0" data-end="5">
                  <span class="slider-handle"  data-slider-handle role="slider" tabindex="1" aria-controls="sliderAttractions"></span>
                  <span class="slider-fill" data-slider-fill></span>
                </div>
              </label>
            </div>
            <div class="cell small-2">
              <input type="number" id="sliderAttractions"></input>
            </div>
            <div class="cell small-10">
              <label>Night Life
                <div class="slider" data-slider data-initial-start="0" data-end="5">
                  <span class="slider-handle"  data-slider-handle role="slider" tabindex="1" aria-controls="sliderNightLife"></span>
                  <span class="slider-fill" data-slider-fill></span>
                </div>
              </label>
            </div>
            <div class="cell small-2">
              <input type="number" id="sliderNightLife"></input>
            </div>
            <div class="cell small-10">
              <label>Culture
                <div class="slider" data-slider data-initial-start="0" data-end="5">
                  <span class="slider-handle"  data-slider-handle role="slider" tabindex="1" aria-controls="sliderCulture"></span>
                  <span class="slider-fill" data-slider-fill></span>
                </div>
              </label>
            </div>
            <div class="cell small-2">
              <input type="number" id="sliderCulture"></input>
            </div>
            <div class="cell small-10">
              <label>Self-care
                <div class="slider" data-slider data-initial-start="0" data-end="5">
                  <span class="slider-handle"  data-slider-handle role="slider" tabindex="1" aria-controls="sliderSelfCare"></span>
                  <span class="slider-fill" data-slider-fill></span>
                </div>
                </label>
            </div>
            <div class="cell small-2">
              <input type="number" id="sliderSelfCare"></input>
            </div>
          </div>
        </div>  
        <div id="distances">
          <ul class="accordion" data-accordion  data-allow-all-closed="true">
            <li class="accordion-item" data-accordion-item>
              <a href="#" class="accordion-title">Distance</a>
              <div class="accordion-content" data-tab-content>
                <p>Primary Distance: Distance to search from your current location to determine your primary event</p>
                <p>Secondary Distance: Distance to search from your primary event to determine all secondary events</p>
              </div>
            </li>
          </ul>
          <div class="grid-x grid-margin-x">
            <div class="cell small-10">
              <label>Primary
                <div class="slider" data-slider data-start="5" data-end="300">
                  <span class="slider-handle"  data-slider-handle role="slider" tabindex="1" aria-controls="distancePrim"></span>
                  <span class="slider-fill" data-slider-fill></span>
                </div>
              </label>
            </div>
            <div class="cell small-2">
              <input type="number" id="distancePrim"></input>
            </div>
            <div class="cell small-10">
              <label>Secondary
                <div class="slider" data-slider data-start="2" data-end="25">
                  <span class="slider-handle"  data-slider-handle role="slider" tabindex="1" aria-controls="distanceSec"></span>
                  <span class="slider-fill" data-slider-fill></span>
                </div>
              </label>
            </div>
            <div class="cell small-2">
              <input type="number" id="distanceSec"></input>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Account;
