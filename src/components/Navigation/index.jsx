import React, { Component } from "react";
import NavigationDrawer from "react-md/lib/NavigationDrawers";
import ToolbarActions from "../ToolbarActions";
import Footer from "../Footer";
import GetNavList from "./NavList";
import "./Navigation.scss";

class Navigation extends Component {
 
  constructor(props) {
    super(props);
    this.state = {isMobile: window.innerWidth < 640};
  }
  
  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        isMobile: window.innerWidth < 640
      })
    }, false);
  }

  componentWillUnmount() {
    window.removeEventListener("resize");
  }

  render() {
    const { children, config, LocalTitle, LocalTitleShort } = this.props;
    const { isMobile } = this.state;
    const footerLinks = LocalTitle !== "About";
    
    return (
      <NavigationDrawer
        drawerTitle={config.navTitle}
        toolbarTitle={isMobile ? LocalTitleShort : LocalTitle}
        contentClassName="main-content"
        navItems={GetNavList(config)}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        toolbarActions={<ToolbarActions config={config} />}
      >
        <div className="main-container">{children}</div>
        <Footer userLinks={footerLinks} />
      </NavigationDrawer>
    );
  }
}

export default Navigation;
