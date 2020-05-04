import React from 'react';

import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import SEO from '../components/layout/SEO';
import SizeOfSmall from '../components/sections/SizeOfSmall';
import Articles from '../components/sections/Articles';
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
    <section className="pb-6 md:pb-24 bg-accent">
      <MainCTA />
    </section>
    
    <div id="articles" />
    <section>
      <Articles />
    </section>

    <div id="small-is-massive" />
    <section>
      small is massive section
    </section>

    <div id="save-mom-and-pops" />
    <section>
     mom and pops section
    </section>
    <div id="big-agency-help" />
    <section>
      big agency help
    </section>

    <div id="submit-a-business" />
    <section>
    <HowCanIHelp />
    </section>

    <div id="people-on-board" />
    <section className="py-8 md:py-20">
      people on board section
    </section>

    <div id="end-of-sections" />
    <section className="py-8 md:py-20">
      end of sections
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
    <section className="py-12 md:py-24">
      <Sponsors />
    </section>

  </Layout>
);

export default Home;
