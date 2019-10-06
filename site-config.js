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
        // Defines where to place the tracking script - 'true' in the head and 'false' in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
        // Enables Google Optimize Experiment ID
        // experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'usaspousevisa.com',
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
