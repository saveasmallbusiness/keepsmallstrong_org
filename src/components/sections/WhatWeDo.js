import React from 'react';
import { navigate } from 'gatsby';

import fightForSmallImage from '../../assets/images/fight-for-small-business.png'
import commerceIcon from '../../assets/images/icon-commerce.png';
import awarenessImage from '../../assets/images/icon-awareness.png';
import logisticsImage from '../../assets/images/icon-logistics.png';
import Button from '../Button';

const WhatWeDo = () => (
  <div className="bg-accent">
    <div className="container px-8 sm:px-16 mx-auto text-center">
      <h2 className="text-3xl lg:text-4xl mb-8 font-headline uppercase justify-center">
        <img src={fightForSmallImage} className="h-auto mx-auto" alt="The big fight for small business" />
      </h2>
      <p className="mb-12 text-xl m:mb-24 m:w-8/12">
        By pooling the collective knowledge and resources of the top agencies in the world,
        we can bring to small business owners the solutions, networks and tools we employ for our largest clients
        at virtually no cost, no strings attached.
      </p>
      <div className="flex flex-col lg:flex-row">
      <div style={{ background: 'white', borderRadius: 8, padding: 20 }} className="flex flex-col flex-1 content-center m-4 md:px-4">
          <div className="m-8">
            <img style={{ maxHeight: 100 }} className="mx-auto" src={commerceIcon} alt="E-Commerce" />
          </div>
          <p className="mb-6 font-bold font-headline text-2xl uppercase">
            E-Commerce
          </p>
          <p className="font-body">
            We can help those who rely on foot traffic, stand up an online storefront in a matter of hours/days.
          </p>
        </div>
      <div style={{ background: 'white', borderRadius: 8, padding: 20 }} className="flex flex-col flex-1 content-center m-4 md:px-4">
          <div className="m-8">
            <img style={{ maxHeight: 100 }} className="mx-auto" src={awarenessImage} alt="Awareness" />
          </div>
          <p className="mb-6 font-bold font-headline text-2xl uppercase">
            Awareness
          </p>
          <p className="font-body">
            We can help those tethered to local neighborhoods increase their exposure regionally and nationally.
          </p>
        </div>
      <div style={{ background: 'white', borderRadius: 8, padding: 20 }} className="flex flex-col flex-1 content-center m-4 md:px-4">
          <div className="m-8">
            <img style={{ maxHeight: 100 }} className="mx-auto" src={logisticsImage} alt="Logistics" />
          </div>
          <p className="mb-6 font-bold font-headline text-2xl uppercase">
            Logistics
          </p>
          <p className="font-body">
            We can assist with setting up local delivery, ship-from-store, as well as logistics and customer service.
          </p>
        </div>
      </div>
      <div>
        <Button className="mt-16 bg-dark" onClick={() => navigate('/apply')}>
          <span className="text-xl">Let Us HELP Your Small Business</span>
        </Button>
      </div>
    </div>
  </div>
);

export default WhatWeDo;
