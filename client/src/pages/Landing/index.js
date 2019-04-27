import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

//
import Delay from 'react-delay';

import Firebase from '../../firebase.js';
//

const $ = require("jquery");


class Landing extends Component {

  componentDidMount() {
    // Auto initialize all the things!
    $(document).foundation()
  }

  signUp = event => {
    event.preventDefault();
    var userData = {
        email: event.target.form[0].value,
        password: event.target.form[1].value,
        username: 0
    };
    Firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
    .then(function(user){
        userData.username = user.user.uid;
        localStorage.setItem('username', user.user.uid.toString());
        $.post("/api/users", userData)
        .then(function() {
          getUsers();
        });
        
    })
    .catch(function(error){
        alert(error);
      });
  
    function getUsers() {
      $.get("/api/users", function(data) {
        var uname = localStorage.getItem("username");
        for (var i=0; i < data.length; i++){
          if (data[i].username == uname){
            localStorage.setItem('userID', data[i].id.toString());
            window.location.href = "/create";
          }
        }
      });
    }
    
  };

  login = event => {
    event.preventDefault();
    var email = event.target.form[0].value;
    var password = event.target.form[1].value;
    Firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(user){
        console.log(user);
        localStorage.setItem('userID', user.user.uid);
        window.location.href = "/create"; //redirects user to datasets page
    })
    .catch(function(error){
        alert(error);
    });
    
  }

  render() {
    return (
      <React.Fragment>
        <div className="entire">
          <div className="hero-full-screen">

            <div className="top-content-section"></div>
    
            <div className="middle-content-section">
              <h1>Seeking Adventure?</h1>
            </div>
    
            <div className="bottom-content-section" data-magellan data-threshold="0">
              <a href="#main-content-section"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z"/></svg></a>
            </div>

          </div>

          <div id="main-content-section" data-magellan-target="main-content-section">
            <div id="button-group">
              <button href="#" className="button large" data-open="sign-in-modal">Login</button>
              <button href="#" className="button large" data-open="sign-up-modal">Sign Up</button>
              <h1>Enjoy Wkndr!</h1>
            </div>
          </div>
          

          <div className="reveal sign-in-modal" id="sign-in-modal" data-reveal>
            <form onSubmit={e => e.preventDefault()}>
              <h3>Login to Wkndr</h3>
              <div className="row columns">
                <label>E-Mail
                  <input type="text" name="keyword" placeholder="E-Mail"></input>
                </label>
              </div>
              <div className="row columns">
                <label>Password
                  <input type="text" name="keyword" placeholder="Password"></input>
                </label>
              </div>
              <button type="button" className="primary button expanded search-button" onClick={this.login}>
                LOGIN
              </button>
            </form>
          </div>

          <div className="reveal sign-up-modal" id="sign-up-modal" data-reveal>
            <form onSubmit={e => e.preventDefault()}>
              <h3>Sign Up to Wkndr</h3>
              <div className="row columns">
                <label>E-Mail
                  <input type="text" name="keyword" placeholder="Username"></input>
                </label>
              </div>
              <div className="row columns">
                <label>Password
                  <input type="text" name="keyword" placeholder="Password"></input>
                </label>
              </div>
              <button type="button" className="primary button expanded search-button" onClick={this.signUp}>
                SIGN UP
              </button>
            </form>
          </div>

        </div>
      </React.Fragment>
    );
  }
}

export default Landing;