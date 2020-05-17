import React from 'react';
import { navigate } from 'gatsby';

import forbesLogo from '../../assets/images/forbesLogo.png';
import forresterLogo from '../../assets/images/Forrester.png';
import thriveLogo from '../../assets/images/thrive.png';

const ArticleQuotes = () => (
  <div className="container mx-auto py-6 md:py-16">
    <div className="block md:flex">
      <a
        className="md:w-1/3 px-4 py-8 md:py-0 text-center"
        href="https://www.forbes.com/sites/amyblaschka/2020/03/30/heres-how-to-save-small-businesses-and-keepsmallstrong"
        target="_blank"
      >
        <div className="mx-auto" style={{ maxWidth: 300, width: '100%' }}>
          “There are thousands and thousands of businesses who may not make it through this. Their initiative has a simple goal: to change the trajectory of as many small businesses as possible.”
        </div>
        <div className="pt-2 md:pt-8">
          <img src={forbesLogo} className="mx-auto" style={{ height: 35, width: 'auto' }} alt="Forbes" />
        </div>
      </a>
      <a
        className="md:w-1/3 px-4 py-8 md:py-0 text-center"
        href="https://go.forrester.com/blogs/commerce-tech-inspired-individuals-band-together-to-save-small-businesses/"
        target="_blank"
      >
        <div className="mx-auto" style={{ maxWidth: 300, width: '100%' }}>
          “The organization’s mission is to help small shops move online fast (think projects that are underway within days and fully functional within weeks), no strings attached.”
        </div>
        <div className="pt-2 md:pt-8">
          <img src={forresterLogo} className="mx-auto" style={{ height: 35, width: 'auto' }} alt="Forbes" />
        </div>
      </a>
      <a
        className="md:w-1/3 px-4 py-8 md:py-0 text-center"
        href="https://thriveglobal.com/stories/how-you-can-support-small-businesses-during-covid-19/"
        target="_blank"
      >
        <div className="mx-auto" style={{ maxWidth: 300, width: '100%' }}>
          “The goal of #KeepSmallStrong is to change the downward trajectory of as many small businesses as possible. They are offering these businesses the expertise, experience, and technical solutions for free.”
        </div>
        <div className="pt-2 md:pt-8">
          <img src={thriveLogo} className="mx-auto" style={{ height: 30, width: 'auto' }} alt="VegNews" />
        </div>
      </a>
    </div>
  </div>
);

export default ArticleQuotes;
