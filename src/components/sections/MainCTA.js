import React from 'react';
import { navigate } from 'gatsby';

import Button from '../Button';

const MainCTA = () => (
  <div className="px-8 md:px-16">
    <div className="flex flex-col lg:flex-row mb-2 uppercase text-2xl justify-center text-center">
      A collective effort to save small business in America.
    </div>
    <div className="flex flex-col lg:flex-row mb-12 text-xl justify-center text-center">
      offering online tools to grow digital business and a marketplace to buy direct.
    </div>
    <div className="block md:flex flex-col lg:flex-row mb-12 lg:mb-24">
      <div className="flex-1 mb-8 lg:mb-0 lg:px-4 mx-4 text-center lg:text-right">
        <Button className="bg-accent md:w-5/12 rounded-full" onClick={() => navigate('/apply')}>
          <span className="text-xl">Get a business help</span>
        </Button>
      </div>
      <div className="flex-1 lg:mb-8 lg:mb-0 lg:px-4 mx-4 text-center lg:text-left">
        <Button className="bg-primary md:w-5/12 rounded-full" onClick={() => navigate('/marketplace')}>
          <span className="text-xl">Shop the marketplace</span>
        </Button>
      </div>
    </div>
  </div>
);

export default MainCTA;
