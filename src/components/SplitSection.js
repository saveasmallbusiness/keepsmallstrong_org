import React from 'react';

const SplitSection = ({ id, primarySlot, secondarySlot, reverseOrder }) => (
  <section id={id} className="md:py-12">
    <div className="items-center flex flex-col md:flex-row">
      <div className="py-8 px-8 md:w-6/12 lg:w-5/12">{primarySlot}</div>
      <div className={`w-full md:w-6/12 lg:w-7/12 order-first ${reverseOrder ? 'md:order-first' : 'md:order-last'}`}>
        {secondarySlot}
      </div>
    </div>
  </section>
);

export default SplitSection;
