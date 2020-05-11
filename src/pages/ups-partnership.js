import React from 'react';

import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import SEO from '../components/layout/SEO';

const Page = () => (
  <Layout>
    <SEO title="Save Small Business In America" />
    <section className="bg-light">
      <Hero />
    </section>
    <section>
      <div className="container mx-auto">
        <div className="mx-auto px-4 py-4 md:w-8/12 pb-24">
          <p className="mb-6">
            Small.
            <br />
            Certainly not by measure of their ambition,
            <br className="hidden md:block" />
            their work ethic, or, least of all, their contribution.
          </p>

          <p className="mb-6">
            Small businesses in America are not only the embodiment of The Dream,
            <br className="hidden md:block" />
            they’re responsible for nearly half of our economy and two-thirds of all new job creation.
            <br className="hidden md:block" />
            Nothing small about that.
          </p>
          <p className="mb-6">
            And yet their chances of coming out of this crisis unscathed, if at all, feel minuscule right now.
          </p>
          <p className="mb-6">
            As social distancing and shelter-in-place somehow become familiar,
            <br className="hidden md:block" />
            so do store closings, workforce layoffs, and the folding of the businesses
            <br className="hidden md:block" />
            that are the very souls of our communities.
          </p>
          <p className="mb-6">
            Imagine a world without your ‘local.’
            <br className="hidden md:block" />
            Saturday mornings with nowhere to run out to in your sweats.
            <br className="hidden md:block" />
            Your corner, just a place where two streets meet.
          </p>
          <p className="mb-6">
            We all take ownership of these establishments.
            <br className="hidden md:block" />
            MY bakery. MY hardware store. MY barber shop.
          </p>
          <p className="mb-6">
            And so at this critical moment, we must take a stake in their future.
          </p>
          <p className="mb-6">
            By pooling the collective knowledge and resources of the top agencies in the world,
            <br className="hidden md:block" />
            we can bring to small business owners the solutions, networks and tools we employ for our largest clients
            <br className="hidden md:block" />
            at virtually no cost, no strings attached.
          </p>
          <p className="mb-6">
            We can get those who rely on foot traffic online in a matter of hours.
            <br className="hidden md:block" />
            We can help those tethered to neighborhoods expand regionally and nationally.
            <br className="hidden md:block" />
            We can assist with fulfilment, logistics and customer service.
            <br className="hidden md:block" />
            And when we buy, we can all think twice about who we’re buying from.
          </p>
          <p className="mb-6">
            Like any great endeavor, this too starts small.
            <br className="hidden md:block" />
            But together, we can save thousands of small businesses from closing their doors.
            <br className="hidden md:block" />
            And ensure that small stands as strong as ever.
          </p>
          <p>#KeepSmallStrong</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Page;
