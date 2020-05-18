import React from 'react';
import { navigate } from 'gatsby';

import Button from '../Button';
import marketplaceHero from '../../assets/images/marketplace_hero.png';

const MarketplaceHero = () => (
  <section className="bg-primary">
    <div className="container mx-auto">
      <div className="relative">
        <img className="w-full" src={marketplaceHero} alt="Mom & Pop" />
        <div className="relative lg:absolute px-8 lg:px-0 py-8 lg:py-0 lg:bottom-0 pb-8 lg:pb-16 lg:left-0 lg:ml-4 lg:w-4/12 text-center lg:text-left">
          <div className="mb-4">The best way to support small businesses is to SHOP small and buy directly from them. Search for a business in your community, or for anything at all you’re looking for. Use the marketplace below to find small businesses across the country that need YOUR help.</div>
          <div>
            <Button color="dark" size="sm" onClick={() => navigate('/refer')}>
              <span className="text-xl">SUBMIT A Small Business</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MarketplaceHero;
