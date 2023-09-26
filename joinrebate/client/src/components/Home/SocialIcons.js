import React, { useState } from 'react';


// Create a sub-component for the social icons
function SocialIcons() {
  return (
    <div className="hb_header_social_icon">
      <ul>
        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
      </ul>
    </div>
  );
}

export default SocialIcons;