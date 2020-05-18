import React from 'react';

import Layout from '../components/layout/Layout';
import SEO from '../components/layout/SEO';
import MarketplaceHero from '../components/marketplace/MarketplaceHero';
import Search from '../components/sections/Search';

const Marketplace = ({ deeplinkedListing }) => (
  <Layout>
    <SEO title="Find A Small Business To Support" />
    <MarketplaceHero />
    <Search deeplinkedListing={deeplinkedListing} />
    <div className="text-xl px-8 md:px-0 font-headline mb-20 italic text-center">
      <span>If you would like your listing modified or removed from this page, please contact us at </span>
      <a href="mailto:help@keepsmallstrong.org">help@keepsmallstrong.org</a>
    </div>
  </Layout>
);

export default Marketplace;
