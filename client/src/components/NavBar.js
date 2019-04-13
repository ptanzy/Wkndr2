import React, {Component} from 'react';

// Import Materialize
import M from "materialize-css";


class NavBar extends Component {

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    
    render() {
        return(
          <React.Fragment>
            <nav class="nav-extended">
              <div class="nav-wrapper">
                <a href="#" class="brand-logo">Google Books</a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                  <li><a href="/search">Search</a></li>
                  <li><a href="/saved">Saved</a></li>
                </ul>
              </div>
            </nav>
            <ul class="sidenav" id="mobile-demo">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </React.Fragment>
        )
    }
}

export default NavBar;