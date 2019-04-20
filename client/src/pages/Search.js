import React, { Component } from "react";
//import API from "../utils/API";
import { Link } from "react-router-dom";

class Search extends Component {
  render() {
    return (
      <div>
        <h1>Wkndr</h1>
        <li>
          <Link to="/saved">Sign In</Link>
        </li>
        <li>
          <Link to="/search">Sign Up</Link>
        </li>
      </div>
    );
  }
}

export default Search;
