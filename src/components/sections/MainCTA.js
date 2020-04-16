import React from 'react';
import { navigate } from 'gatsby';

import Button from '../Button';

const MainCTA = () => (
  <div className="px-8 md:px-16">
    <div className="flex flex-col lg:flex-row mb-12 uppercase text-2xl justify-center text-center">
      A collective effort to save small business in America.
    </div>
    <div className="block md:flex flex-col lg:flex-row mb-12 lg:mb-24">
      <div className="flex-1 mb-8 lg:mb-0 lg:px-4 mx-4 text-center lg:text-right">
        <Button className="bg-dark md:w-5/12" onClick={() => navigate('/#how-you-can-help')}>
          <span className="text-xl">How YOU Can Help</span>
        </Button>
      </div>
      <div className="flex-1 lg:mb-8 lg:mb-0 lg:px-4 mx-4 text-center lg:text-left">
        <Button className="bg-dark md:w-5/12" onClick={() => navigate('/#how-we-can-help')}>
          <span className="text-xl">How WE Help</span>
        </Button>
      </div>
    </div>
  </div>
);

export default MainCTA;
