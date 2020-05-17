import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import img99percent from '../../assets/images/99-percent.png';

const ContentPanel = ({ children }) => (
  <div className="width-full py-12 md:py-24">
    <div>
      <div className="container block md:flex md:items-center md:justify-center md:mx-auto">
        {children}
      </div>
    </div>
  </div>
);

// TODO remove the showIndicators props once we have more than one slide
const ContentCarousel = () => (
  <Carousel
    showStatus={false}
    showThumbs={false}
    showIndicators={false}
  >
    <ContentPanel>
      <div className="md:w-1/2 text-left mx-6 md:mx-12">
        <h3 className="font-heading font-bold text-2xl md:text-4xl uppercase text-white leading-tight pb-4 md:pb-8">
          Small is
          <br />
          actually massive
        </h3>
        <div className="leading-snug md:w-3/4 pb-6 md:pb-0">Call them Small. Just not by measure of their ambition, their work ethic, or least of all, their contribution.  The numbers are staggering. A world without SMALL is one we just can not accept. </div>
      </div>
      <div className="md:w-1/2 mx-12 md:mx-0">
        <img alt="small is actually massive" src={img99percent} />
      </div>
    </ContentPanel>
  </Carousel>
);

export default ContentCarousel;
