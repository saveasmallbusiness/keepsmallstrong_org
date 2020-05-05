import React from 'react';

import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import SEO from '../components/layout/SEO';
import SizeOfSmall from '../components/sections/SizeOfSmall';
import HowCanIHelp from '../components/sections/HowCanIHelp';
import WhatWeDo from '../components/sections/WhatWeDo';
import MainCTA from '../components/sections/MainCTA';
import Sponsors from '../components/sections/Sponsors';

const Home = () => (
  <Layout>
    <SEO title="Save Small Business In America" />
    <section className="bg-light">
      <Hero />
    </section>

    <div id="ctas" />
    <section className="pb-6 md:pb-24">
      <MainCTA />
    </section>

    <div id="size-of-small" />
    <section>
      <SizeOfSmall />
    </section>

    <div id="how-you-can-help" />
    <section className="py-8 md:py-20">
      <HowCanIHelp />
    </section>

    <div id="how-we-can-help" />
    <section className="py-8 md:py-20 bg-accent">
      <WhatWeDo />
    </section>

    <div id="sponsors" />
    <section className="py-12 md:py-24 bg-accent">
      <Sponsors />
    </section>

  </Layout>
);

export default Home;
