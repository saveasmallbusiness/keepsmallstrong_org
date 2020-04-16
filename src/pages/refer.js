import React from 'react';

import Layout from '../components/layout/Layout'
import Hero from '../components/sections/Hero'
import Form from '../components/Form'

const GetStarted = () => {

  return (
    <Layout>
      <section>
        <Hero />
      </section>
      <section className='py-12 md:py-24'>
        <div className="container px-8 sm:px-16 mx-auto">
          <div className="lg:flex lg:flex-row">
            <div className="lg:w-5/12 mb-8 lg:mb-0 md:pl-4 md:pr-10">
              <p className="text-xl font-headline uppercase mb-4">Time to return the favor</p>
              <h3 className="text-5xl font-headline uppercase leading-none mb-3">Know a Small Business<br/>In Need?</h3>
              <p>
                Imagine a world without your ‘local’?
                Saturday mornings with nowhere to run out to in your sweats.
                Your corner, just a place where two streets meet.
              </p>
              <p className="py-4">
                We all take ownership of these establishments.<br/>
                MY bakery. MY hardware store. MY barber shop.<br/>
                And so at this critical moment, we must take a stake in their future.
              </p>
              <p>
                If your 'local' needs help, step up and let us know!<br/>
                If you know a small business trying to get by that just needs a little extra love and support from the community, help get the word out.
              </p>
            </div>
            <div className="lg:w-7/12 mb-8 lg:mb-0 md:px-4">
              <Form formId="referForm" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetStarted
