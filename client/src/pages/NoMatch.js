import React from "react";

function NoMatch() {
  return (
    <div class="container">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title centered">404 Page Not Found</span>
          <p class="centered">We're awfully sorry, but the page you are trying to reach cannot be found. Please try your call
            again or navigate back to our home. Thank you!.</p>
        </div>
        <div class="card-action">
          <a href="/search">Our Home</a>
        </div>
      </div>
    </div>
  );
}

export default NoMatch;