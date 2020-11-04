import React from 'react';
// style
import "./style.css";

function Footer () {
  return (
    <footer className="footer">
      <span>
          <a class="btn btn-social-icon btn-github" id="footerIcon" href="https://github.com/wilsoncollin7" target="_">
              <span class="fa fa-github"></span>
          </a>
          <a class="btn btn-social-icon btn-facebook" id="footerIcon" href="https://www.facebook.com/collin.wilson.167/" target="_">
              <span class="fa fa-facebook"></span>
          </a>
          <a class="btn btn-social-icon btn-instagram" id="footerIcon" href="https://www.instagram.com/callingmewilson/" target="_">
              <span class="fa fa-instagram"></span>
          </a>
          <a class="btn btn-social-icon btn-linkedin" id="footerIcon" href="https://www.linkedin.com/in/collin-wilson-a512351a8/" target="_">
              <span class="fa fa-linkedin"></span>
          </a>
          <a class="btn btn-social-icon btn-youtube" id="footerIcon" href="https://www.youtube.com/channel/UCxEPolHlcRK6zDetwazkm9w?view_as=subscriber" target="_">
              <span class="fa fa-youtube"></span>
          </a>
      </span>
    </footer>
  );
}

export default Footer;
