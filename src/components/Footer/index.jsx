import React, { Component } from "react";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./Footer.scss";

class Footer extends Component {
  render() {
    const { userLinks } = this.props;
    const { copyright, fixedFooter } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className={fixedFooter ? "footer footer-fixed md-background--primary" : "footer md-background--primary"}>
        <div className="notice-container">
          <div className="copyright">
            <h4>{copyright}</h4>
          </div>
          <div className="link">
            {userLinks ? <UserLinks config={config} labeled /> : null}
          </div>
          <div className="based-on">
            <h4>
              Based on{" "}
              <a href="https://github.com/Vagr9K/gatsby-material-starter">
                Gatsby Material Starter
              </a>.
            </h4>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
