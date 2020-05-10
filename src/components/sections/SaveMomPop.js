import React from 'react';
import { navigate } from 'gatsby';

import Button from '../Button';
import card1 from '../../assets/images/small-business-ideas.jpg';

const BusinessCard = ({ image, title }) => (
  <div className="md:w-1/2 mx-6 md:mx-1 my-12 md:my-4">
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="relative bg-accent rounded-lg h-40 bg-cover"
    >
      <div
        style={{ bottom: -16, left: 8 }}
        className="bg-accent rounded-full absolute text-sm p-1 px-4"
      >
        {title}
      </div>
    </div>
  </div>
);

const SaveMomPop = () => (
  <div className="container block lg:flex lg:items-center lg:justify-center mx-auto py-12 lg:py-24">
    <div className="lg:w-1/3 text-left mx-6 md:mx-12 lg:pr-12">
      <h3 className="font-heading font-bold text-2xl md:text-4xl uppercase text-primary leading-tight pb-4 lg:pb-8">
        Save Mom
        <br />
        and Pops
      </h3>
      <p className="text-white pb-4">
        The easiest way to help immediately is to think twice about who you’re buying from.
      </p>
      <p className="text-white pb-8 lg:pb-12">
        Shop small where you can and use this resource to connect you to small businesses in your community and others.
      </p>
      <Button
        className="bg-accent rounded-full"
        onClick={() => navigate('/marketplace')}
      >
        <span className="text-sm lg:text-md">shop the Marketplace</span>
      </Button>
    </div>
    <div className="md:mx-12 lg:mx-0 md:py-12 lg:py-0 lg:w-2/3">
      <div className="md:flex">
        <BusinessCard image={card1} title="American Artisans" />
        <BusinessCard image={card1} title="American Artisans" />
      </div>
      <div className="md:flex">
        <BusinessCard image={card1} title="American Artisans" />
        <BusinessCard image={card1} title="American Artisans" />
      </div>
    </div>
  </div>
);

export default SaveMomPop;
