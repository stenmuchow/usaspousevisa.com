const path = require('path');

module.exports = {
  siteTitle: 'USA Spouse Visa',
  siteTitleShort: 'USA Spouse Visa',
  siteDescription: 'A journey through a visa process (2019)',
  siteUrl: 'https://usaspousevisa.com',
  themeColor: '#000',
  backgroundColor: '#fff',
  pathPrefix: null,
  logo: path.resolve(__dirname, 'src/images/icon.png'),
  social: {
    twitter: 'gatsbyjs',
    fbAppId: '966242223397117',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-149368306-1',
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'USA Spouse Visa',
        short_name: 'USA Spouse Visa',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
      },
    },
  ],
};
