import React from 'react';

function LogoAndNavButton() {
    return (
      <div className="hb_logo">
        <a href="#"><img src="images/logo.png" className="img-responsive" alt="" /></a>
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>
    );
  }

  export default LogoAndNavButton;