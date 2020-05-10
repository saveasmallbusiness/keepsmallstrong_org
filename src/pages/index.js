import React from 'react';

import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import SEO from '../components/layout/SEO';
import ArticleQuotes from '../components/sections/ArticleQuotes';
import MainCTA from '../components/sections/MainCTA';
import ContentCarousel from '../components/sections/ContentCarousel';
import Sponsors from '../components/sections/Sponsors';
import SaveMomPop from '../components/sections/SaveMomPop';
import Services from '../components/sections/Services';

import noiseAccent from '../assets/images/noise-yellow.jpg';
import noisePrimary from '../assets/images/noise-blue.jpg';
import noiseSecondary from '../assets/images/noise-red.jpg';

const Home = () => (
  <Layout>
    <SEO title="Save Small Business In America" />
    <section className="bg-light">
      <Hero />
    </section>

    <div id="ctas" />
    <section>
      <MainCTA />
    </section>

    <div className="border-t-2 border-dotted border-primary-light" />

    <div id="articles" />
    <section>
      <ArticleQuotes />
    </section>

    <div id="small-is-massive" />
    <section
      style={{
        backgroundImage: `url(${noisePrimary})`,
      }}
      className="bg-primary"
    >
      <ContentCarousel />
    </section>

    <div id="save-mom-and-pops" />
    <section
      style={{
        backgroundImage: `url(${noiseSecondary})`,
      }}
      className="bg-secondary"
    >
      <SaveMomPop />
    </section>

    <div id="big-agency-help" />
    <section>
      <Services />
    </section>

    <div id="sponsors" />
    <section
      style={{
        backgroundImage: `url(${noiseAccent})`,
      }}
      className="bg-accent"
    >
      <Sponsors />
    </section>

  </Layout>
);

export default Home;
