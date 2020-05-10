import React from 'react';
import { navigate } from 'gatsby';

import Button from '../Button';

const MainCTA = () => (
  <div className="px-8 md:px-16 pb-12 md:pb-24">
    <div className="flex flex-col lg:flex-row font-headline font-bold uppercase text-xl lg:text-3xl pb-4 leading-tight justify-center text-center">
      A collective effort to save small business in America.
    </div>
    <div className="flex flex-col lg:flex-row mb-8 lg:text-xl leading-tight justify-center text-center">
      offering online tools to grow digital business and a marketplace to buy direct.
    </div>
    <div className="block md:flex flex-col md:flex-row">
      <div className="md:flex-1 mx-2 text-center md:text-right mb-4 md:mb-0">
        <Button
          className="bg-accent md:w-8/12 lg:w-auto rounded-full"
          onClick={() => navigate('/apply')}
        >
          <span className="text-sm md:text-md lg:text-lg">get a business help</span>
        </Button>
      </div>
      <div className="md:flex-1 mx-2 text-center md:text-left">
        <Button
          className="bg-primary md:w-8/12 lg:w-auto rounded-full"
          onClick={() => navigate('/marketplace')}
        >
          <span className="text-sm md:text-md lg:text-lg">shop the marketplace</span>
        </Button>
      </div>
    </div>
  </div>
);

export default MainCTA;
