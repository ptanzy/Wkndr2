import React, { Component } from "react";
import "./style.css";
const $ = require("jquery");

class NavBar extends Component {
  componentDidMount() {
    $(document).foundation();
    $("[data-menu-underline-from-center] a").addClass("underline-from-center");
  }

  render() {
    return (
      <React.Fragment>
        <nav class="hover-underline-menu" data-menu-underline-from-center>
          <ul class="menu align-left">
            <li>
              <a href="/urwknd">URWKND</a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
