import React from 'react'
import sizeOfSmallImage from '../../assets/images/the-size-of-small.png'
import gdpImage from '../../assets/images/size-of-small-gdp.png'

const SizeOfSmall = () => (
  <header className="relative top-0 bg-dark px-16 md:px-24 py-12 md:py-24">
    <div className="container py-4 block md:flex md:justify-between md:content-center md:flex-wrap mh-64 mx-auto">
      <div className="md:w-1/2 py-2 md:py-0 md:mt-2 font-headline font-semibold text-1xl">
        <h2 className="mb-8 md:mb-0 md:px-12 text-3xl lg:text-4xl font-headline uppercase">
          <img src={sizeOfSmallImage} alt="The Size Of Small" />
        </h2>
        <div className="md:px-12 md:py-8 md:pr-40 sm:py-4 text-light">
          <p>
            Call them Small. Just not by measure of their ambition, their work ethic, or least of all, their contribution.  The numbers are staggering. A world without SMALL is one we just can not accept. 
          </p>
        </div>
      </div>
      <div className="md:w-1/2 md:mt-3 md:absolute md:right-0 md:transform-neg-50">
        <img src={gdpImage} alt="45% of GDP" />
      </div>
    </div>
  </header>
);

export default SizeOfSmall;
