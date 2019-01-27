module.exports = {
  siteTitle: "Justin Soderstrom | Full Stack Software Engineer", // Site title.
  siteTitleShort: "Justin Soderstrom", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Justin Soderstrom's Blog", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://justinsoderstrom.com", // Domain of your website
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Thoughts and ideas by Justin Soderstrom", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "562050787592905", // FB Application ID for using app insights
  siteGATrackingID: "UA-104918080-1", // Tracking code ID for google analytics.
  disqusShortname: "justinsoderstrom", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "MM-DD-YYYY", // Date format used in the frontmatter.
  dateFormat: "MM/DD/YYYY", // Date format for display.
  userName: "Justin Soderstrom", // Username to display in the author segment.
  userTwitter: "jasoderstrom", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "South Dakota, USA", // User location to display in the author segment.
  userAvatar: "/logos/avatar.png", // User avatar to display in the author segment.
  userDescription:
    `Hi, I'm Justin Soderstrom. I'm a full stack software engineer who is passionate about all things web, with a particular interest in the .NET stack.
    I use this blog to document what I learn and perhaps help someone along the way. If this blog does end up helping you, please consider buying me a coffee by clicking on the cup logo below!`, // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Support",
      url: "https://ko-fi.com/justinsoderstrom",
      iconClassName: "fa fa-coffee"
    },
    {
      label: "GitHub",
      url: "https://github.com/jasoderstrom",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/jasoderstrom",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:justin@justinsoderstrom.com",
      iconClassName: "fa fa-envelope"
    },
    {
      label: "Subscribe",
      url: "/rss.xml",
      iconClassName: "fa fa-rss"
    }
  ],
  navTitle: "Justin Soderstrom", // Title in the navigation bar.
  copyright: "Copyright © 2019. Justin Soderstrom CC BY 4.0" // Copyright string for the footer of the website and RSS feed.
};
