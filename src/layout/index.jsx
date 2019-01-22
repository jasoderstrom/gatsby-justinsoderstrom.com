import React from "react";
import Helmet from "react-helmet";
import "font-awesome/scss/font-awesome.scss";
import Navigation from "../components/Navigation";
import config from "../../data/SiteConfig";
import "./index.scss";
import "./global.scss";
import Favicon from '../JustinFavicon.ico';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Navigation config={config} LocalTitle={config.siteTitle} LocalTitleShort={config.siteTitleShort}>
        <div>
          <Helmet>
            <meta name="description" content={config.siteDescription} />
            <link rel="shortcut icon" href={Favicon} />
          </Helmet>
          {children}
        </div>
      </Navigation>
    );
  }
}
