import React from 'react';

import Layout from '../components/layout/Layout';
import SEO from '../components/layout/SEO';
import Hero from '../components/sections/Hero';
import Form from '../components/Form';

const GetStarted = () => (
  <Layout>
    <SEO title="We're Here To Help" />
    <section>
      <Hero />
    </section>
    <section className="py-12 md:py-24">
      <div className="container px-8 sm:px-16 mx-auto">
        <div className="lg:flex lg:flex-row">
          <div className="lg:w-5/12 mb-8 lg:mb-0 md:pl-4 md:pr-10">
            <p className="text-xl font-headline uppercase mb-4">We're Here To Help</p>
            <h3 className="text-5xl font-headline uppercase leading-none mb-3">
              Your
              <br />
              Small Business
              <br />
              In Need
            </h3>
            <p>
              Small businesses are the epitome of entrepreneurship in America.
              The daily definition of The Dream.
              The living embodiment of the hustle, and roll-up-our-sleeves-and-get-it-done mentality that makes us, us.
              Your business is too important to your community to not get the help it deserves.
            </p>
            <p className="py-4">
              We can help you quickly shift from relying on foot traffic to selling direct online.
              We can assist with fulfilment, logistics and customer service.
              And most important, we can help you get the word out that you're still here and that you need the country's help to continue to thrive.
            </p>
            <p className="py-4">
              Apply today to see if we can help you get going online or just to let the community know you need their support!
            </p>
            <p className="py-4">
              Not your business, but want to refer a small business who could use our help? <a href="/refer">Click here</a> to get them help.
            </p>
          </div>
          <div className="lg:w-7/12 mb-8 lg:mb-0 md:px-4">
            <Form formId="applyForm" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default GetStarted;
