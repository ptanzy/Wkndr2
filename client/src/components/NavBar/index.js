import React, { Component } from "react";
import "./style.css";
import "./style.scss";

class NavBar extends Component {

  render() {
    return (
      <React.Fragment>
        <nav class="top-bar topbar-responsive">
          <div class="top-bar-title">
            <span data-responsive-toggle="topbar-responsive" data-hide-for="medium">
              <button class="menu-icon" type="button" data-toggle></button>
            </span>
            <a class="topbar-responsive-logo" href="#"><strong>Site Title</strong></a>
          </div>
          <div id="topbar-responsive" class="topbar-responsive-links">
            <div class="top-bar-right">
              <ul class="menu simple vertical medium-horizontal">
                <li><a href="/search">Search</a></li>
                <li><a href="/saved">Saved</a></li>
                <li><a href="/urwknd">URWKND</a></li>
                <li>
                  <button type="button" class="button hollow topbar-responsive-button">Pages</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
