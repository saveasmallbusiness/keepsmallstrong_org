/* eslint-disable global-require */
require('dotenv-flow').config({
  node_env: process.env.SITE_ENV || process.env.NODE_ENV || 'development',
});

const { NODE_ENV } = process.env;
const enableRobots = NODE_ENV === 'production' ? 'allow' : 'disallow';

module.exports = {
  siteMetadata: {
    title: 'Keep Small Strong',
    description: 'Save Small Business In America! Through this collective effort we can prevent thousands of small businesses from closing their doors. And ensure that SMALL remains as strong as ever. #KeepSmallStrong',
    author: '@rsbowers',
    siteUrl: 'https://keepsmallstrong.org',
    keywords: 'keepsmallstrong, small business, smallbusiness, save small business, ecommerce, covid-19, coronavirus, digital agency, website support, help needed, keep small strong',
  },
  plugins: [
    // {
    //   resolve: 'gatsby-plugin-eslint',
    //   options: {
    //     options: {
    //       emitWarning: true,
    //       failOnError: false,
    //     },
    //   },
    // },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-tailwind',
        short_name: 'starter',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#4dc0b5',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require('tailwindcss')('./tailwind.config.js'),
          require('autoprefixer'),
          require('cssnano'),
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        printRejected: true,
        purgeOnly: ['src/css/style.css'],
        whitelistPatternsChildren: [/^ais-/],
        whitelist: [
          'bg-light',
          'bg-secondary',
          'bg-accent',
          'bg-dark',
          'bg-grey',
          'bg-opacity-10',
          'bg-opacity-90',
          'carousel',
          'is-sticky',
          'opacity-10',
          'opacity-90',
          'services-bg',
          'md:transform-neg-50',
          'transform-neg-50',
          'transform-none',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://keepsmallstrong.org',
        resolveEnv: () => enableRobots,
        // sitemap: 'https://keepsmallstrong.org/sitemap.xml',
        env: {
          allow: {
            policy: [
              { userAgent: '*', allow: '/' },
            ],
          },
          disallow: {
            policy: [
              { userAgent: '*', disallow: ['/'] },
            ],
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-KQC476B',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false, // TODO: check if enabled for staging?

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: () => ({
          platform: 'gatsby',
        }),
      },
    },
  ],
};
