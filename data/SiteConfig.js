module.exports = {
  siteTitle: "justinsoderstrom.com Theme", // Site title.
  siteTitleShort: "justinsoderstrom.com", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Theme for justinsoderstrom.com", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://justinsoderstrom.com", // Domain of your website
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Demo website for justinsoderstrom.com", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "", // Tracking code ID for google analytics.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "MM-DD-YYYY", // Date format used in the frontmatter.
  dateFormat: "MM/DD/YYYY", // Date format for display.
  userName: "John Doe", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "South Dakota, USA", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    `Hi, I'm John Doe. I like writing about programming! Support me plz`, // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Support",
      url: "https://ko-fi.com/",
      iconClassName: "fa fa-coffee"
    },
    {
      label: "GitHub",
      url: "https://github.com/gatsby-justinsoderstrom.com",
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
  navTitle: "justinsoderstrom.com Theme", // Title in the navigation bar.
  copyright: "Copyright © 2019. Justin Soderstrom CC BY 4.0" // Copyright string for the footer of the website and RSS feed.
};
