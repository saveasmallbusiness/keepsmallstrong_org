import React from 'react';
import { navigate } from 'gatsby';

import returnTheFavorImage from '../../assets/images/return-the-favor.png';
import Button from '../Button';

const HowCanIHelp = () => (
  <div className="container px-8 sm:px-16 mx-auto text-center">
    <h2 className="text-2xl lg:text-4xl mb-4 font-headline uppercase justify-center">
      <img src={returnTheFavorImage} className="h-auto mx-auto" alt="Your local has been a rock of the community. Time to return the favor." />
    </h2>
    <p className="text-xl mb-6 mt-4 md:w-8/12 inline-flex justify-center">
      The easiest way to help immediately is to think twice about WHO you’re
      buying from. Shop SMALL where you can and use this resource to connect you
      to small businesses in your community and others.
    </p>
    <p className="mb-12 md:mb-24 md:w-8/12 inline-flex justify-center">
      <Button onClick={() => navigate('/marketplace')}>
        <span className="text-xl">SHOP our Small Business Marketplace</span>
      </Button>
    </p>
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1 mb-8 lg:mb-0 md:px-4 mx-4">
        <p className="mb-6">
          We all take ownership of our favorite local spots. MY bakery. MY
          hardware store. MY barber shop. Now we must truly take stake in their
          future. If you know of a business just trying to survive, submit them
          here and we’ll see how we can help.
        </p>
        <Button className="bg-dark w-8/12" onClick={() => navigate('/refer')}>
          <span className="text-xl">SUBMIT A Small Business</span>
        </Button>
      </div>
      <div className="flex-1 mb-8 lg:mb-0 md:px-4 mx-4">
        <p className="mb-6">
          While we have an ever-growing team behind this effort, we can
          undoubtedly use more help. If you are a developer with time, a
          large company with humans, software, or hardware to spare, or a
          concerned citizen who just wants to help, thank you.
        </p>
        <Button className="bg-dark w-8/12" onClick={() => navigate('/help')}>
          <span className="text-xl">JOIN The Movement</span>
        </Button>
      </div>
    </div>
  </div>
);

export default HowCanIHelp;
