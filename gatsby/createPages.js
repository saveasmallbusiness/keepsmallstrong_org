const algoliasearch = require('algoliasearch/lite');
const path = require('path');
const { slugify } = require('../src/utils');

require('dotenv-flow').config({
  node_env: process.env.SITE_ENV || process.env.NODE_ENV || 'development',
});

const getIndexedObjects = async (index, query = '', filters) => {
  let hits = [];
  await index.browseObjects({
    query, // Empty query will match all records
    ...filters && { filters },
    batch: batch => {
      hits = hits.concat(batch);
    }
  });
  return hits;
}

module.exports = async ({ actions }) => {
  const { createPage } = actions;
  const { GATSBY_ALGOLIA_ACCOUNT, GATSBY_ALGOLIA_INDEX, ALGOLIA_ADMIN_KEY } = process.env;
  const client = algoliasearch(GATSBY_ALGOLIA_ACCOUNT, ALGOLIA_ADMIN_KEY);
  const index = client.initIndex(GATSBY_ALGOLIA_INDEX);
  const pageTemplate = path.resolve('./src/templates/listingDetail.js');
  const hits = await getIndexedObjects(index);
  
  if (hits && hits.length) {
    hits.forEach((hit) => {
      const { name, hide } = hit || {};
      if (name && !hide ) {
        const slug = slugify(name);
        console.log(`Created page: '/marketplace/${slug}'`)
        return createPage({
          path: `/marketplace/${slug}`,
          component: pageTemplate,
          context: {
            ...hit,
            slug,
          },
        });
      }
    });
  }
};
