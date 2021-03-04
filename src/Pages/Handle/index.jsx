import React, { Component } from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./Handle.css";

class Handle extends Component {
  render() {
    return (
      <div className="social">
        <div>
          <a
            className="s"
            href="https://www.facebook.com/iiitvlitclub/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
        </div>
        <div>
          <a
            className="s"
            href="https://www.instagram.com/alfaaz_iiitv/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
        </div>
        <div>
          <a
            className="s"
            href="https://www.instagram.com/alfaaz_iiitv/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
        <div>
          <a
            className="s"
            href="https://twitter.com/alfaaz_iiitv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
        </div>
      </div>
    );
  }
}

export default Handle;
