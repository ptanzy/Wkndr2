import React, { Component } from "react";

// Import Materialize
import M from "materialize-css";

class NavBar extends Component {
  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }

  render() {
    return (
      <React.Fragment>
        <nav className="nav-extended">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              WKNDR
            </a>
            <a href="/" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down" />
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default NavBar;
