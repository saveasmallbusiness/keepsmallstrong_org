import React from 'react';

import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import Form from '../components/Form';

const GetStarted = () => (
  <Layout>
    <section>
      <Hero />
    </section>
    <section className="py-12 md:py-24">
      <div className="container px-8 sm:px-16 mx-auto">
        <div className="lg:flex lg:flex-row">
          <div className="lg:w-5/12 mb-8 lg:mb-0 md:pl-4 md:pr-10">
            <p className="text-xl font-headline uppercase mb-4">How Can You Help?</p>
            <h3 className="text-5xl font-headline uppercase leading-none mb-3">
              Small Business
              <br />
              Needs Us More Than Ever
            </h3>
            <p>
              While we have an ever-growing team behind this effort, we can undoubtedly use more help.
            </p>
            <p className="py-8">
              Small business in America is not only the embodiment of The Dream, they’re responsible for nearly half of our economy and two-thirds of all new job creation. Together, we can save thousands of small businesses from closing their doors. And ensure that small stands as strong as ever.
            </p>
          </div>
          <div className="lg:w-7/12 mb-8 lg:mb-0 md:px-4">
            <Form formId="helpForm" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default GetStarted;
