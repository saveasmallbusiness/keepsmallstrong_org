import React from 'react';
import { navigate } from 'gatsby';

import Button from '../Button';
// import background from '../../assets/images/services-background.png';

const Services = () => (
  <div
    className="pb-12 lg:pb-24"
  >
    <div className="container mx-auto pt-12 lg:pt-24 md:bg-right-top md:bg-no-repeat bg-auto md:bg-contain services-bg">
      <div className="md:flex md:items-center md:justify-start pb-12 md:pb-40">
        <div className="md:w-1/3 text-left mx-6 md:mx-12">
          <h3 className="font-heading font-bold text-2xl md:text-4xl uppercase text-secondary leading-tight pb-4 md:pb-8">
            Big Agency Help
            <br />
            For Small Business
          </h3>
          <p>
            By pooling together the collective knowledge and resources of the top creative and digital marketing agencies in the world, we can bring solutions, networks and tools ordinarily used for our largest clients to small business owners, at virtually no cost and with no strings attached.
          </p>
        </div>
      </div>
      <div className="lg:flex lg:items-center lg:justify-start pb-12 lg:pb-24">
        <div className="lg:w-1/3 text-left mx-6 md:mx-12">
          <h3 className="font-heading font-bold text-2xl md:text-4xl uppercase leading-tight pb-4">E-Commerce</h3>
          <p>
            We can help those who rely on foot traffic to start up an online storefrontin a matter of hours or days.
          </p>
          <h3 className="font-heading font-bold text-2xl md:text-4xl uppercase leading-tight pt-12 pb-4">Awareness</h3>
          <p>
            We can help those tethered to local neighborhoods increase their exposure regionally and nationally.
          </p>
          <h3 className="font-heading font-bold text-2xl md:text-4xl uppercase leading-tight pt-12 pb-4">Logistics</h3>
          <p>
            We can assist with setting up delivery, ship-from-store as well as logistics and customer service.
          </p>
        </div>
        <div className="lg:w-2/3 text-center mx-6 pt-24 lg:pt-0 md:mx-12 lg:py-6">
          <Button
            size="lg"
            className="bg-privary rounded-full"
            onClick={() => navigate('/refer')}
          >
            <span className="text-md">submit a business</span>
          </Button>
          <p className="pt-4 md:pt-12 md:px-24">
            Whether you're the business owner or just a fan, let us know if we can help.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Services;
