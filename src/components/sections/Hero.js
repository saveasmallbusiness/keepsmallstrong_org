import React from 'react';

import heroImage from '../../assets/images/KeepSmallStrong-hero.jpg';

const Hero = () => (
  <div className="container mx-auto">
    <div className="text-center pt-12 md:pt-24">
      <img className="mx-auto pb-4" style={{ width: '90%', height: 'auto' }} src={heroImage} alt="Keep Small Strong" />
    </div>
  </div>
);

export default Hero;
